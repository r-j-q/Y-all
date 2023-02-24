 

<template> 
 <view class="yuanbao0">
 	<view class="yuanbao">
 		<view class="yuanbao1">元宝</view>
 		<view class="yuanbaoTatol colorY">{{points}}</view>
 	</view>
	<view class="yuanbao2">
		<view class="sfontWeight"  >收入明细</view>
		<noData title="暂无数据" v-if='pointsLogList.length==0' />
		<view class="yuanbao30"  v-else v-for="(items,index) in pointsLogList" :key="index">
			 <view class="yuanbao3">
			 	<view class=" ">
			 		<view class="">订单编号 </view>
			 		<view class="">{{items.order_sn}} </view> 
			 	</view>
				<view class=" ">
					<view class="">{{items.type_name}} </view>
					<view class=""> {{items.create_time}} </view> 
				</view>
			 </view>
			<view class="yuanbao4 colorY" >
				{{items.wallet}}
			</view>
		</view>
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
				points:"",
			 pointsLogList:[]

			};
		},
		// 触底加载更多
		onReachBottom() {},
		onLoad(options) {
			 this.points=options.v
		},
		onShow() { 
			 this.getPointsLog() 
		},
		methods: {
			 getPointsLog() {
			 	let that = this
			 	that.$http('ali.pointsLog', {}).then(res => {
			 		if (res.code == 1) {
			       	that.pointsLogList = res.data.wallet_logs.data
			 
			 		}
			 
			 
			 	});
			 },
            
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
		 width: 80%;
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
