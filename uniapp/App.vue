<script>
 	const whiteList = [
 		'/pages/login/login',
 	]
 	import {
 		init
 	} from "@/shopro";
 	export default {
 		onShow() {
			
			
 			// ifdef APP-PLUS
 			// token标志来判断
 			 
		// 	 try{
			 	
			 
		// 		let tokens = uni.getStorageSync('token');
		// 		console.log("tokens",tokens)
 	// 		if (!tokens) {
 	// 			uni.addInterceptor('navigateTo', {
 	// 				invoke(e) {
 	// 					console.log(e)
 	// 					if (!this.hasPermission(e.url)) {
 	// 						uni.navigateTo({
 	// 							url: '/pages/login/login'
 	// 						})
 	// 						return false
 	// 					}
 	// 					return true
 	// 				},
 	// 				success(e) {
 	// 					console.log(e)
 	// 				},
 	// 				fail(e) {
 	// 					console.log(e)
 	// 				}
 	// 			})

 	// 		}
		// }catch(e){
		// 	//TODO handle the exception
		// }
			
 		 
 			// endif
 		},
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
 		methods:{
 			hasPermission(url)
			{ 
 				for (var i = 0; i < whiteList.length; i++) {
 					if (url.indexOf(whiteList[i]) != -1   ) {
 						return true
 					}
 				}
 				return false
 			}

 			 
 		}



 	};
 </script>

 <style lang="scss">
 	@import 'static/style/index.scss';

 	* {
 		font-family: SourceHanSansCN;
 	}

 	.p_100 {
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

 	.f32 {
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
