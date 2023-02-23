<template>
 <view class="padding-top-30-">
 	<view class="fill-top-bottom-style">
 		 <image :src="nodata" class="nodataStyle"></image>
 		 <view class="nodataStyles font12">
 		 	{{title}} 
 		 </view>
 	</view>
 </view>
</template>

<script>
	export default {
		props: ['Index',
		'current','title'],

		data() {
			return {
				 nodata:require('../../static/images/mine/nodata.png')
			}
		},
		watch: {

		},
		methods: {


		},

	}
</script>

<style scoped lang="scss">
	.padding-top-30-{
		padding-top: 30%;
	}
 .fill-top-bottom-style{
	 width: 50%;
    height: 300upx;
	margin: 0 auto;
	 
 }
 .nodataStyle{
	 width: 100%;
	 height: 100%;
 }
 .nodataStyles{
	 text-align: center;
	 color: #A5A5A5;
 }
</style>

 