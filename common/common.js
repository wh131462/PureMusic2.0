// 防止处理多次点击
function noMoreClick(methods, info) {
	// methods是需要点击后需要执行的函数， info是点击需要传的参数
	let that = this;
	if (that.noClick) {
		// 第一次点击
		that.noClick = false;
		if (info && info !== '') {
			// info是执行函数需要传的参数
			methods(info);
		} else {
			methods();
		}
		setTimeout(() => {
			that.noClick = true;
		}, 2000)
	} else {
		// 这里是重复点击的判断
	}
}
//定时器代码 
function pSetInterval(fn,s){
	let timeOut=(fn,s)=>{
		setTimeout(()=>{
			fn();
			timeOut(fn,s);
		},s);
	}
	timeOut(fn,s);
}
function pClearInterval(){
	
}
//导出
export default {
	noMoreClick, //禁止多次点击
}
