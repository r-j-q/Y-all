<template>
	<view class="list-box">
		 
		<view class="row_s_around" >
			  	<view class="margin-bottom-l"> 测试消息</view>
			 <view class="margin-bottom-r">
				2022-12-10
			</view>
		</view>
		<view class="content-style"> 测试消息的内容</view>


	</view>
</template>

<script>
	import {
		mapMutations,
		mapActions,
		mapState
	} from 'vuex';
	let systemInfo = uni.getSystemInfoSync();
	export default {
		components: {

		},
		data() {
			return { 

			};
		},
		// 触底加载更多
		onReachBottom() {

		},
		onLoad() {

		},
		methods: { 
		}
	};
</script>

<style lang="scss" scoped>
	.list-box{
		min-height: 100%; 
		background-color: #fff;
	}
	 .row_s_around{
		 display: flex;
		 flex-direction: row;
		 align-items: center;
		 justify-content: space-between;
		 border-top: 20upx solid #f5f5f5;
		 padding: 20rpx;
	 }
	 .margin-bottom-l{
		 font-size: 16px;
		 font-weight: bold;
	 }
	 .margin-bottom-r{
		 font-size: 14px;
	 }
	 .content-style{
		 padding: 20rpx;
	 }
</style>
