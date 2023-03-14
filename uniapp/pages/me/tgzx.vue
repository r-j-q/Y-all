 

<template> 
 <view class="yuanbao0">
 	<view class="yuanbao">
 		<view class="yuanbao1">累计收益（元）</view>
 		<view class="yuanbaoTatol colorY">0</view>
 	</view>
	<view class="yaoqingList0">
		 <view class="yaoqingList" @click="handleCount(index)" :class="count==index?'actives':''" v-for="(item,index) in tuiGuanList" :key="index">
			 <view class="yaoqingList1">
			 	{{item.num}}
			 </view>
			 <view class="yaoqingList2">
			 	{{item.name}}
			 </view>
		 </view>
 </view>
 
 <view class="search-list-style">
 	<u-search placeholder="输入昵称" shape="square" height="100" @search="bandleSearch" @custom="bandleSearch" :showAction="true"
 		:animation="true" :clearabled="true"   v-model="keyword"></u-search>
 </view>
	
	
 </view>

</template>

<script> 
	export default {
		 
		data() {
			return {
				keyword:"",
				count:0,
			   tuiGuanList:[
				   {id:0,name:"累计邀请店长（人）",num:0},
				   {id:0,name:"累计邀请客户（人）",num:0}
			   ]

			};
		},
		// 触底加载更多
		onReachBottom() {},
		onLoad() {
			 
		},
		onShow() { 
			  
		},
		methods: {
			 bandleSearch(){
				 
			 },
            handleCount(index){
				this.count = index
			}
		}

	};
</script>

<style lang="scss">
	.actives{
		color: #000;
		font-size: 30upx;
		font-weight: bold;
	}
	.colorY{
		color: #C0853C;
	}
	.yuanbao0{
		min-height: 100%;
		background-color: #fff;
	}
	.search-list-style{
		width: 94%;
		margin: 0 auto;
	}
	.yaoqingList0{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		padding: 30upx 0;
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
	 .yaoqingList1{
		 text-align: center;
	 }
	 .yaoqingList2{
		 text-align: center;
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
