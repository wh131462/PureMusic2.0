//测试用 模拟api
const users=[{
	uid:0,
	username:"wh131462",
	nickname:"VueMonopoly",
	motto:"勇敢做自己~",
	password:"123456",
	Rtime:new Date("1998/11/22 22:55:55")
}];

export default {
	//获取user信息
	async getUser(uid){
		await wait(100);
		let user=await users.find(function(user){
			return user.username===u;
		});
		return user;
	},
	//登录 返回boolean 
	async login(u,p){
		await wait(100)
		let res={};
		let user=users.find(function(user){
			return user.username===u;
		});
		if(u==user.username){
			if(p==user.password){
				res.uid=user.uid;
				res.state=1;
			}else{
				res.state=-1;
				res.err="Password Error!";
			}
			
		}else{
			res.state=-1;
			err="Non-User";
		}
		return JSON.stringify(res);
	},
	//注册
	async register(u,p){
		await wait(100)
		let res={};
		let id=users.length,
		time=new Date().now();
		users.push({
			uid:id,
			username:u,
			nickname:"",
			motto:"",
			password:p,
			Rtime:time
		});
		res.uid=id;
		res.state=1;
		
		return JSON.stringify(res);
	}
}

//模拟延迟
function wait (ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}
