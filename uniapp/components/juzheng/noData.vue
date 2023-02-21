<template>
	<view class="fill-top-bottom-style">
		 <image :src="nodata" class="nodataStyle"></image>
		 <view class="nodataStyles font12">
		 	{{title}} 
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
 .fill-top-bottom-style{
	 width: 50%;
    height: 300upx;
	margin: 0 auto;
	margin-top: 30%;
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

 