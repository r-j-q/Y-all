<template>
	<view>
		<ex-drawer ref='drawer' width="488">
			<view class="drawer" slot="drawerContent">
				<!-- <button @click="close" type="default">关闭</button> -->
				<view class="p_20">
					<view class="list_style">
						<view class="list_style_list">
							<image :src="logo" class="listImageLogo"></image>
							<view class="list_style_">
								普通会员
							</view>
						</view>
						<image :src="ic_right" class="listImage"></image>
					</view>
					<view class="list_style">
						<view class="list_style_list">
							<image :src="ic_nick_name_left" class="listImageLogom"></image>
							<view class="list_style_">
								昵称
							</view>
						</view>
						<view class="list_style_list">
							<view class="list_style_ font12">
								用户 2THOK
							</view>
							<image :src="ic_right" class="listImagem"></image>
						</view>

					</view>
					<view class="list_style">
						<view class="list_style_list">
							<image :src="ic_phone_number_left" class="listImageLogom"></image>
							<view class="list_style_">
								手机号
							</view>
						</view>
						<view class="list_style_list">
							<view class="list_style_ font12">
								19138984499
							</view>
							<image :src="ic_right" class="listImagem"></image>
						</view>
					
					</view>
					<view class="list_style">
						<view class="list_style_list">
							<image :src="ic_tic_tok_left" class="listImageLogom"></image>
							<view class="list_style_">
								抖音号
							</view>
						</view>
						<view class="list_style_list">
							 
							<image :src="ic_right" class="listImagem"></image>
						</view>
					
					</view>
					<view class="list_style">
						<view class="list_style_list">
							<image :src="ic_video_left" class="listImageLogom"></image>
							<view class="list_style_">
								视频教程
							</view>
						</view>
						<view class="list_style_list">
							 
							<image :src="ic_right" class="listImagem"></image>
						</view>
					
					</view>
					<view class="list_style">
						<view class="list_style_list">
							<image :src="ic_about_us_left" class="listImageLogom"></image>
							<view class="list_style_">
								关于我们
							</view>
						</view>
						<view class="list_style_list">
							 
							<image :src="ic_right" class="listImagem"></image>
						</view>
					
					</view>
					<view class="list_style" @click="jumpToGoods">
						<view class="list_style_list">
							<image :src="ic_left_login" class="listImageLogom"></image>
							<view class="list_style_">
								商家登录
							</view>
						</view>
						<view class="list_style_list">
							 
							<image :src="ic_right" class="listImagem"></image>
						</view>
					
					</view>
					<view class="list_style_2">
						<view class="login_out"> 
							<image :src="ic_exit" mode=""></image>
						</view>
						
				</view>
				</view>
			</view>
			<view class="container" slot="containerContent">

				<u-icon class="container_style" name="list" size="60" @click="open" color="#333"></u-icon>

			</view>
		</ex-drawer>
	</view>
</template>
<script>
	import exDrawer from '@/components/ex-drawer/ex-drawer.vue'
	export default {
		data() {
			return {

				logo: require("../../static/images/mipmap-xhdpi/ic_logo.jpg"),
				ic_right: require("../../static/images/mipmap-xhdpi/ic_right.webp"),
				ic_nick_name_left: require("../../static/images/mipmap-xhdpi/ic_nick_name_left.webp"),
				ic_phone_number_left: require("../../static/images/mipmap-xhdpi/ic_phone_number_left.webp"),
				ic_tic_tok_left: require("../../static/images/mipmap-xhdpi/ic_tic_tok_left.webp"),
				ic_video_left: require("../../static/images/mipmap-xhdpi/ic_video_left.webp"),
				ic_about_us_left: require("../../static/images/mipmap-xhdpi/ic_about_us_left.webp"),
				ic_left_login: require("../../static/images/mipmap-xhdpi/ic_left_login.webp"),
 ic_exit: require("../../static/images/mipmap-xhdpi/ic_exit.webp")
			}
		},
		components: {
			exDrawer
		},
		methods: {
			jumpToGoods(){
				uni.navigateTo({
					url:"/pages/dkdetail/merchantList"
				})
			},
			open() {
				this.$refs.drawer.open()
			},
			close() {
				this.$refs.drawer.close()
			}
		}
	}
</script>

<style scoped>
	.p_20 {
		padding: 40upx;
	}
.login_out{
	width: 300upx;
	height: 100upx;
	line-height: 100upx;
	/* border-radius: 45upx; */
	/* background-color: #7C75F5; */
	/* text-align: center; */
	/* color: #fff; */
}
	.drawer {
		background-color: #ffffff;
		height: 100vh;
	}

	.font12 {
		font-size: 12px;
	}

	.container {
		/* background-color: #19BE6B; */
		width: 80upx;
		height: 80upx;
	}
	.login_out image{
		display: block;
		width: 100%;
		height: 100%;
	}

	.container_style {
		width: 100%;
		height: 100%;
	}

	.list_style {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 30upx 0;
		border-bottom: 1px solid #f5f5f5;
	}
	.list_style_2{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		 margin-top: 200upx;
	}

	.list_style_list {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.listImageLogo {
		width: 100upx;
		height: 100upx;
	}
	.listImagem{
		width: 20upx;
		height: 30upx;
	}
  .listImageLogom{
	  width: 50upx;
	  height: 50upx;
	  margin-right: 20upx;
  }
	.list_style_ {
		color: #333;
		font-weight: bold;
		font-size: 28upx;
	}

	.listImage {
		width: 30upx;
		height: 40upx;
	}
</style>
