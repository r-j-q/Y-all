 

<template> 
 <view class="yuanbao0">
 	<view class="yuanbao">
 		<view class="yuanbao1">冻结金额</view>
 		<view class="yuanbaoTatol colorY">{{wells}}元</view>
 	</view>
	<view class="yuanbao2">
		<view class="sfontWeight">收入明细</view>
		
		<noData title="暂无数据" v-if="moneyLogList.length==0"/>
		
		
		<view class="yuanbao30" v-else v-for="(items,index) in moneyLogList" :key="index">
			 <view class="yuanbao3">
			 	<view class=" ">
			 		<view class="">订单编号 </view>
			 		<view class="">{{item.order_sn}} </view> 
			 	</view>
				<view class=" ">
					<view class="">{{items.type_name}} </view>
					<view class="">{{items.create_time}}</view> 
				</view>
			 </view>
			<view class="yuanbao4 colorY">
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
				wells:'',
			 moneyLogList:[]

			};
		},
		// 触底加载更多
		onReachBottom() {},
		onLoad(options) {
			 this.wells=options.v
		},
		onShow() { 
			  this.getmoneyLog()
		},
		methods: {
			 
            //   moneyLog 
            getmoneyLog() { 
            	this.$http('ali.moneyLog', {
                page:1
            	}).then(res => {
            		if (res.data) { 
            			this.moneyLogList = res.data.wallet_logs.data;
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
