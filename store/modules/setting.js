// setting 信息 

// initial state
const state = () => ({
	setting: {
		isNight: false,
		backgroundSrc: '../../static/Image/background3.png',
		backgroundStyle: ""
	},
})

// getters
const getters = {
	isNight(state){
		return state.isNight;
	}
}

// actions
const actions = {
	
}

// mutations
const mutations = {
	//夜间模式切换
	toggleNight(state){
		state.isNight=!state.isNight;
		console.log("切换模式",state.isNight)
	},
	//获取本地设置
	getLocalSetting(state){
		try{
			const res = uni.getStorageSync("Setting");
			if(res){
				console.log(res);
			}
		}catch(e){
			console.log(e)
		}
	},
	//保存设置到本地
	setLocalSetting(state){
		try {
		    uni.setStorageSync('Setting',state.setting);
			console.log("保存成功")
		} catch (e) {
		    // error
			console.log(e)
		}
	}
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
