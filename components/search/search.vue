<template>
	<view>
		<scroll-view scroll-y="true" >
			<view v-for="(item,index) in searchRes" :key="index">
				<text>{{item.title}}</text> 
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"search",
		props:{
			searchRes:null
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
