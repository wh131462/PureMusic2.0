// user 信息  
/**
 * user 拥有个人所有信息  登录仅仅可以获取一些个人信息 歌单不在线存储
 */
//模拟api
import api from '../../api/action.js'

// initial state
//user:{uid:number,username:string,motto:string}//用户信息"username": "wh131462","motto": "勇敢做自己！",
const state = () => ({
	//用户对象
	user:{
		uid:-1,//-1代表非用户 未登录
		headpic:"",
		username:"",
		nickname:"",
		motto:"",
		Rtime:0
	},
	//登录状态
	isLogin:false,
	
})

// getters
const getters = {
	getUserinfo:(state)=>{
		if(state.isLogin){
			return state.user
		}else{
			return null;
		}
	},
	getIsLogin:(state, getters)=>{
		return state.isLogin;
	}
}

// actions
const actions = {
	async login({commit,state},{username,password}){
		 let res=await api.login(username,password);
		 if(res.state==1){
			 //登录成功 
			 //改变state
			 let user=await api.getUser(res.uid);
			 commit('setUser',user);
			 commit('isLogin',true);
			 return {state:true,msg:'登录成功'};
		 }else{
			 //登录失败
			 return  {state:false,msg:res.err};
		 }
	},
	async register({commit,state},{username,password}){
		let res=await api.register(username,password);
		if(res.state==1){
				 //注册成功 
				 return {state:true,msg:'注册成功'};
		}else{
				 //注册失败
				 return  {state:false,msg:res.err};
		}
	}
}

// mutations
const mutations = {
	//登录成功之后需要 更新
	setUser(state,user){
		state.user=user;
	},
	//登录状态
	isLogin(state,is){
		state.isLogin=is;
	}
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
