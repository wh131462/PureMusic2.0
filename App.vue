<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "@/static/iconfont/iconfont.css";
	/* 公共字体 */
	view{
		padding: 0;
		margin: 0;
	}
	@font-face {
		font-family: "FZ";
		src: url('static/Font/FZZXHJW.TTF');
	}

	* {
		font-family: "FZ";
	}
	/* NavBar */
	.navBarIcon {
		display: flex;
		justify-content: center;
	}
	.navBarIcon image {
		height: 45rpx;
		width: 45rpx;
	}
	/* nav search ::DROP*/
	.nav-search-content{
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}
	
	.nav-search-content input{
		margin: 0;
		padding: 0;
		background-color: #FFF;
		width: 100%;
		height:calc(100% - 30rpx);
		border-radius:30rpx;
		text-indent:1em;
	}
	/* nav padding */
	.nav-padding{
		width: 100vw;
		height: 90rpx;
		overflow: hidden;
		position: fixed;
		top: 0;
		z-index: 9998;
	}
	.nav-padding-night{
		width: 100vw;
		height: 90rpx;
		background-color: #111111;
		overflow: hidden;
		position: fixed;
		top: 0;
		z-index: 9998;
	}
	.nav-padding-night image{
		display: none;
	}
	.nav-padding image{
		width: 100vw;
		height: 100vh;
		position: absolute;
		top: 0;
		filter: blur(1px) brightness(80%);
	}
	/* tabbar padding */
	.tab-bar-padding{
		/* 与tabbar 高度相同 */
		height: 120rpx;
		overflow: hidden;
		background-color:rgba(255,255,255,1);
		z-index: 9998;
		position:fixed;
		bottom: 0;
	}
	 .tab-bar-padding image{
		width: 100vw;
		height: 100vh;
		position: absolute;
		bottom: 0;
		filter: blur(1px) brightness(80%);
	}
	/* tabbar 样式 */
	/* tab-bar content */
	.tab-bar {
		/* 布局弹性盒子居中 */
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		/* 层级最高 */
		z-index: 9999;
		width: 100%;
		height: auto;
		/* 固定定位 */
		position: fixed;
		bottom: 0;
	}
	.tab-bar-night{
		/* 布局弹性盒子居中 */
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		/* 层级最高 */
		z-index: 9999;
		width: 100%;
		height: auto;
		/* 固定定位 */
		position: fixed;
		bottom: 0;
	}

	.tab-bar::after ,.tab-bar-night::after {
		content: "";
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: -1;
		/* 背景颜色 */
		background-color: rgba(255, 255, 255, 0.1);
	}

	/* tabbar-item */
	.tab-item {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 120rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	/* 夜间模式tabbar icon */
	.tab-bar-night .tab-item-icon::before{
		color:#9f9f9f;
	}
	/* 夜间模式 tabbar text */
	.tab-bar-night .tab-item text {
		font-size: 0.9rem;
		color: #9f9f9f;
	}
	.tab-bar-night .tab-item-icon-active::before {
		color: #FFF;
	}
	
	.tab-bar-night .tab-item-active text {
		color: #FFF !important;
	}
	/* tabbar icon */
	.tab-item-icon::before{
		color: #757575;
	}
	.tab-item text {
		color: #757575;
		font-size: 0.9rem;
	}

	.tab-item-icon-active::before {
		color: #000000;
	}

	.tab-item-active text {
		color: #000000 !important;
	}

	/* Background */
	.Background {
		width: 100vw;
		height: 100vh;
		background-color: #FFF;
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;
	}

	.Background-night {
		width: 100vw;
		height: 100vh;
		background-color: #111111;
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;
	}

	.Background-night image {
		display: none;
	}

	.Background image {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		filter: blur(1px) brightness(80%);
	}
</style>
