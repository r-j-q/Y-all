<template>
 	<view class="order-center">
		 
       <view class="">
       	  <noData title="暂无数据" />
       </view>
 	</view>

 </template>

 <script>
 	import noData from '@/components/juzheng/noData.vue';
 	export default {
 		components: {
 			noData
 		},
 		data() {
 			return {
                 

 			};
 		},
 		// 触底加载更多
 		onReachBottom() {},
 		onLoad() {

 		},
 		onShow() {

 		},
 		methods: {


 		}

 	};
 </script>

 <style  scoped>
.order-center{
	
	min-height: 100%;
	background-color: #fff;
}
 </style>
