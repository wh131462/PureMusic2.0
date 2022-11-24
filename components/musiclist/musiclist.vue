<template>
	<view>
		<!-- 歌单信息 -->
		<view class="musicListInfo">
			<view class="musicListInfo-left">
				<image class="musicListInfo-cover" :src="musicList.listcover" mode="aspectFill"></image>
			</view>
			<view class="musicListInfo-right">
				<text class="musicListInfo-title">{{musicList.listname}}</text>
			<text class="musicListInfo-descript">{{musicList.listinfo}}</text>
			</view>
		</view>
		<view class="musicListControls">
			一些操作按钮
		</view>
		<!-- 歌单内容 -->
		<scroll-view v-if="list[0]" :class="[{'musicList-night':isNight},'musicList']" scroll-y="true" :style="'height:calc(100% - 100rpx)'">
			<view :class="[isPlaying&&item.mid==playNow.mid?'music-item music-item-play':'music-item']"
				v-for="(item,index) in list" :key="index">
				<view class="music-item-info" @click="playMusic(item.mid)">
					<text class="info-title">{{item.title}}</text>
					<text class="info-author">{{item.author}}-{{item.albums}}</text>
				</view>
				<view class="music-item-control">
					<uni-icons class="music-item-control-icon" :color="themeColor" type="icon-more" customPrefix="iconfont" size="24"
						@click="More(item.mid)"></uni-icons>
				</view>
			</view>
			<text v-show="list.length>=10" id="musicListButtom">已经到底了~</text>
		</scroll-view>
		<text v-else style="display:block;width: 100%;height: 50px;line-height: 50px;text-align: center;color: #FFFFFF;">暂无歌曲</text>
		<!-- 详细操作列表 -->
		<view v-if="isMore" class="more" :class="isNight?'more-night':'more'">
			<view class="more-info">
				<image :src="musicInfo(moreId).cover" mode="aspectFill"></image>
				<text>{{musicInfo(moreId).title}}</text>
			</view>
			<view class="more-btn">
				<uni-icons class="more-btn-icon" type="icon-add" customPrefix="iconfont" size="28" color="#000"></uni-icons><text>下一首播放</text>
			</view>
			<view class="more-btn">
				<uni-icons class="more-btn-icon" type="icon-add" customPrefix="iconfont" size="28" color="#000"></uni-icons><text>加入播放列表</text>
			</view>
			<view class="more-btn">
				<uni-icons class="more-btn-icon" type="icon-add" customPrefix="iconfont" size="28" color="#000"></uni-icons><text>加入歌单</text>
			</view>
			<view class="more-btn"
				@click="ShowDialog('提示','是否要将此歌曲从列表中删除?此操作不会删除本地文件。','确定','取消',deleteMusicItem,null,moreIndex,null)">
				<uni-icons  class="more-btn-icon" type="icon-add" customPrefix="iconfont" size="28" color="#000"></uni-icons><text>删除此歌曲</text>
			</view>
			<view class="more-btn">
				<uni-icons class="more-btn-icon" type="icon-add" customPrefix="iconfont" size="28" color="#000"></uni-icons><text>查看详情</text>
			</view>
		</view>
		<view v-if="isMore" class="more-other" @click="isMore=!isMore">
			&nbsp;
		</view>
		<!-- 模态框 -->
		<view v-if="isDialog" class="dialog">
			<view class="dialog-title">
				<text>{{dialog.title}}</text>
			</view>
			<view class="dialog-content">
				<text>{{dialog.content}}</text>
			</view>
			<view class="dialog-btns">
				<view class="dialog-btn" @click="doSureCallback()">
					<text>{{dialog.btnSure}}</text>
				</view>
				<view class="dialog-btn" @click="doCancelCallback()">
					<text>{{dialog.btnCancel}}</text>
				</view>
			</view>
		</view>
		<view v-if="isDialog" class="dialog-other">&nbsp;</view>
		<!-- 音乐播放器 -->
		<view class="player" :class="[isNight?'player-night':'player']">
			<!-- 封面 -->
			<view class="player-cover">
				<image @click="$emit('to-page','musicdetail')" :src="playNow.cover" mode="aspectFit"></image>
			</view>
			<!-- 音乐信息 -->
			<view class="player-info">
				<view class="player-info-top">
					<view class="player-info-text">
						<text>{{playNow.title+"-"+playNow.author}}</text>
					</view>
					<view class="player-info-time">
						<text>{{time}}</text>
					</view>
				</view>
				<view class="player-info-bottom">
					<view class="player-info-prograss">
						<slider :value="nowVal" min="0" max="100" block-size="8" block-color="#FFFFFF"
							backgroundColor="#d2d3d3" activeColor="#9ae7e7" @changing="prograssChanging()"
							@change="prograssChanged" />
					</view>
				</view>
			</view>
			<!-- 音乐按钮 -->
			<view class="player-controls">
				<uni-icons v-if="!isPlaying" :color="themeColor" type="icon-Play" customPrefix="iconfont" size="28"
					@click="Play()"></uni-icons>
				<uni-icons v-else :color="themeColor" type="icon-Pause" customPrefix="iconfont" size="28"
					@click="Pause()"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapGetters,
		mapActions,
		mapMutations
	} from 'vuex'
	export default {
		name:"musiclist",
		data() {
			return {
				isChanging: false, //是否正在改变
				nowVal: 0, //进度条当前值
				time: "0:00/0:00", //当前显示时间
				//interval
				interval: {},
				isMore:false,//more
				moreId:0,
				isDialog:false,//模态框
				dialog:{title:"提示",content:"内容"},
				dialogSureCallback: {},
				dialogCancelCallback: {},
			};
		},
		computed:{
			...mapState('Music', {
				myFavorList:state=>state.myFavorList,
				myMusicLists: state => state.myMusicLists,
				historyList:state=>state.historyList,
				nowList:state=>state.nowList,
				playNow: state => state.playNow,
				musicListFromX: state => state.musicList,
			}),
			...mapGetters('Music',['musicInfo']),
			...mapState('Setting', {
				setting: state => state.setting
			}),
			...mapGetters('Setting', ['isNight']),
			...mapState({
				Player: state => state.Player,
				isPlaying: state => state.isPlaying,
				isEnd:state=>state.isEnd
			}),
			//主题色
			themeColor() {
				if (this.isNight) {
					return "#FFF";
				} else {
					return "#FFF";
				}
			},
			//计算获取当前歌单对象
			musicList(){
				//如果当前是自定义歌单
				if(typeof this.nowList == "number"){
					return this.myMusicLists[this.nowList];
				}else{
					if(this.nowList=="myFavor"){
						return this.myFavorList;
					}else if(this.nowList=="history"){
						return this.historyList;
					}
				}
			},
			list(){
				//如果当前是自定义歌单
				if(typeof this.nowList == "number"){
					return this.myMusicLists[this.nowList].list;
				}else{
					if(this.nowList=="myFavor"){
						return this.myFavorList.list;
					}else if(this.nowList=="history"){
						return this.historyList.list;
					}
				}
			}
		},
		watch:{
			//监视播放状态变化
			isPlaying: {
				handler(n, o) {
					if (n) {
						//定时器 更新进度条
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
					//此时需要进行下一首
					console.log("isEnd",n)
					if(n){
						this.NextSong()
					}
				}
			}
		},
		methods:{
			...mapMutations([
				'Play',
				'Pause',
				'Seek',
				'NextSong',
				'PreSong'
			]),
			...mapActions("Music",[
				'playMusic'
			]),
			//转化时间
			convertTime(duration) {
				//如果是字符串 转化成秒数
				if (typeof duration === "string") {
					let arr = duration.split(":"),
						dur = 0;
					for (let i = arr.length - 1; i >= 0; i--) {
						dur += arr[i] * Math.pow(60, i);
					}
					return dur;
				} else {
					//如果是秒数 转化成字符串
					let seconds = parseInt(duration % 60),
						minutes = parseInt(duration % (60 * 60) / 60),
						hours = parseInt(duration / (60 * 60));
					return hours == 0 ? minutes + ":" + (seconds < 10 ? "0" + seconds : seconds) : (minutes < 10 ? "0" +
						minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
				}
			},
			//改变时间
			changeTime() {
				var _this = this;
				let cur = _this.Player.currentTime,
					dur = _this.Player.duration;
				_this.time = _this.convertTime(cur) + "/" + _this.convertTime(dur);
			},
			//进度条改变中
			prograssChanging() {
				this.isChanging = true;
			},
			//进度条被改变了
			prograssChanged(e) {
				this.isChanging = false;
				console.log(e.detail.value)
				let nowVal = e.detail.value;
				let newTime = (nowVal / 100) * this.Player.duration;
				console.log(newTime);
				this.Seek(newTime);
			},
			//改变进度显示 定时器
			changePrograss() {
				if (this.isChanging) {
					return;
				}
				let newVal = (this.Player.currentTime / this.Player.duration) * 100;
				this.nowVal = newVal;
				//console.log(this.nowVal);
			},
			// More操作
			More(mid) {
				this.isMore = !this.isMore;
				this.moreId=mid;
			},
			//dialog操作
			ShowDialog(title, content, sure, cancel, sureCallback, cancelCallback, sureparam, cancelparam) {
				this.isDialog = true;
				this.dialog.title = title;
				this.dialog.content = content;
				this.dialog.btnSure = sure;
				this.dialog.btnCancel = cancel;
				//回调函数调用
				this.dialogSureCallback = sureCallback;
				this.dialogCancelCallback = cancelCallback;
				this.dialogSureParam = sureparam;
				this.dialogCancelParam = cancelparam;
			},
			doSureCallback() {
				if (this.dialogSureCallback != null) {
					//执行然后清空
					this.dialogSureCallback(this.dialogSureParam);
					this.dialogSureCallback = null;
				}
				this.isDialog = false;
			},
			doCancelCallback() {
				if (this.dialogCancelCallback != null) {
					this.dialogCancelCallback(this.dialogCancelParam);
					this.dialogCancelCallback = null;
				}
				this.isDialog = false;
			},
		},
		beforeMount() {
			console.log("挂载前");
			//还在播放
			if (this.Player.src) {
				let _this = this;
				if (this.isPlaying) {
					this.interval = setInterval(() => {
						_this.changePrograss();
						_this.changeTime()
					}, 100);
				}
			}
		},
		mounted() {
			this.isShowList=true;
			//加载后需要等待缓冲 来获取duration
			setTimeout(()=>{this.changeTime();},1000)
		},
		beforeUnmount() {
			//卸载前清除内容
			clearInterval(this.interval);
		},
	}
</script>

<style scoped>
	/* 音乐列表信息 */
	.musicListInfo{
		width: 100vw;
		height: 300rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
	.musicListInfo-left{
		width: 30%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items:center;
		position: relative;
	}
	.musicListInfo-right{
		width: 70%;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: baseline;
	}
	.musicListInfo-cover{
		border-radius: 20rpx;
		width: 200rpx;
		height: 200rpx;
		
	}
	
	.musicListInfo-title{
		margin: 50rpx 0 0 0;
		height: 100rpx;
		font-size: 1.3rem;
		overflow:hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	
	.musicListInfo-descript{
		color: rgba(255,255,255,0.7);
		height: 100rpx;
		font-size: 0.8rem;
		line-height: 34rpx;
		margin: 0 0 50rpx 0;
		overflow:hidden;
		text-indent: 2em;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
	}
	
	.musicListControls{
		
	}
	
	
	/* 播放器样式 */
	.player {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
		width: 100vw;
		height: 100rpx;
		background-color: rgba(255, 255, 255, 0.2);
		position: fixed;
		bottom: 0;
		z-index: 999;
	}

	/* player cover */
	.player-cover {
		width: 100rpx;
		height: 100rpx;
		overflow: hidden;
		background-color: #FFF;
		position: relative;
	}

	.player-cover image {
		display: block;
		position: absolute;
		transform: translate(-50%, -50%);
		top: 50%;
		left: 50%;
		width: 100rpx;
		height: 100rpx;
	}

	/* player info */
	.player-info {
		width: calc(100vw - 200rpx);
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	/* info 上部 */
	.player-info-top {
		width: 100%;
		height: 70rpx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		position: relative;
	}

	.player-info-text {
		width: 100%;
		display: block;
		margin: 0 10rpx 0;
		padding: 0;
		overflow: hidden;
		text-overflow: clip;
	}

	.player-info-text text {
		white-space: nowrap;
		animation: roll 5s 1s linear;
	}

	@keyframes roll {
		0% {
			margin-left: 0;
		}

		49% {
			margin-left: -100vw;
			opacity: 1;
		}

		50% {
			margin-left: -100vw;
			opacity: 0;
		}

		51% {
			margin-left: 80vw;
			opacity: 0;
		}

		52% {
			margin-left: 80vw;
			opacity: 1;
		}

		100% {
			margin-left: 0;
		}
	}

	.player-info-time {
		display: block;
		margin: 0;
		padding: 0;
		text-align: right;
	}

	/* info下部 */
	.player-info-bottom {
		width: 100%;
		height: 30rpx;
		padding-left: 10rpx;
	}

	.player-info-prograss {}

	.player-info-prograss slider {
		margin: 0;
		padding: 0 0 0 10rpx;
	}

	/* player 播放按钮 */
	.player-controls {
		width: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	/* 音乐列表 */
	.musicList {
		width: 100vw;
		background-color: rgba(0, 0, 0, 0);
		display: flex;
		flex-direction: column;
		align-items: center;
		z-index: 1;
	}
	/* 音乐列表 夜间 */
	.musicList-night{
		
	}
	.musicList-night .music-item{
		background-color: rgba(255, 255, 255, 0);
		border-bottom: rgba(255,255,255,0.5) solid 1rpx;
		box-shadow: rgba(255, 255, 255, 0.3) 0px 0px 2rpx;
	}
	#musicListButtom {
		display: block;
		width: 100%;
		height: 30rpx;
		margin-top: 20rpx;
		margin-bottom: 100rpx;
		text-align: center;
		color: #FFF;
		font-size: 0.8rem;
	}
	
	.music-item {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 110rpx;
		padding: 5rpx 0;
		background-color: rgba(0, 0, 0, 0);
		border-bottom: rgba(0,0,0,0.3) solid 1rpx;
		box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 2rpx;
	}
	
	.music-item-play {
		background-color: rgba(255, 255, 255, 0.2) !important;
		box-shadow: rgba(0, 0, 255, 0.3) 0px 0px 3rpx !important;
	}
	
	.music-item-play .info-title,
	.music-item-play .info-author {
		color: #FFF;
		text-shadow: #137dff 0px 2rpx 2rpx;
	}
	
	.music-item-info {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: calc(100% - 100rpx);
		height: 100%;
	}
	
	/* 歌曲信息 名字 */
	.info-title {
		display: inline-block;
		width: 100%;
		height: 60rpx;
		line-height: 60rpx;
		text-indent: 1em;
		font-size: 1.1rem;
		color: rgba(255, 255, 255, 0.8);
		/* 溢出省略 */
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	/* 作者 */
	.info-author {
		display: inline-block;
		width: 100%;
		height: 20px;
		line-height: 20px;
		text-indent: 1.5em;
		font-size: 0.7rem;
		color: rgba(255, 255, 255, 0.6);
		/* 溢出省略 */
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	/* 音乐项目列表 */
	.music-item-control{
		height: 100%;
		width: 100rpx;
		position: relative;
	}
	.music-item-control-icon{
		display: block;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateY(-50%) translateX(-50%);
	}
	
	/* 更多操作 */
	.more-other {
		width: 100vw;
		height: 100vh;
		position: fixed;
		bottom: 0px;
		z-index:10000;
		background-color: rgba(0, 0, 0, 0.3);
		/* 动画 */
		animation: intoMoreOther 0.2s linear;
	}
	
	.more {
		/* 基本属性 */
		width: 100%;
		/* 按钮45*n + 信息50*1 */
		height: 600rpx;
		position: fixed;
		bottom: 0px;
		z-index:10001;
		/* 样式 */
		background-color: #FFF;
		color: #111;
		border-radius:20rpx;
		overflow: hidden;
		/* 动画 */
		animation: intoMore 0.2s linear;
		/* 布局 */
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}
	/* 夜间模式 */
	.more-night {
		/* 基本属性 */
		width: 100%;
		/* 按钮45*n + 信息50*1 */
		height: 600rpx;
		position: fixed;
		bottom: 0px;
		z-index: 10000;
		/* 样式 */
		color: #ebebeb;
		background-color: #111111;
		border-radius: 20rpx;
		overflow: hidden;
		/* 动画 */
		animation: intoMore 0.2s linear;
		/* 布局 */
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}
	.more-info {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		display: flex;
		flex-direction: row;
		justify-content: left;
	}
	/* more info */
	.more-info image {
		display: inline-block;
		width: 80rpx;
		height: 80rpx;
		margin:10rpx;
		border-radius: 20rpx;
	}
	
	.more-info text {
		width: calc(100% - 100px);
		display: inline-block;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	/* 更多 按钮 */
	.more-btn {
		display: block;
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		border-top: rgba(0,0,0,0.1) solid 2rpx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		position: relative;
	}
	/* 激活状态 */
	.more-btn:active {
		background-color: rgba(0, 0, 0, 0.1);
	}
	/* 更多 小图标 */
	.more-btn-icon{
		position: absolute;
		right: 20rpx;
		top: 50%;
		transform: translateY(-50%);
	}
	
	.more-btn text {
		padding-left: 20rpx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	@keyframes intoMore {
		from {
			height: 0px;
		}
	
		to {
			height: 270px;
		}
	}
	
	@keyframes intoMoreOther {
		from {
			opacity: 0;
		}
	
		to {
			opacity: 1;
		}
	}
	
	/* dialog 模态框*/
	.dialog {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		position: fixed;
		/* 比设置层级高 */
		z-index: 10002;
		width: 80%;
		height: 250px;
		top: 50%;
		left: 50%;
		margin-top: -125px;
		margin-left: -40%;
		background-color: #FFFFFF;
		border-radius: 20px;
		overflow: hidden;
	}
	
	.dialog-other{
		width:100vw;
		height: 100vh;
		position: fixed;
		bottom: 0;
		left: 0;
		/* 比设置层级高 比dialog低 */
		z-index: 10001;
		background-color: rgba(0, 0, 0, 0.1);
	}
	
	.dialog-title {
		width: 100%;
		height: 30px;
		margin: 15px auto;
		line-height: 30px;
		text-align: center;
		font-size: 1.5rem;
		color: #000000;
	}
	
	.dialog-content {
		width: calc(100% - 40px);
		height: 180px;
		margin: 0 auto;
		padding: 5px 20px;
		text-align: left;
		text-indent: 2em;
		font-size: 1.2rem;
		color: #0088D6;
	}
	
	.dialog-content text {
		width: 100%;
		height: 100%;
	}
	
	.dialog-btns {
		width: 100%;
		height: 45px;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	
	}
	
	.dialog-btn {
		width: 100%;
		line-height: 40px;
		text-align: center;
		color: #007AFF;
		background-color: #ffffff;
		border: rgba(0, 0, 0, 0.1) solid .1px;
	}
	
	.dialog-btn:active {
		background-color: rgba(0, 0, 0, 0.1);
	}
</style>
