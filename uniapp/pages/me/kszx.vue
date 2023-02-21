 

<template> 
 <view class="yuanbao0">
 	 
	<view class="yuanbao2"> 
		<noData title="暂无数据"/>
		<!-- <view class="yuanbao30 ">
			 <view class="yuanbao3">
			 	<view class=" ">
			 		<view class="">订单编号 </view>
			 		<view class="">111111 </view> 
			 	</view>
				<view class=" ">
					<view class="">好友拉新 </view>
					<view class="">2023-12-23 </view> 
				</view>
			 </view>
			<view class="yuanbao4 colorY">
				-20.00
			</view>
		</view> -->
	</view>
	
	
 </view>

</template>

<script> 
	import noData from '@/components/juzheng/noData.vue';
	export default {
		 components:{
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

<style lang="scss">
	.colorY{
		color: #C0853C;
	}
	.yuanbao0{
		min-height: 100%;
		background-color: #fff;
	}
	.yuanbao6{
		// width: 50%;
		display: flex;
		flex-direction: column;
		// justify-content: space-between;
		align-items: center;
	}
	.yuanbao30{
		display: flex;
		flex-direction: row;
		align-items: center;justify-content: space-between;
		width: 100%;
		padding: 20upx;
		border-bottom: 1px solid #f5f5f5;
	}
	.yuanbao3{
		 width: 60%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.yuanbao5{
		width: 50%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	 .yuanbao{
		 display: flex;
		 flex-direction: column;
		 justify-content: center;
		 align-items: center;
		 padding: 100upx 0;
		 border-bottom: 20upx solid #f5f5f5;
	 }
	 .yuanbao1{
		 font-size: 28upx;
	 }
	 .yuanbaoTatol{
		 font-size: 60upx;
		 font-weight: bold;
	 }
	 .yuanbao2{
		 width: 94%;
		 margin: 0 auto;
		 padding: 40upx 0;
	 }
</style>
