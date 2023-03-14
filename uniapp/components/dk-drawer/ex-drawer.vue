<template>
	<view>
		<ex-drawer ref='drawer' width="488">
			<view class="drawer" slot="drawerContent">
				<!-- <button @click="close" type="default">关闭</button> -->
				<view class="p_20">
					<view class="list_style">
						<view class="list_style_list" @click.stop="onChooseImg">
							<image :src="userData.avatar || userInfo.avatar" class="listImageLogo listImageLogoRedius"></image>
							<view class="list_style_">
								{{userInfo.level_txt}}
							</view>
						</view>
						<image :src="ic_right" class="listImage"></image>
					</view>
					<view class="list_style" @click.stop="changeNickName">
						<view class="list_style_list">
							<image :src="ic_nick_name_left" class="listImageLogom"></image>
							<view class="list_style_">
								昵称
							</view>
						</view>
						<view class="list_style_list">
							<view class="list_style_ font12">
								用户{{userInfo.nickname}}
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
								{{userInfo.mobile}}
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
					<view class="list_style" @click="jumpKczx">
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
					<view class="list_style_2" @click="confirmLogOut">
						<view class="login_out">
							<image :src="ic_exit" mode=""></image>
						</view>

					</view>
				</view>
			</view>
			<view v-if="showLeftIcon" class="container" slot="containerContent">
              <u-icon class="container_style" name="list" size="60" @click="open" color="#333"></u-icon>

			</view>
		</ex-drawer>
		
		
		<u-modal :title="title" :showCancelButton="true" cancel-text="取消" v-model="show" @confirm="confirm" @cancel="cancel" ref="uModal">
			<view class="slot-content">
							 <u-input placeholder="请输入昵称" :border="true" clearable v-model="userData.nickname" class="customStyle1">
							 </u-input>
						</view>
		</u-modal>
	</view>
</template>
<script>
	import {
		mapMutations,
		mapActions,
		mapState,
		mapGetters
	} from 'vuex';
	import exDrawer from '@/components/ex-drawer/ex-drawer.vue'
	export default {
		props:['userInfoShow','showLeftIcon'],
		data() {
			return {
           show:false,
			title:'修改昵称', 
				logo: require("../../static/images/mipmap-xhdpi/ic_logo.jpg"),
				ic_right: require("../../static/images/mipmap-xhdpi/ic_right.webp"),
				ic_nick_name_left: require("../../static/images/mipmap-xhdpi/ic_nick_name_left.webp"),
				ic_phone_number_left: require("../../static/images/mipmap-xhdpi/ic_phone_number_left.webp"),
				ic_tic_tok_left: require("../../static/images/mipmap-xhdpi/ic_tic_tok_left.webp"),
				ic_video_left: require("../../static/images/mipmap-xhdpi/ic_video_left.webp"),
				ic_about_us_left: require("../../static/images/mipmap-xhdpi/ic_about_us_left.webp"),
				ic_left_login: require("../../static/images/mipmap-xhdpi/ic_left_login.webp"),
				ic_exit: require("../../static/images/mipmap-xhdpi/ic_exit.webp"),
				userData:{
					nickname:'',
					fileUrl:"",
					avatar:""
				},
			}
		},
		components: {
			exDrawer
		},
		computed: {
			...mapGetters(['userInfo', 'agentInfo'])
			},
			watch:{
				userInfoShow(newVal){
					console.log('==newVal====>',newVal)
					if(newVal){
						this.open()
					} 
				}
			},
		methods: {
			...mapActions(['getUserInfo', 'showAuthModal', 'logout']),
			confirm(){
				if (!this.userData.nickname) {
					this.show = true;
					this.$u.toast('昵称不能为空');
					
					return;
				}
				this.editUserInfo()
			},
			changeNickName(){
				this.show = true;
			},
			cancel(){
				this.show = false;
			},
			// 修改信息
			editUserInfo() {
				let that = this;
				 
				 
				that.$http(
					'user.profile',
					{
						nickname: that.userData.nickname, 
						avatar: that.userData.fileUrl
					},
					'保存中...'
				).then(res => {
					if (res.code === 1) {
						that.getUserInfo(); 
						that.$u.toast('保存成功');
					}
				});
			},
			// 图片处理-上传图片
			async uploadImage(url) {
				const that = this;
				return new Promise((resolve, reject) => {
					that.$u.toast('上传中...');
					uni.uploadFile({
						url: that.$BASE_URL + '/api/common/upload',
						filePath: url,
						name: 'file',
						header: {token: uni.getStorageSync('token')},
						success: res => {
							res = JSON.parse(res.data);
							if (res.code === 1) {
								that.$u.toast('上传成功');
								resolve(res.data);
							} else {
								that.$u.toast('上传失败');
							}
						},
						complete: e => {
							uni.hideLoading();
						}
					});
				}).catch(e => {
					console.log(e);
				});
			},
			jumpToGoods() {
				// uni.navigateTo({
				// 	url: "/pages/dkdetail/merchantList"
				// })
				 if(uni.getStorageSync('merchantId').data==1){
					 uni.navigateTo({
					 	url: "/pages/dkdetail/merchantLogin"
					 })
				 }else{
					 uni.navigateTo({
					 	url: "/pages/dkdetail/merchantList"
					 })
				 }
				 
			},
			// 更换头像
			async onChooseImg() {
				// let authState = 0;
				// authState += await new Auth('writePhotosAlbum').check();
				// if (authState < 1) return;
				// authState += await new Auth('camera').check();
				// if (authState < 2) return;
				const chooseImageRes = await this.chooseImage(1);
				const uploadImageRes = await this.uploadImage(chooseImageRes[0]);
				this.userData.avatar = uploadImageRes.fullurl;
				this.userData.fileUrl = uploadImageRes.url;
				this.editUserInfo()
				// this.editInfoDisabled = this.userData.avatar == this.userInfo.avatar;
			},
			// 图片处理-选择图片
			async chooseImage(count = 1) {
				return new Promise((resolve, reject) => {
					uni.chooseImage({
						count: count, //默认9
						sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album'], //从相册选择
						success: res => {
							resolve(res.tempFilePaths);
						}
					});
				}).catch(e => {
					console.log(e);
				});
			},
			open() {
				this.$refs.drawer.open()
			},
			close() {
				this.$refs.drawer.close()
			},
			// 退出登录
			confirmLogOut() {
				this.close()
				this.logout();
			 
				this.showAuthModal('accountLogin');
				uni.navigateTo({
					url: "/pages/login/login"
				})
				// this.$Router.back();
			},
			jumpKczx(){
				uni.navigateTo({
					url: '/pages/me/kczx',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style scoped>
	.p_20 {
		padding: 40upx;
	}

	.login_out {
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
.customStyle1 {
		/* width: 100%; */
		margin: 30upx;
	}
	.container {
		/* background-color: #19BE6B; */
		width: 80upx;
		height: 80upx;
	}

	.login_out image {
		display: block;
		width: 100%;
		height: 100%;
	}

	.container_style {
		width: 100%;
		height: 100%;
	}
	.listImageLogoRedius{
		border-radius: 100upx;
	}

	.list_style {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 30upx 0;
		border-bottom: 1px solid #f5f5f5;
	}

	.list_style_2 {
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

	.listImagem {
		width: 10upx;
		height: 20upx;
	}

	.listImageLogom {
		width: 50upx;
		height: 50upx;
		margin-right: 20upx;
	}

	.list_style_ {
		color: #333;
		font-weight: bold;
		font-size: 28upx;
		margin-left: 20upx;
	}

	.listImage {
		width: 20upx;
		height: 30upx;
	}
	.ex-drawer{
		    position: absolute;
		    top: 0;
		    z-index: 20;
	}
</style>
