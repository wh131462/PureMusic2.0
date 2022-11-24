<template>
	<view>
		<view class="search" v-if="!isFinished">
			<uni-icons class="search-icon" type="icon-harddisk" customPrefix="iconfont" size="128" color="rgb(38,193,248)"></uni-icons>
			<text class="search-text">{{isSearching?'正在扫描':'未进行扫描'}}<text v-show="isSearching" class="loading"></text></text>
			<button type="default" plain="true" :loading="isSearching" :disabled="isSearching" @click="startSearch">开始本地扫描</button>
		</view>
		<view class="search-result" v-else>
			<uni-icons class="search-result-icon" type="icon-harddisk" customPrefix="iconfont" size="128" color="rgb(38,193,248)"></uni-icons>
			<text>扫描完成!</text>
			<text>本次扫描到本地音乐 <text style="color: #2979FF;font-size: 1.2rem;">{{searchPrograss.count}} </text>首，其中时间过短过滤掉的歌曲有  <text style="color: #ff557f;font-size: 1.2rem;">{{searchPrograss.skipCount}}</text> 首，本地歌曲新增<text style="color: #ff5500;font-size: 1.2rem;">{{searchPrograss.count - searchPrograss.startCount -searchPrograss.skipCount}}</text> 首。</text>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapGetters,
		mapMutations,
		mapActions
	} from 'vuex'

	export default {
		name: "localsearch",
		data() {
			return {
				noClick:true,
				isSearching: false,
				isFinished:false,
				searchContent:"",//搜索内容中
				searchInterval:{}//定时器
			};
		},
		computed: {
			...mapState("Music", {
				all: state => state.all,
				searchPrograss: state => state.searchPrograss,
				searchTarget:state=>state.searchTarget
			}),
			...mapGetters("Music", ['allMusicCount']),
		},
		watch:{
			
		},
		methods: {
			...mapActions("Music", ['getAll','getAllCovers']),
			...mapMutations("Music",['updateSearchPrograss']),
			startSearch() {
				this.isSearching = true;
				setTimeout(()=>{
					this.getAll()
					.then(()=>{
						console.log("完成扫描")
						this.isSearching=false;
						this.isFinished=true;
						//清除定时器
						clearInterval(this.searchInterval);
					}).catch(()=>{
						console.log("完成扫描")
						this.isSearching=false;
						this.isFinished=true;
						
					});
				},500);
				console.log("我执行！")
			},
		},
		beforeUnmount() {
			console.log("开始重置！")
			//卸载前重置状态
			this.updateSearchPrograss({key:"isFinish",val:false});
			this.updateSearchPrograss({key:"now",val:""});
			this.updateSearchPrograss({key:"startCount",val:0});
			this.updateSearchPrograss({key:"count",val:0});
			this.updateSearchPrograss({key:"skipCount",val:0});
		}
	}
</script>

<style>
	.loading::after{
		content: "";
		animation:loading 3s infinite linear;
	}
	@keyframes loading{
		0%{content: ".";}
		25%{content: "..";}
		75%{content: "...";}
		100%{content: "";}
	}
	/* 扫描中样式 */
.search,.search-result{
	width:100vw;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
}
.search-icon{
	margin: 60rpx auto;
}
/* 搜索中样式 */
.search-text{
	display: block;
	width: 80%;
	margin: 0 auto;
	color: #FFF;
	height: 200rpx;
	text-align: center;
}
.search button{
	outline: none;
	background-color: rgba(255,255,255,0.4);
	border-radius: 30rpx;
	/* position: absolute;
	top: 676rpx; */
}

/* 扫描结果 */
.search-result-icon{
	margin: 60rpx auto !important;
}
.search-result text{
	width: 80%;
	text-align: center;
	margin: 0 auto;
}
</style>