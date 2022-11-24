<template>
	<view class="content">
		<!-- 导航栏 -->
		<uni-nav-bar backgroundColor="rgba(255,255,255,0)" fixed="true" shadow="false" statusBar="true" border="false"
			:title="nowPage.title" :leftIcon="nowPage.navLeft!=undefined?nowPage.navLeft.icon:undefined"
			:rightIcon="nowPage.navRight!=undefined?nowPage.navRight.icon:undefined"
			@clickLeft="nowPage.navLeft?handleFunc(nowPage.navLeft.event,nowPage.navLeft.parms):''"
			@clickRight="nowPage.navRight?handleFunc(nowPage.navRight.event,nowPage.navRight.parms):''"
			:leftWidth="nowPage.navLeft!=undefined?nowPage.navLeft.width:undefined"
			:rightWidth="nowPage.navRight!=undefined?nowPage.navRight.width:undefined" :dark="isNight">
			<!-- 这里只能用v-if 不然无法正常显示标题  并且只能自定义style -->
			<view
				style="display: flex;flex-direction: row;justify-content: center;align-items: center;width: 100%;height:100%;"
				v-if="nowPage.title===null">
				<input type="text"
					style="display:block;margin: 0; padding: 1rpx 1em 1rpx 0;background-color: rgba(255,255,255,0.3);color:#EEE;width: 100%;height:calc(100% - 30rpx);border-radius:30rpx;text-indent:1em;"
					v-model="searchContent" placeholder="按关键词搜索歌曲" placeholder-style="color:rgba(255,255,255,0.5)" />
			</view>
		</uni-nav-bar>
		<view :class="[isNight?'nav-padding-night':'nav-padding']" :style="navPaddingHeight">
			<image :src="setting.backgroundSrc" :style="setting.backgroundStyle" mode="aspectFill"></image>
		</view>
		<view :class="[isNight?'Background-night':'Background']">
			<image :src="setting.backgroundSrc" :style="setting.backgroundStyle" mode="aspectFill"></image>
		</view>
		<!-- 主显示界面 -->
		<view :class="[isNight?'main-night':'main']"
			:style="nowPage.PID==0?musicHeight:nowPage.hasTabbar?mainHeight:'height:calc(100vh - '+(44 +statusBarHeight)+'px)'">
			<!-- #ifdef H5 -->
			<uni-transition ref="ani" :styles="{'opacity':'1'}" :show="isToPage" @change="ani">
				<!-- H5 支持keep-alive组件 -->
				<keep-alive>
					<component :is="nowPage.pageName" @to-page="ToPage" :tabHeight="tabHeight"
						:statusHeight="statusBarHeight" :ref="nowPage.pageName">
					</component>
				</keep-alive>
			</uni-transition>
			<!-- #endif -->
			<!-- #ifdef APP-PLUS -->
			<uni-transition ref="ani" :styles="{'opacity':'1'}" :show="isToPage" @change="ani">
				<component :is="nowPage.pageName" @to-page="ToPage" :tabHeight="tabHeight"
					:statusHeight="statusBarHeight" :ref="nowPage.pageName" :searchRes="searchRes">
				</component>
			</uni-transition>
			<!-- #endif -->
		</view>
		<!-- 设置面板 -->
		<uni-transition mode-class="slide-left" :show="isSetting" :class="[{'setting-night':isNight},'setting']">
			<scroll-view scroll-y="true">
				<view class="setting-user">
					<image :class="[{'setting-user-background-night':isNight,'setting-user-background':!isNight}]"
						src="../../static/Image/background1.jpg" mode="aspectFill">
					</image>
					<image class="setting-user-headpic" src="../../static/Image/background3.png" mode="aspectFill"
						@click="toDetail()"></image>
					<text class="setting-user-name">{{isLogin?user.username:'未登录'}}</text>
				</view>
				<view :class="isNight?'setting-div-night':'setting-div'">
					<view class="btn" @click="ToPage('localsearch')"><text>扫描本地音乐</text></view>
				</view>
				<view :class="isNight?'setting-div-night':'setting-div'">
					<!-- <view class="btn" @click="SortMusicList()"><text>音乐排序</text></view> -->
					<view class="btn"><text>夜间模式</text>
						<switch color="#bfbfbf" :checked="isNight" @change="SunOrNight()" />
					</view>
				</view>
				<view :class="isNight?'setting-div-night':'setting-div'">
					<!-- <view class="btn" @click="SettingMore()"><text>更多</text></view> -->
				</view>
				<view :class="isNight?'setting-div-night':'setting-div'">
					<view class="btn" @click="AppRestart()"><text>重启应用</text></view>
					<view class="btn" @click="AppQuit()"><text>退出</text></view>
				</view>
			</scroll-view>
		</uni-transition>
		<uni-transition mode-class="fade" :show="isSetting" class="setting-other" @click="toggleSetting()" />
		<!-- Tabbar -->
		<view :class="[isNight?'tab-bar-night':'tab-bar']" v-show="nowPage.hasTabbar">
			<view :class="[{'tab-item-active':item.PID==nowPage.PID},'tab-item']" v-for="item in Tabbars"
				:key="item.PID" @click="ToPage(item.PID)">
				<uni-icons :type="item.icon" customPrefix="iconfont" size="24"
					:class="[{'tab-item-icon-active':item.PID==nowPage.PID},'tab-item-icon']"></uni-icons>
				<text>{{item.title}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import music from "../../components/music/music.vue"
	import my from "../../components/my/my.vue"
	import login from "../../components/login/login.vue"
	import register from "../../components/register/register.vue"
	import localsearch from "../../components/localsearch/localsearch.vue"
	import search from "../../components/search/search.vue"
	import detail from "../../components/detail/detail.vue"
	import musicdetail from "../../components/musicdetail/musicdetail.vue"
	import musiclist from "../../components/musiclist/musiclist.vue"

	import {
		mapState,
		mapGetters,
		mapActions,
		mapMutations
	} from 'vuex'

	export default {
		components: {
			login,
			register,
			music,
			my,
			search,
			localsearch,
			detail,
			musicdetail,
			musiclist
		},
		data() {
			return {
				// 导航栏与tabbar
				nowPage: {},
				LastPid: 0, //上一个页面id
				Tabbars: [], //等待初始化
				navPaddingHeight: "", // 导航栏高度校准
				mainHeight: "", //主显示区高度校准
				isSetting: false, //设置面板开启
				searchRes: "",
				searchContent: "", //搜索框内容
				isQuit: false, //退出应用开关
				isToPage: true, //切换页面 
				tabHeight: 60, //tabHeight
				statusBarHeight: 0, //status bar height
				playerHeight: 0, //player height

			}
		},
		beforeMount() {
			//初始化当前页面
			this.nowPage = this.Pages.find(val => val.PID == 0);
			//挂载之前将tabbars挑选出来
			this.Tabbars = this.Pages.filter((val) => val.isTabbar);
			
		},
		mounted() {
			//高度校准函数
			this.autoHeight();
			//自定义动画

		},
		onLoad() {
			//初始化
			this.Init();
		},
		onReady() {
			// init 配置
			this.$refs.ani.init({
				duration: 250,
				timingFunction: 'linear',
				delay: 0,
				transformOrigin: '50% 50%'
			})
		},
		onPullDownRefresh() {
			//禁止刷新页面的PID  在page.json禁用后弃用
			// const banRefresh = [0, 1, 3];
			// if (banRefresh.indexOf(this.nowPage.PID) != -1) {
			// 	uni.stopPullDownRefresh();
			// }
			//开启刷新的代码 通过拆解可以组装开启函数 刷新主要代码
			// getCurrentPages()[getCurrentPages().length - 1].$getAppWebview().setStyle({
			// 	pullToRefresh: {
			// 		support: true
			// 	}
			// })
		},
		onBackPress(e) {
			let _this = this;
			//退出 顺序执行所以要在提示信息之前
			if (_this.isQuit) {
				this.setLocalData();
				this.saveLastMusic();
				console.log("退出");
				_this.AppQuit();
			}
			const mainId = [0, 1];
			//在 0 1 界面 也就是音乐和我的
			if (mainId.indexOf(this.nowPage.PID) != -1) {
				uni.showToast({
					icon: "none",
					duration: 1500,
					title: "再按一次退出！",
					position: "bottom",
					success() {
						_this.isQuit = true;
						setTimeout(() => {
							_this.isQuit = false;
							console.log("重置退出");
						}, 1500);
					}
				});
			} else {
				_this.Back();
			}
			//在查看设置
			if (this.isSetting) {
				this.isSetting = false;
				console.log("退出设置");
			}
			return true;
		},
		watch: {
			//监听搜索内容变化 变动自动搜索
			searchContent: {
				handler(n, o) {
					//不为空
					if (n != "") {
						this.Search();
					}
				}
			},
			playNow:{
				handler(n,o){
					//监听播放器变化 变化之后尝试获取封面
					console.log("player变化")
					if(n.src==undefined||n.mid==-1){
						return;
					}
					if(n.src!=o.src){
						let title=this.playNow.title,
							cover=this.playNow.cover,
							src=this.playNow.src,
							mid=this.playNow.mid;
						setTimeout(()=>{this.isNeedCover({"cover":cover,"title":title,"src":src,"mid":mid})
						.then(()=>{
							console.log("获取完成");
						})
						.catch(()=>{
							console.log("不需要进行转cover");
						});},1000);
						
						console.log("我执行了")
					}
				}
			}
		},
		computed: {
			...mapState({
				pages: state => state.pages,
				Pages: state => state.Pages,
				Player:state=>state.Player
			}),
			...mapGetters('Music', ['searchByName']),
			...mapState('User', {
				isLogin: state => state.isLogin,
				user: state => state.user
			}),
			...mapState('Setting', {
				setting: state => state.setting
			}),
			...mapGetters('Setting', ['isNight']),
			...mapState('Music', {
				playNow:state=>state.playNow,
				lastMusic: state => state.pages
			}),
			//音乐高度 减去播放器高度
			musicHeight() {
				return "height:calc(100vh - " + (uni.getSystemInfoSync().statusBarHeight + 44 + this.tabHeight + this
					.playerHeight) + "px)";
			}
		},
		methods: {
			//引入用户方法
			...mapActions('User', ['login', 'register']),
			...mapMutations('Setting', ['toggleNight']),
			...mapActions('Music', ['search','getCover','isNeedCover']),
			...mapMutations('Music', ['saveLastMusic', 'getLastMusic','getLocalData','setLocalData','updateMusicList']),
			...mapMutations(['InitPlayer']),
			//初始化函数  
			Init() {
				//开始加载
				uni.showLoading({
					mask:true,
					title:"初始化中..."
				});
				//先获取缓存的音乐数据
				this.getLocalData();//获取本地音乐数据
				this.updateMusicList();//更新本地音乐列表
				this.getLastMusic();//获取上次播放数据
				this.InitPlayer();//初始化播放器
				//加载完毕
				uni.hideLoading();
			},
			//根据pid跳转页面
			ToPage(p) {
				//确保关闭setting面板
				this.isSetting = false;
				let pid = p;
				if (typeof pid === "string") {
					pid = this.pages[pid];
				}
				if (pid == this.nowPage.PID) {
					return;
				}
				this.LastPid = this.nowPage.PID;
				let newPage = this.Pages.find((item) => item.PID == pid);
				this.nowPage = newPage;
				this.isToPage =false;
				setTimeout(() => {
					this.isToPage = true;
				}, 0)

				console.log("进入" + pid);
			},
			//Back 返回页面
			Back() {
				let pid = this.LastPid;
				let newPage = this.Pages.find((item) => item.PID == pid);
				this.nowPage = newPage;
				this.isToPage =false;
				setTimeout(() => {
					this.isToPage = true;
				}, 0)

				console.log("返回" + pid);
			},
			//Edit 编辑内容 在需要开启编辑模式的时候开启 
			Edit(){
				console.log("开启编辑模式")
			},
			//夜间模式
			SunOrNight() {
				//切换
				this.toggleNight();
				this.isSetting = false;
				//触发一下动画  不然就隐藏了
				this.isToPage = false;
				setTimeout(() => {
					this.isToPage = true;
				}, 25)

			},
			//退出应用
			AppQuit() {
				plus.runtime.quit();
			},
			//重启
			AppRestart() {
				plus.runtime.restart();
			},
			//执行函数
			handleFunc(m, parms) {
				const _this = this;
				let methods = this.$options.methods;
				if (parms instanceof Array) {
					//如果是数组对象 那么展开
					methods[m].bind(_this, ...parms)();
				} else {
					methods[m].bind(_this, parms)();
				}
			},
			//确保高度精准
			autoHeight() {
				let dom = uni.createSelectorQuery().select('.tab-bar');
				dom.fields({
					size: true
				}, (res) => {
					if (!res) {
						return
					}
					//navbar填充
					this.navPaddingHeight = "height:" + (uni.getSystemInfoSync().statusBarHeight + 44) + "px";
					//app plus  statusHeight + tabbar + navbar
					this.mainHeight = "height:calc(100vh - " + (uni.getSystemInfoSync().statusBarHeight + 44 + res
						.height) + "px)";
					this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
					this.tabHeight = res.height;
				}).exec();
				let p = uni.createSelectorQuery().select('.player');
				p.fields({
					size: true
				}, (res) => {
					if (!res) {
						return
					}
					this.playerHeight = res.height;
				}).exec();
			},
			//组件切换 从隐藏到显示
			ani(){
				// step 配置
				this.$refs.ani.step({
				    opacity:1
				},{
				    duration: 500,
				    timingFunction:'linear',
				    delay:0,
				    transformOrigin:'50% 50%'
				});
				this.$refs.ani.run(()=>{
					console.log("动画执行")
				})
			},
			//常驻通知栏
			notification() {
				plus.android.importClass('android.app.Notification');
			},
			//Search 搜索内容
			Search() {
				//将值传入 search来进行搜索
				this.searchRes = this.searchByName(this.searchContent);
			},
			//切换面板状态
			toggleSetting() {
				this.isSetting = !this.isSetting;
			},
			//进入详情
			toDetail() {
				//未登录 先登录
				if (!this.isLogin) {
					this.ToPage('login');
				} else {
					this.ToPage('detail')
				}

			},
		}
	}
</script>

<style scoped>
	/* main */
	.main,
	.main-night {
		/* 与底部产生距离 高度js计算 */
		overflow: scroll;
		color: #FFF;
		z-index: 1;
	}

	/* 组件过渡 */
	.component-fade-enter-active,
	.component-fade-leave-active {
		transition: opacity 0.1s linear;
	}

	.component-fade-enter-from,
	.component-fade-leave-to {
		opacity: 0;
	}

	/* setting */
	.setting {
		height: 100vh;
		width: 80vw;
		/* 样式 */
		background-color: #f4f4f4;
		/* 定位 */
		position: fixed;
		left: 0;
		top: 0;
		/* 比所有层级都高 */
		z-index: 10000;
		/* 动画 */
		/* animation: SettingMove 0.1s linear; */
	}

	.setting-night {
		/* 样式 */
		background-color: #111;
	}

	/* 个人信息 */
	.setting-user {
		width: 100%;
		height: 400rpx;
		overflow: hidden;
		position: relative;
	}

	/* 个人信息背景 */
	.setting-user-background {
		display: block;
		width: 100%;
		height: 100%;
		z-index: -1;
		position: absolute;
		top: 0;
		filter: blur(2rpx) brightness(100%);
	}

	.setting-user-background-night {
		display: none;
	}

	.setting-user-headpic {
		display: block;
		margin: 100rpx auto 10rpx;
		width: 200rpx;
		height: 200rpx;
		border-radius: 10rpx;
		z-index: 5;
	}

	.setting-user-name {
		display: block;
		width: 100%;
		position: relative;
		text-align: center;
		font-size: 1.1rem;
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

	@-ms-keyframes rainbow {
		from {
			background-position: 0 0;
		}

		to {
			background-position: 1000px 0;
		}
	}

	@-webkit-keyframes rainbow {
		from {
			background-position: 0 0;
		}

		to {
			background-position: 1000px 0;
		}
	}

	@-moz-keyframes rainbow {
		from {
			background-position: 0 0;
		}

		to {
			background-position: 1000px 0;
		}
	}

	/* 设置区块 */
	.setting-div {
		width: 95%;
		margin: 20rpx auto;
		background-color: #ffffff;
		border-radius: 20rpx;
		overflow: hidden;
	}

	.setting-div-night {
		width: 95%;
		margin: 20rpx auto;
		background-color: #222;
		color: #FFF !important;
		border-radius: 20rpx;
		overflow: hidden;
	}

	/* 区块内按钮 */
	.setting-div .btn,
	.setting-div-night .btn {
		border: solid rgba(0, 0, 0, 0.1) .1rpx;
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		background-color: rgba(255, 255, 255, 0.1);
	}

	.setting-div .btn:active,
	.setting-div-night .btn:active {
		background-color: rgba(0, 0, 0, 0.1);
	}

	.setting-div .btn text,
	.setting-div-night .btn text {
		margin-left: 20rpx;
	}

	/* 按钮内的开关 */
	.setting-div .btn switch,
	.setting-div-night .btn switch {
		position: absolute;
		right: 5px;
	}

	.setting-other {
		width: 100vw;
		height: 100vh;
		/* 样式 */
		background-color: rgba(0, 0, 0, 0.1);
		/* 定位 */
		position: fixed;
		right: 0;
		bottom: 0;
		/* 比所有层级都高 比设置低*/
		z-index: 9999;
	}
</style>
