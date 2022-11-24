import {
	createStore
} from 'vuex'
import User from '@/store/modules/user'
import Setting from '@/store/modules/setting'
import Music from '@/store/modules/music'
//全局store 
const store = createStore({
	//全局store
	state: { //存放状态
		//页面枚举
		pages: {
			'music': 0,//音乐主界面
			'my': 1,//我的
			'login': 2,//登录
			'register': 3,//注册
			'search': 4,//搜索
			'localsearch': 5,//本地扫描
			'detail': 6,//个人详情
			'musicdetail': 7,//音乐详情
			'musiclist':8//音乐列表
		},
		/*page 规范：
		* {
				PID: number,
				title: string,
				icon: string|undefined,//url
				pageName:string,//用于切换页面 page名对应component名
				navLeft: {
					//更新换代 使用 uni-icon 
					icon: string|undefined,//icon
					text:string|undefined,
					width:string|number|undefined,//宽度 一般不需要
					event:string,//function name
					parms:Array|undefined //parms
				},
				navRight: {
					icon: string|undefined,//icon
					text:string|undefined,
					width:string|number|undefined,//宽度 一般不需要
					event:string,//function name
					parms:Array|undefined //parms
				},
				isTabbar:boolean,//if it is tabbar
				hasTabbar:boolean//if it has tabbar
			}
		*/
		Pages: [{
				PID: 0,
				title: "音乐",
				icon: "icon-music", //更新换代 使用 uni-icon 
				pageName: "music",
				navLeft: {
					//更新换代 使用 uni-icon 
					icon: "icon-list",
					text: "设置",
					width: undefined,
					event: "toggleSetting",
					parms: undefined
				},
				navRight: {
					icon: "icon-search",
					text: "搜索",
					width: undefined,
					event: "ToPage",
					parms: 'search'
				},
				isTabbar: true,
				hasTabbar: true
			},
			{
				PID: 1,
				title: "我的",
				icon: "icon-my",
				pageName: "my",
				navLeft: undefined,
				navRight: undefined,
				isTabbar: true,
				hasTabbar: true
			},
			{
				PID: 2,
				title: "登录",
				icon: undefined,
				pageName: "login",
				navLeft: {
					icon: 'icon-back',
					text: "返回",
					width: undefined,
					event: "Back",
					parms: undefined
				},
				navRight: undefined,
				isTabbar: false,
				hasTabbar: false
			},
			{
				PID: 3,
				title: "注册",
				icon: undefined,
				pageName: "register",
				navLeft: {
					icon: 'icon-back',
					text: "返回",
					width: undefined,
					event: "Back",
					parms: undefined
				},
				navRight: undefined,
				isTabbar: false,
				hasTabbar: false
			},
			{
				PID: 4,
				title: null,
				icon: undefined,
				pageName: "search",
				navLeft: {
					icon: 'icon-back',
					text: "返回",
					width: "50rpx",
					event: "Back",
					parms: undefined
				},
				navRight: {
					icon: 'icon-search',
					text: "搜索",
					width: "50rpx",
					event: "Search",
					parms: undefined
				},
				isTabbar: false,
				hasTabbar: false
			},
			{
				PID: 5,
				title: "扫描本地音乐",
				icon: undefined,
				pageName: "localsearch",
				navLeft: {
					icon: 'icon-back',
					text: "返回",
					width: undefined,
					event: "Back",
					parms: undefined
				},
				navRight: undefined,
				isTabbar: false,
				hasTabbar: false
			},
			{
				PID: 6,
				title: undefined, //如果是搜索框 才能用null
				icon: undefined,
				pageName: "detail",
				navLeft: {
					icon: 'icon-back',
					text: "返回",
					width: undefined,
					event: "Back",
					parms: undefined
				},
				navRight: {
					icon: undefined,
					text: "编辑",
					width: undefined,
					event: "Edit",
					parms: undefined
				},
				isTabbar: false,
				hasTabbar: false
			},
			{
				PID: 7,
				title: "音乐详情",
				icon: undefined,
				pageName: "musicdetail",
				navLeft: {
					icon: 'icon-back',
					text: "返回",
					width: undefined,
					event: "Back",
					parms: undefined
				},
				navRight: undefined,
				isTabbar: false,
				hasTabbar: false
			},
			{
				PID: 8,
				title:undefined,
				icon: undefined,
				pageName: "musiclist",
				navLeft: {
					icon: 'icon-back',
					text: "返回",
					width: undefined,
					event: "Back",
					parms: undefined
				},
				navRight:{
					icon: 'icon-edit',
					text: "编辑",
					width: undefined,
					event: "Edit",
					parms: undefined
				},
				isTabbar: false,
				hasTabbar: false
			}
		],
		//Player
		playModes: ['listloop', 'random', 'singleloop', 'order'],
		Player: {},
		isPlaying: false,
		isEnd:false,//到达结束
		playMode: 'listloop',
		defaultMusic: {
			mid: -1,
			title: "君に最後の口づけを",
			author: "majiko",
			albums: "未知",
			duration: "",
			src: "http://131462.wang/music/majiko - 君に最後の口づけを.mp3",
			cover: "../../static/Image/cover.png",
			lrc: "https://131462.wang/lrc/%E5%90%9B%E3%81%AB%E6%9C%80%E5%BE%8C%E3%81%AE%E5%8F%A3%E3%81%A5%E3%81%91%E3%82%92.lrc" //歌词
		}, //默认播放音乐
	},
	getters: {

	},
	mutations: {
		//初始化播放器
		InitPlayer(state) {
			//初始化播放器
			//#ifdef APP-PLUS
			state.Player = uni.getBackgroundAudioManager();
			//#endif
			//#ifndef APP-PLUS
			state.Player = uni.createInnerAudioContext();
			//#endif
			if (state.Music.lastMusic.src != undefined) {
				state.Music.playNow = state.Music.lastMusic;
				state.Player.src = state.Music.lastMusic.src;
			} else {
				state.Music.playNow = state.defaultMusic;
				state.Player.src = state.defaultMusic.src;
			}
			//添加进历史歌单 先进行判断
			let mindex=state.Music.historyList.list.indexOf(state.Music.playNow);
			if(mindex!=-1){
				//删除元素
				state.Music.historyList.list.splice(mindex, 1);
			}
			state.Music.historyList.list.unshift(state.Music.playNow);
			state.Player.autoplay = false;
			//必须让他播放一段时间 才会有缓冲 出现duration
			state.Player.volume = 0;
			setTimeout(() => {
				state.Player.volume = 1;
				state.Player.pause();
				state.Player.seek(0);
			}, 1000);

			//原生函数自定义
			state.Player.onPlay(() => {
				state.isPlaying = true;
				//能播放就不是结束
				state.isEnd = false;
				console.log('Player playing...');
			});
			state.Player.onPause(function() {
				state.isPlaying = false;
				console.log("Player paused...");
			});

			state.Player.onStop(function() {
				state.isPlaying = false;
				console.log("Player stop.");
			});
			state.Player.onEnded(function() {
				//通知主页面下一首
				state.isEnd = true;
				console.log("Player end.");
			});
			state.Player.onError((res) => {
				uni.showToast({
					icon: "none",
					duration: 750,
					position: "bottom",
					title:res.errCode+" 由于"+res.errMsg+"无法播放此歌曲，请播放其他歌曲。"
				})
				if(res.errCode=-99){
					
				}
				console.log("Player Err:" + res.errMsg + " ErrCode:" + res.errCode);
			});
			console.log("Player initialized.");
		},
		//播放
		Play(state) {
			state.Player.play();
		},
		//暂停
		Pause(state) {
			state.Player.pause();
		},
		//seek
		Seek(state, newtime) {
			state.Player.seek(newtime);
		},
		//切换模式
		changeMode(state) {
			state.playMode = state.playModes[(state.playModes.indexOf(state.playMode) + 1) % state.playModes
				.length];
		},
		//上一首
		PreSong(state) {
			if(state.Music.musicList.length<=0){
				return;
			}
			let len = state.Music.musicList.length,
				mid = state.Music.playNow.mid,
				index = state.Music.musicList.findIndex((music) => {
					return music.mid == mid
				});
			switch (state.playMode) {
				case "order":
					state.Player.loop = false;
					if (index == 0) {
						state.Player.pause();
						state.isPlaying = false;
					} else {
						state.Music.playNow = state.Music.musicList[index - 1 < 0 ? 0 : (index - 1)];
						state.isPlaying = false;
						state.Player.src = state.Music.playNow.src;
						state.Player.play();
						state.isPlaying = true;
					}
					break;
				case "listloop":
					state.Player.loop = false;
					state.Music.playNow = state.Music.musicList[index - 1 < 0 ? 0 : (index - 1)];
					state.isPlaying = false;
					state.Player.src = state.Music.playNow.src;
					state.Player.play();
					state.isPlaying = true;
					break;
				case "random":
					state.Player.loop = false;
					let ran = Math.floor(Math.random() * len);
					state.Music.playNow = state.Music.musicList[ran];
					state.isPlaying = false;
					state.Player.src = state.Music.playNow.src;
					state.Player.play();
					state.isPlaying = true;
					break;
				case "singleloop":
					state.Player.loop = true;
					state.Player.src=state.Music.playNow.src;
					state.Player.play();
					state.isPlaying = true;
					break;
			}
			//添加进历史歌单 先进行判断
			let mindex=state.Music.historyList.list.indexOf(state.Music.playNow);
			if(mindex!=-1){
				//删除元素
				state.Music.historyList.list.splice(mindex, 1);
			}
			state.Music.historyList.list.unshift(state.Music.playNow);
		},
		//下一首
		NextSong(state) {
			if(state.Music.musicList.length<=0){
				return;
			}
			let len = state.Music.musicList.length,
				mid = state.Music.playNow.mid,
				index = state.Music.musicList.findIndex((music) => {
					return music.mid == mid
				});
			console.log(state.playMode,index);
			switch (state.playMode) {
				case "order":
					state.Player.loop = false;
					if (index == len - 1) {
						state.Player.pause();
						state.isPlaying = false;
					} else {
						state.Music.playNow = state.Music.musicList[(index + 1) % len];
						state.isPlaying = false;
						state.Player.src = state.Music.playNow.src;
						state.Player.play();
						state.isPlaying = true;
					}
					break;
				case "listloop":
					state.Player.loop = false;
					state.Music.playNow = state.Music.musicList[(index + 1) % len];
					state.isPlaying = false;
					state.Player.src = state.Music.playNow.src;
					state.Player.play();
					state.isPlaying = true;
					break;
				case "random":
					state.Player.loop = false;
					let ran = Math.floor(Math.random() * len);
					state.Music.playNow = state.Music.musicList[ran];
					state.isPlaying = false;
					state.Player.src = state.Music.playNow.src;
					state.Player.play();
					state.isPlaying = true;
					break;
				case "singleloop":
					state.Player.loop = true;
					state.Player.src=state.Music.playNow.src;
					state.Player.play();
					state.isPlaying = true;
					break;
			}
			//添加进历史歌单 先进行判断
			let mindex=state.Music.historyList.list.indexOf(state.Music.playNow);
			if(mindex!=-1){
				//删除元素
				state.Music.historyList.list.splice(mindex, 1);
			}
			state.Music.historyList.list.unshift(state.Music.playNow);
		}
	},
	modules: {
		User,
		Setting,
		Music
	}
})

export default store
