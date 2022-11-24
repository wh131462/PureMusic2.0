<template>
	<view class="my">
		<!-- 个人信息带头像名称 -->
		<view class="User-info" @click="isLogin?$emit('to-page','detail'):$emit('to-page','login')">
			<view class="info-headpic">
				<image src="../../static/Image/background3.png" mode="aspectFill"></image>
			</view>
			<view class="info-content">
				<text class="info-username">{{isLogin?user.username:'未登录'}}</text>
				<text class="info-motto">{{isLogin?user.motto:''}}</text>
			</view>
		</view>
		<!-- 我喜欢的歌单 -->
		<view class="LoveAndRecent-title">
			<text>我喜欢的歌曲&最近播放</text>
		</view>
		<view class="LoveAndRecent">
			<view class="MyLove" @click="ToMyLove">
				<view class="MyLove-cover">
					<uni-icons class="MyLove-icon" type="icon-heart_full" customPrefix="iconfont" size="120rpx"
						color="#FF0000"></uni-icons>
					<image class="MyLove-back" :src="setting.backgroundSrc" mode="aspectFill"></image>
				</view>
				<text class="MyLove-title">我喜欢的歌曲</text>
			</view>
			<!-- 最近播放 -->
			<view class="RecentPlay">
				<view class="RecentPlay-cover" @click="ToTheRecent">
					<uni-icons class="RecentPlay-icon" type="icon-history" customPrefix="iconfont" size="120rpx"
						color="#FFFFFF"></uni-icons>
					<image class="RecentPlay-back" :src="setting.backgroundSrc" mode="aspectFill"></image>
				</view>
				<text class="RecentPlay-title">最近播放</text>
			</view>
		</view>
		<!-- 自建歌单 -->
		<view class="MyList">
			<view class="MyList-title">
				<text>我创建的歌单</text>
				<uni-icons class="MyList-title-btn" @click="startAddList" type="icon-add" customPrefix="iconfont"
					size="1.2rem" color="#FFFFFF"></uni-icons>
			</view>
			<view class="MyList-item" v-for="item,index in myMusicLists" :key="index" @click="ToMusicList(index)">
				<view class="MyList-item-cover">
					<image :src="item.listcover" mode="aspectFill"></image>
				</view>
				<view class="MyList-item-info">
					<text class="MyList-item-info-title">{{item.listname}}</text>
					<text class="MyList-item-info-describe">{{item.listinfo}}</text>
				</view>
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
		name: "my",
		emits: {
			"to-page": null
		},
		data() {
			return {

			};
		},
		computed: {
			...mapState('User', {
				user: state => state.user,
				isLogin: state => state.isLogin
			}),
			...mapState('Music', {
				myMusicLists: state => state.myMusicLists
			}),
			...mapState('Setting', {
				setting: state => state.setting
			}),
			...mapGetters('Setting', ['isNight'])
		},
		methods: {
			...mapMutations('Music',['changeList']),
			//开始增加新歌单
			startAddList() {
				console.log("Add new list")
			},
			//我喜欢的歌单
			ToMyLove(){
				//更新当前歌单
				this.changeList({list:"myFavor"});
				//进入歌单页面
				this.$emit("to-page", 'musiclist')
			},
			//我喜欢的歌单
			ToTheRecent(){
				this.changeList({list:"history"});
				this.$emit("to-page", 'musiclist')
			},
			ToMusicList(index){
				this.changeList({list:index});
				this.myMusicLists[index];
				this.$emit("to-page", 'musiclist')
			}
		}
	}
</script>

<style scoped>
	/* 用户信息 */

	.my {
		width: 100vw;
		height: auto;
		margin: 0;
		padding: 0;
	}

	.User-info {
		margin: 40rpx auto;
		height: 160rpx;
		width: 95%;
		border-radius: 20rpx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		background-color: rgba(255, 255, 255, 0.2);
	}

	.User-info:active {
		background-color: rgba(255, 255, 255, 0.1);
	}

	.info-headpic {
		width: 20%;
		text-align: center;
	}

	.info-headpic image {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
	}

	.info-content {
		width: 80%;
		text-align: left;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;

	}

	.info-username {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 1.1rem;
		text-shadow: rgba(0, 0, 0, 0.1) 0rpx 0rpx 1rpx;
		background-image: linear-gradient(75deg, #e90003, #d36200, #d2e900, #15d300, #00d3c5, #000ed3, #ff00a6);
		background-image: -webkit-linear-gradient(75deg, #e90003, #d36200, #d2e900, #15d300, #00d3c5, #000ed3, #ff00a6);
		background-image: -moz-linear-gradient(75deg, #e90003, #d36200, #d2e900, #15d300, #00d3c5, #000ed3, #ff00a6);
		background-image: -ms-linear-gradient(75deg, #e90003, #d36200, #d2e900, #15d300, #00d3c5, #000ed3, #ff00a6);
		/* 渐变背景 */
		color: transparent;
		-webkit-background-clip: text;
		animation: rainbow 8s linear infinite;
	}

	@keyframes rainbow {
		from {
			background-position: 0 0;
		}

		to {
			background-position: 1000px 0;
		}
	}

	.info-motto {
		color: rgba(255, 255, 255, 0.5);
		font-size: 0.8rem;
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	/* 我喜欢的and最近播放 */
	.LoveAndRecent {
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	.LoveAndRecent-title {
		width: calc(100% - 20rpx);
		height: 60rpx;
		padding-left: 20rpx;
	}

	.LoveAndRecent-title text {
		color: #FFF;
		font-size: 1.2rem;
		font-weight: 500;
	}

	/* 我喜欢的 */
	.MyLove {
		width: 200rpx;
		height: 260rpx;
		margin: 10rpx 20rpx;
	}

	.MyLove-cover {
		width: 200rpx;
		height: 200rpx;
		border-radius: 20rpx;
		overflow: hidden;
		position: relative;
	}

	.MyLove-icon {
		background-color: rgba(255, 255, 255, 0);
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 3;
		position: relative;
	}

	.MyLove-back {
		width: 100%;
		height: 100%;
		filter: blur(1px) brightness(70%);
		z-index: 2;
		position: absolute;
		top: 0;
	}

	.MyLove-title {
		display: inline-block;
		height: 60rpx;
		line-height: 60rpx;
		width: 100%;
		color: #FFFFFF;
		text-align: center;
	}

	/* 最近听过 */
	.RecentPlay {
		width: 200rpx;
		height: 260rpx;
		margin: 10rpx 20rpx;
	}

	.RecentPlay-cover {
		width: 200rpx;
		height: 200rpx;
		border-radius: 10px;
		overflow: hidden;
		position: relative;
	}

	.RecentPlay-icon {
		background-color: rgba(255, 255, 255, 0);
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 3;
		position: relative;
	}

	.RecentPlay-back {
		width: 100%;
		height: 100%;
		filter: blur(1px) brightness(70%);
		z-index: 2;
		position: absolute;
		top: 0;
	}

	.RecentPlay-title {
		display: inline-block;
		height: 60rpx;
		line-height: 60rpx;
		width: 100%;
		color: #FFFFFF;
		text-align: center;
	}


	/*我创建的歌单 */
	.MyList {
		width: 100%;
		height: auto;
		padding-bottom: 200rpx;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	.MyList-title {
		width: calc(100% - 20rpx);
		height: 60rpx;
		padding-left: 20rpx;
		position: relative;
	}

	.MyList-title text {
		color: #FFF;
		font-size: 1.2rem;
		font-weight: 500;
	}

	.MyList-title-btn {
		position: absolute;
		right: 20rpx;
	}

	/* 歌单子项 */
	.MyList-item {
		width: 100%;
		height: 200rpx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}

	/* 子项封面 */
	.MyList-item-cover {
		margin: 20rpx;
		width: 160rpx;
		height: 160rpx;
		border-radius: 10rpx;
		overflow: hidden;
	}

	.MyList-item-cover image {
		width: 100%;
		height: 100%;
	}

	/* 子项信息 */
	.MyList-item-info {
		width: calc(100% - 200rpx);
		margin: 20rpx 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		position: relative;
	}

	.MyList-item-info-title {
		display: block;
		height: 60rpx;
		width: 100%;
		color: #FFF;
		font-size: 1.1rem;

	}

	.MyList-item-info-describe {
		/* 多行文本省略 */
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		height: 100rpx;
		line-height: 50rpx;
		width: 95%;
		color: #DDD;
		font-size: 0.9rem;
	}
</style>
