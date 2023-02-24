 

<template> 
</template>

<script> 
	export default {
		 
		data() {
			return {
			 

			};
		},
		// 触底加载更多
		onReachBottom() {},
		onLoad() {
			 
		},
		onShow() { 
			 	let token= uni.getStorageSync('token')
			 	console.log("isLogin",typeof token);
			 	if(token == ""){
			 		uni.navigateTo({
			 			url:"/pages/login/login"
			 		})
			 		return
			 	}else{
					uni.switchTab({
						url:"/pages/index/index"
					})
				}
		},
		methods: {
			 
            
		}

	};
</script>

<style lang="scss">
	 
</style>
