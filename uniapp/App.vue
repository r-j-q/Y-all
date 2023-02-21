 
<script>
	import {
		init
	} from "@/shopro";
	export default {
		onLaunch(options) {
			// uni.hideTabBar()
			// let token= uni.getStorageSync('token')
			// 	console.log("isLogin",typeof token);
			// 	if(token == ""){
			// 		uni.navigateTo({
			// 			url:"/pages/user/login"
			// 		})
			// 		return
			// 	}else{
			// 		uni.switchTab({
			// 			url:"/pages/index/index"
			// 		})
			// 		return
			// 	}
				
				
			init(options);
			
			
			
	 
		},
		globalData: {
			// toast: Object, //全局提示，必须在页面初始化
		},
		mounted() {
		 
			 
			//初始化赋值，如果使用的页面未初始化会报错，就算已经其他页面已经初始化过了也会看不到，所以建议用全局导航栏u-navbar
			// getApp().globalData.toast = this.$refs.uToast
		}

		 

	};
</script>

<style lang="scss">
	@import 'static/style/index.scss';

	* {
		font-family: SourceHanSansCN;
	}
.p_100{
	padding-bottom: 100upx;
}
	.color98 {
		color: #9E8CDE;
	}

	.colora8 {
		color: #A8A8A8;
	}
	.colorf {
		color: #fff;
	}

	.f28 {
		font-size: 28upx;
	}
	.f32{
		font-size: 32upx;
	}
</style>
<!-- 组件集成 https://github.com/umicro/uView -->



<!-- 
测试证书

testdanke.keystore 
  密钥  testdanke
  姓  ran
  
  组织单位   penghai
  成都市
  
  -->