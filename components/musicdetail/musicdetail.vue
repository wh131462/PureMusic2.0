<template>
	<view>
		<view class="music-detail" :style="'height:calc(100vh - '+(44 + statusHeight) +'px)'">
			<view class="music-detail-info">
				<view class="music-detail-info-cover">
					<image :src="playNow.cover" mode=""></image>
				</view>
				<view class="music-detail-info-text">
					<text class="music-detail-info-text-title">{{playNow.title}}</text>
					<text class="music-detail-info-text-author">{{playNow.author}}</text>
					<text class="music-detail-info-text-lrc">{{nowLrc}}</text>
				</view>
			</view>
			<view class="music-detail-controls">
				<view class="music-detail-controls-prograss">
					<slider :value="nowVal" min="0" max="100" block-size="8" block-color="#FFFFFF"
						backgroundColor="#d2d3d3" activeColor="#9ae7e7" @changing="prograssChanging()"
						@change="prograssChanged" />
					<view class="music-detail-controls-prograss-label">
						<text class="music-detail-controls-prograss-label-now">{{convertTime(Player.currentTime)}}</text>
						<text class="music-detail-controls-prograss-label-dur">{{convertTime(Player.duration)}}</text>
					</view>
				</view>
				<view class="music-detail-controls-main">
					<uni-icons :type="'icon-'+playMode" customPrefix="iconfont" size="28" color="white" @click="changeMode()"></uni-icons>
					<uni-icons type="icon-presong" customPrefix="iconfont" size="28" color="white" @click="PreSong()"></uni-icons>
					<!-- Play | Pause -->
					<uni-icons v-if="!isPlaying" type="icon-Play" customPrefix="iconfont" size="56" color="white" @click="Play()"></uni-icons>
					<uni-icons v-else type="icon-Pause" customPrefix="iconfont" size="56" color="white" @click="Pause"></uni-icons>
					
					<uni-icons type="icon-nextsong" customPrefix="iconfont" size="28" color="white" @click="NextSong()"></uni-icons>
					<uni-icons type="icon-playlist" customPrefix="iconfont" size="28" color="white"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapGetters,
		mapMutations,
		mapActions
	} from "vuex"
	
	export default {
		name: "musicdetail",
		props: {
			tabHeight: Number,
			statusHeight: Number
		},
		data() {
			return {
				vol: 100, //??????
				isChanging:false,
				nowVal: 0, //??????????????????
				time: "0:00/0:00", //??????????????????
				//interval
				interval: {}
			};
		},
		beforeMount() {
			console.log("?????????");
			//????????????
			if(this.Player.src){
				let _this = this;
				_this.changePrograss();
				_this.changeTime();
				if(this.isPlaying){
					this.interval = setInterval(() => {
						_this.changePrograss();
						_this.changeTime()
					}, 100);
				}
			}
		},
		mounted() {
			this.getVolume();
		},
		computed: {
			...mapState({
				isPlaying:state=>state.isPlaying,
				isEnd:state=>state.isEnd,
				Player: state => state.Player,
				playMode: state => state.playMode
			}),
			...mapState('Music', {
				playNow: state => state.playNow,
				musicList: state => state.musicList,
				nowLrc:state=>state.nowLrc
			})
		},
		watch:{
			//????????????????????????
			isPlaying: {
				handler(n, o) {
					if (n) {
						//????????? ???????????????
						let _this = this;
						this.interval = setInterval(() => {
							_this.changePrograss();
							_this.changeTime()
						}, 500);
					} else {
						clearInterval(this.interval);
					}
					console.log("isPlaying", n)
				}
			},
			isEnd:{
				handler(n,o){
					//???????????????????????????
					console.log("isEnd",n)
					if(n){
						this.NextSong();
					}
				}
			}
		},
		methods: {
			...mapMutations([
				'Play',
				'Pause',
				'changeMode',
				'Seek',
				'PreSong',
				'NextSong',
			]),
			//????????????
			getVolume() {
				//#ifdef APP-PLUS
				let vol = plus.device.getVolume();
				//#endif
				//#ifndef APP-PLUS
				let vol =0;
				//#endif
				
				console.log(vol)
				this.vol = vol*100;
			},
			//????????????
			setVolume(e) {
				let vol = e.detail.value / 100;
				//#ifdef APP-PLUS
				plus.device.setVolume(vol);
				//#endif
				console.log("??????????????????")
			},
			//????????????
			convertTime(duration) {
				//?????????????????? ???????????????
				if (typeof duration === "string") {
					let arr = duration.split(":"),
						dur = 0;
					for (let i = arr.length - 1; i >= 0; i--) {
						dur += arr[i] * Math.pow(60, i);
					}
					return dur;
				} else {
					//??????????????? ??????????????????
					let seconds = parseInt(duration % 60),
						minutes = parseInt(duration % (60 * 60) / 60),
						hours = parseInt(duration / (60 * 60));
					return hours == 0 ? minutes + ":" + (seconds < 10 ? "0" + seconds : seconds) : (minutes < 10 ? "0" +
						minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
				}
			},
			//????????????
			changeTime() {
				var _this = this;
				let cur = _this.Player.currentTime,
					dur = _this.Player.duration;
				_this.time = _this.convertTime(cur) + "/" + _this.convertTime(dur);
			},
			//??????????????????
			prograssChanging() {
				this.isChanging = true;
			},
			//?????????????????????
			prograssChanged(e) {
				this.isChanging = false;
				console.log(e.detail.value)
				let nowVal = e.detail.value;
				let newTime = (nowVal / 100) * this.Player.duration;
				console.log(newTime);
				this.Seek(newTime);
			},
			//?????????????????? ?????????
			changePrograss() {
				if (this.isChanging) {
					return;
				}
				let newVal = (this.Player.currentTime / this.Player.duration) * 100;
				this.nowVal = newVal;
				//console.log(this.nowVal);
			}
		}
	}
</script>

<style scoped>
	/* detail ?????? */
	.music-detail {
		width: 100vw;
		/* ?????????js??????????????? */
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items:center;
		overflow: hidden;
	}
	/* info ???cover text */
	.music-detail-info{
		display: flex;
		flex-direction: column;
		justify-content:flex-start;
		align-items: center;
	}
	.music-detail-info-cover{
		margin: 10vw auto;
		width: 80vw;
		height: 80vw;
		overflow: hidden;
		border-radius: 20rpx;
	}
	.music-detail-info-cover image{
		width: 100%;
		height: 100%;
	}
	.music-detail-info-text{
		width: 80vw;
		height: 25%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: baseline;
	}
	/* text */
	.music-detail-info-text-title{
		display:inline-block;
		width: 100%;
		text-overflow: ellipsis;
		font-size: 1.1rem;
	}
	.music-detail-info-text-author{
		display:inline-block;
		font-size: 0.8rem;
		color: #DDD;
		margin:10rpx 0;
		
	}
	.music-detail-info-text-lrc{
		display:inline-block;
		font-size: 0.8rem;
		color: #DDD;
		margin:10rpx 0;
		
	}
	/* controls ???prograss main*/
	.music-detail-controls{
		width: 80vw;
		height:calc(70% - 100vw);
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-content: center;
		position: absolute;
		bottom: 0;
	}
	/* prograss ???slider label*/
	.music-detail-controls-prograss slider{
		margin: 0;
		padding: 0 0 0 10rpx;
	}
	
	.music-detail-controls-prograss-label{
		text-align: center;
		position: relative;
	}
	.music-detail-controls-prograss-label-now{
		position: absolute;
		left: 0;
	}
	.music-detail-controls-prograss-label-dur{
		position: absolute;
		right: 0;
	}
	/* main btns */
	.music-detail-controls-main{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
</style>
