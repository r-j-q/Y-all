<template>
	<view class="kczx-detail">
		<view class="kczx-detail0"> 
			 <image :src="kcdetail" mode=""></image>
		</view>
		<view class="kczx-detail1">
			<view class="kczx-detail1-title">
				课程简介
			</view>
			<view class="kczx-detail1-content margin-top-30">
				新手导航必须课视频版 助力新手小白开启逗
			</view>
			<view class="kczx-detail1-title margin-bottom">
				课程目录
			</view>
			 <!-- videosList -->
			 <view class="videosListStyle margin-bottom kczx-detail1-title" @click="jumpKczxDetailVideo(its)" v-for="(its,i) in videosList" :key="i">
			 	<view class="videosListStyleLeft">
					<view class="ic_video_selected_">
						<image  :src="ic_video_selected" mode=""></image>
					</view>
					<view class="videosListStyleLeftmar">
						{{its.title}}
					</view>
			 		  
			 	</view>
				<view class="videosListStyleGo">
					去学习
				</view>
			 </view>
			  
		</view>
		 

	</view>

</template>

<script>
	 
	export default { 
		data() {
			return {
			 videosList:[], 
			 kcdetail:require("../../static/images/mine/kcdetail.jpg"),
			 ic_video_selected:require("../../static/images/mipmap-xhdpi/ic_course_item_video.webp"),
			 
			};
		},
		// 触底加载更多
		onReachBottom() {},
		onLoad(options) {
			if(options.id){
				this.getCourseDetail(options.id)
			}
			 
		},
		onShow() {

		},
		methods: {
			 jumpKczxDetailVideo(item){
				 uni.navigateTo({
				 	url:"/pages/me/kczxDetailVideo?title="+item.title+"&video="+item.video
				 })
			 },
			getCourseDetail(id) {
				let that = this
				that.$http('me.courseDetail', {
                 id
				}).then(res => {
					 that.videosList =  res.data.videos;
					// if (res.data.data) {
					// 	that.keChenDetailList = res.data.data;
					// }



					console.log("=====222222======>", res.data)
				});
			},

		}

	};
</script>

<style lang="scss" scoped>
	.kczx-detail1{
		width: 90%;
		 
		margin: 0 auto;
		padding-bottom: 100upx;
		
	}
	.videosListStyleLeft{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.videosListStyleLeftmar{
		margin-left: 20upx;
	}
	.ic_video_selected_{
		width: 70upx;
		height: 70upx;
		border-radius: 35upx;
	}
	.ic_video_selected_ image{
		width: 100%;
		height: 100%;
	}
	.margin-top-30{
		margin: 30upx 0;
	}
	
	.kczx-detail1-title{
		font-size: 28upx;
		font-weight: bold;
	}
	.kczx-detail1-content{
		font-size: 26upx;
	}
	 .kczx-detail{
		 min-height: 100%;
		 background-color: #fff;
	 }
	 .kczx-detail0-back{
		 width: 60upx;
		 height: 60upx;
		 position: absolute;
		 top: 80upx;
		 left: 60upx;
		 z-index: 99;
	 }
	 .kczx-detail0{
		 height: 700upx;
		 position: relative;
	 }
	 .kczx-detail0 image{
		 width: 100%;
		 height: 100%;
	 }
	 .videosListStyle{
		 display: flex;
		 flex-direction: row;
		 align-items: center;
		 justify-content: space-between;
		 padding: 20upx 40upx; 
		 background-color: #F4F2F8;
		 border-radius: 90upx;
	 }
	 .videosListStyleGo{
		 color: #fff;
		 background-color: #7C75F5;
		 font-size: 14px;
		 width: 150upx;
		 height: 70upx;
		 line-height: 70upx;
		 border-radius: 10upx;
		 text-align: center;
		 
	 }
</style>
