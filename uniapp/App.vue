<script>
 // import routingIntercept from '@/utils/permission.js'
 	import {
 		init
 	} from "@/shopro";
 	export default {
 		 
		 
 		onLaunch(options) {
			// let token = uni.getStorageSync('token');
			 
			
			  
			// 	if(  token){
			// 		uni.switchTab({
			// 			url:'/pages/index/index'
			// 		})
			// 		// next()
			// 	}
			// 	try{
			// if(options.path=="pages/login/login"){
			// 	uni.hideTabBar()
			// }
			// console.log('======options',options)
		 
			// 	 // routingIntercept()
			// }catch(e){
			// }
            
 			init(options);

		    

 		},
 		globalData: { 
		 
 			// toast: Object, //全局提示，必须在页面初始化
 		},
		onShow() {
		// setTimeout(()=>{
		// 	plus.navigator.closeSplashscreen()
		// },2000)	
		},
 		methods:{
 		 
         loginAuther(){
			 uni.reLaunch({
			 	url:"/pages/login/login"
			 })
			 // plus.navigator.closeSplashscreen()
			  
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
