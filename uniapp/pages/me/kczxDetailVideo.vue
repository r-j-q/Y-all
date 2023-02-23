<template>
	<div class="page">
		 <!-- https://ext.dcloud.net.cn/plugin?id=856 -->
		<div class="video-box"> 
			<view class="video-box-video">
				 <yy-video-player :show-download-btn="false" :auto-play="true" :url="video" :danmuList="danmuList" :show-back-btn="false">
				</yy-video-player>
			</view>

		</div>
	</div>
</template>

<script>
	import yyVideoPlayer from '@/components/yy-video-player/yy-video-player.nvue';
	export default {
		components: {
			yyVideoPlayer
		},

		data() {
			return {
				 video: "", 
				 danmuList:[]
			}
		},
		onLoad(options) {
			uni.setNavigationBarTitle({
				title:options.title||''
			})
			 if(options.video){
				 this.video = options.video;
			 }
			 
		},
		methods: {

		},

	}
</script>

<style scoped>
	.video-box{
		width: 94%;
		margin: 0 auto;
	}
	 .video-box-video{
		 width: 100%;
		 
	 }

	.color_f_f {
		color: #fff
	}
</style>
