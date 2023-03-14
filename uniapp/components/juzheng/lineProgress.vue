<template>
	<view class="line-progress-w">
		<u-line-progress :percent="progressCount" :round="true" height="40upx"  active-color="#ff9900">
			<view class="u-percentage-slot row-center" >
				<text style="font-size: 12px; width: 40px;display: flex;padding-left: 10px; ">已抢</text>/<text style="width: 100rpx; margin-right: 20rpx;font-size: 12px;">{{progressCount}}%</text>
			 </view>
		</u-line-progress>
		 
	</view>
</template>

<script> 
	export default {
		props: ['currentIndex', 'total','progressCount'],

		data() {
			return {
				percentage: 80
			}
		},
		watch: {
			currentIndex: function(newVal, oldVal) {
				this.percentage = getApp().percentageLineProgress(newVal + 1, this.total)
			}
		},
		methods: {


		},

	}
</script>

<style scoped lang="scss">
.line-progress-w{
	    width: 100%;
	    // margin: 0 auto;
}
.row-center{
	    display: flex;
	    flex-direction: row;
	    align-items: center;
		color:#7C75F5;
		margin-left: 200upx;
		 
}

</style>
