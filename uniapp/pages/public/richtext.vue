<!-- 富文本 -->
<template>
	<view class="rich-wrap">
		<view class="content_box"><u-parse :html="richText"></u-parse></view>
	</view>
</template>

<script>
import Auth from '@/shopro/permission/index.js';
export default {
	components: {},
	data() {
		return {
			richText: ''
		};
	},
	computed: {},
	onLoad() {
		this.$Route.query.id && this.getRichText();
	},
	methods: {
		getRichText() {
			 // uni.request({
				// url: '/addons/shopro/index/richtext?id='+this.$Route.query.id, 
				// 	 // https//danke.shningmi.com
				// 	method:'GET',//请求方式，必须为大写
				// 	success: (res) => {
				// 		console.log("resresresresres",res)
				// 			if (res.code === 1) {
				// 				this.richText = res.data;
				// 				uni.setNavigationBarTitle({
				// 					title: res.data.title
				// 				});
				// 			}
				// 	}
			 //  })

			
			
			
			
			this.$http('common.richText', {
				id: this.$Route.query.id
			}).then(res => {
				if (res.code === 1) {
					console.log('=====>>>',  res.data)
					console.log('=====',typeof res.data)
					this.richText = res.data.content.replaceAll('Shopro','蛋壳矩阵');
					// Shopro
					uni.setNavigationBarTitle({
						title: res.data.title
					});
				}
			});
		}
	}
};
</script>

<style lang="scss">
.content_box {
	background: #fff;
	padding: 30rpx;
}
</style>
