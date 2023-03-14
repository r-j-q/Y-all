<template>
	<view>
		<view class="sh-userinfo-box">
			<!-- :style="{ background: detail.image ? `url(${detail.image}) no-repeat center / 100% 100%` : detail.color }" -->
			<view class="head-wrap">
				<!-- 标题栏 -->
				<shopro-navbar backIconName="" backText="" :backTextStyle="{
						color: '#fff',
						fontSize: '40rpx',
						fontWeight: '500'
					}" :background="navBackground">
					<view slot="right" class="u-flex u-row-center u-col-center u-m-r-20" v-if="userOtherData.is_store"
						@tap="goStore">
						<button class="u-reset-button merchant-btn">切换商家版</button>
					</view>
				</shopro-navbar>

				<view class="user-head u-flex u-row-between">
					<view class="u-flex">
						<!-- 个人信息 -->
						<view class="info-box info-box-position">
							<view class="u-flex" >
								<view class="head-img-wrap">
									<!--  @tap="$Router.push('/pages/user/info')"  -->
									<image   class="head-img" :src="user.avatar || $IMG_URL + '/imgs/base_avatar.png'"
										mode="aspectFill"></image>
									<!-- 同步信息 -->
									<block v-if="showRefresh">
										<button @tap.stop="showModal = true"
											class="u-reset-button u-flex u-row-center u-col-center refresh-btn">
											<view class="u-iconfont uicon-reload" style="color: #fff;font-size: 24rpx;">
											</view>
										</button>
									</block>
								</view>
								<view class="" >
									<view class="user-name u-ellipsis-1 margin-bottom">
										用户{{ userInfo.nickname || '请登录~' }}</view>
									<view class="user-name u-ellipsis-1  ">UID:{{ userInfo.user_id  }}</view>
								</view>
								<view class="grade-tag tag-box displayFlex" @click.stop="copyText">
									<!-- attach -->
									<u-icon name="attach" size="40rpx" color="#ffffff"></u-icon>
									<view class="tag-title" @click="handleClickCopys(userInfo.user_id )">复制</view>
									<!-- <image v-if="userInfo.group.image" class="tag-img" :src="userInfo.group.image" mode=""></image> -->
									<!-- <text class="tag-title">{{ userInfo.group.name }}</text> -->

								</view>
							</view>
                              <view class="bellFill" @click.stop="infoJump('systemMessages')">
                              	<u-icon name="bell-fill" size="60rpx" color="#ffffff"></u-icon>
                              </view>
							<view class="info-box-position-absolute">
								<view class="info-box-position0">
									<view class="info-box-position1">
										<view class="info-box-position1-1 margin-bottom"> {{user.level}}</view>
										<view class="info-box-position1-2"> 使用所有软件功能，享专属特权！</view>
									</view> 
									<!-- 仅使用软件部分功能，去升级 -->
									<view class="info-box-position2" @click.stop="infoJump('toUpgrade')">
										去升级
									</view>
								</view>
								<view class="info-box-position3">
									<view class="f14">
									可提现金额： <text class="s_j_e">{{user.money}}</text>
									</view>
									<view class="f14" @click="infoJump('toAlipay')">
									去提现 >	
									</view>
								</view>
							</view>
						</view>
						<!-- 等级 -->

					</view>
					<!-- <view class="u-flex"> -->
						 
						<!-- <button class=" u-reset-button code-btn" @tap="onShare"><text class="iconfont icon-qrcode"></text></button> -->
					<!-- </view> -->
				</view>
			</view>
		</view>
		<!-- <u-toast ref="uToastDetails"></u-toast> -->
		<!-- 绑定手机 -->
		<view class="notice-box u-flex u-row-between u-p-30"
			v-if="userInfo.verification && !userInfo.verification.mobile" @tap="bindMobile">
			<view class="notice-detail">点击绑定手机号，确保账户安全</view>
			<button class="u-reset-button bindPhone">去绑定</button>
		</view>
		<!-- 更新信息 -->
		<!-- <view class="cu-modal" :class="{ show: showModal }" @tap="showModal = false">
			<view class="cu-dialog" style="width: 600rpx;">
				<view class="modal-box">
					<view class="modal-head">提示</view>
					<view class="modal-content">更新微信信息？</view>
					<view class="modal-bottom u-flex u-col-center">
						<button class="u-reset-button modal-btn cancel-btn" :hover-stay-time="100"
							hover-class="btn-hover" @tap="showModal = false">取消</button>
						<button class="u-reset-button  modal-btn save-btn" :hover-stay-time="100"
							hover-class="btn-hover" @tap="refreshWechatUser">确定</button>
					</view>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	/**
	 * 自定义之个人信息
	 * @property {Object} detail - 个人信息
	 */
	import {
		mapMutations,
		mapActions,
		mapState,
		mapGetters
	} from 'vuex';
	import wechat from '@/shopro/wechat/wechat';
	export default {
		components: {},
		data() {
			return {
				n: require("../../../static/images/mipmap-xhdpi/ic_mine_vip_bg.webp"),
				showModal: false,
				platform: this.$platform.get(), //当前平台。
				isFixed: false,
				navBackground: {
					background: 'none'
				}
			};
		},
		mounted() {},
		props: {
			detail: {},
			scrollTop: {
				type: Number,
				default: 0
			},
			user: {
				type: Object,
				default: {}
			},
		},
		watch: {
			scrollTop(val) {
				let backgroundText = this.detail.image ? `url(${this.detail.image})` : this.detail.color;
				this.isFixed = val > 50 ? true : false;
				this.navBackground.background = val > 50 ? backgroundText : 'none';
			}
		},
		computed: {
			...mapGetters(['isLogin', 'userInfo', 'userOtherData']),
			showRefresh() {
				if (this.isLogin) {
					if (this.platform === 'wxOfficialAccount') {
						return this.userInfo.verification?.wxOfficialAccount;
					}
					if (this.platform === 'wxMiniProgram') {
						return this.userInfo.verification.wxMiniProgram;
					}
					if (this.platform === 'App') {
						return this.userInfo.verification.wxOpenPlatform;
					}
				}
				return false;
			}
		},
		methods: {
			...mapActions(['getUserInfo', 'showAuthModal']),
			handleClickCopys(content) {
				let _this = this;
				 uni.setClipboardData({
					data: String(content), // 必须字符串
					success: function() {
						uni.hideToast();   // 隐藏弹出提示
						uni.hideKeyboard(); 
						 uni.showToast({
						 	icon:"none",
							title:"复制UID成功",
							position: 'bottom'
						 }) 
					}
				});
			},
			jump(path, query) {
				this.$Router.push({
					path: path,
					query: query
				});
			},
			// 点击分享
			onShare() {
				this.$emit('onShare',);
			},
			// 同步用户信息
			async refreshWechatUser() {
				this.showModal = false;
				let token = await wechat.refresh();
				token && this.getUserInfo(token);
			},
			// 跳转门店
			goStore() {
				if (this.userOtherData.store_id) {
					uni.setStorageSync('storeId', this.userOtherData.store_id);
					this.jump('/pages/app/merchant/index', {
						storeId: this.userOtherData.store_id
					});
				} else {
					if (uni.getStorageSync('storeId')) {
						this.jump('/pages/app/merchant/index');
					} else {
						this.jump('/pages/app/merchant/list');
					}
				}
				//  #ifdef MP-WEIXIN
				this.$store.commit('subscribeMessage', 'store');
				//  #endif
			},
			// 绑定手机号
			bindMobile() {
				this.showAuthModal('bindMobile');
			},
			copyText(){
				
			},
			 
			infoJump(v){
				if(v=='systemMessages'){
					this.jump('/pages/dkdetail/systemMessages', {
						 
					});
				}else  if(v=='toUpgrade'){
					this.jump('/pages/dkdetail/toUpgrade', {
						 
					});
				}else  if(v=='toAlipay'){
					this.jump('/pages/dkdetail/toAlipay', {
						 
					});
				}
				 
				 
				 
			}
		}
	};
</script>

<style lang="scss" scoped>
	.bellFill{
		position: absolute;
		top: -100rpx;
		right: 20upx;
	}
	.f12{
		font-size: 28rpx;
	}
	.info-box-position3{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		padding: 40upx 0;
		color: #fff;
	}
	.s_j_e{
		font-weight: bold;
		font-size: 40upx;
	}
	.info-box-position0 {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		padding: 40upx 0;
		margin:0 20upx;
		border-bottom: .5px solid #f5f5f5;
	}

	.info-box-position1-1 {
		color: #E7E5FB;
		font-size: 32rpx;
		font-weight: bold;
	}

	.info-box-position1-2 {
		color: #E7E5FB;
		font-size: 28rpx;
	}
	.info-box-position2{
		background-color: #7C75F5;
		color: #fff;
		padding: 10upx 40upx;
		border-radius: 30upx;
	}


	// 更新信息
	.modal-box {

		width: 600rpx;

		.btn-hover {
			background-color: rgb(230, 230, 230);
		}

		.modal-head {
			padding-top: 48rpx;
			font-weight: 500;
			text-align: center;
			color: $u-main-color;
		}

		.modal-content {
			padding: 48rpx;
			font-size: 30rpx;
			text-align: center;
			color: $u-content-color;
		}

		.modal-bottom {
			.modal-btn {
				flex: 1;
				height: 100rpx;
				line-height: 100rpx;
				font-size: 32rpx;
				box-sizing: border-box;
				cursor: pointer;
				text-align: center;
				border-radius: 4rpx;
			}

			.cancel-btn {
				color: #666666;
			}

			.save-btn {
				color: #e9b461;
			}
		}
	}

	.sh-userinfo-box {
		position: relative;
		height: calc(var(--status-bar-height) + 456rpx);

		.head-wrap {
			    padding: 20px;
			    background: linear-gradient(90deg, #7C75F5, #E7E5FB);
			width: 100%;
			height: 100%;

			.merchant-btn {
				width: 178rpx;
				height: 64rpx;
				line-height: 64rpx;
				background: #ffffff;
				border-radius: 32rpx;
				font-size: 26rpx;
				font-weight: 500;
				color: #a8700d;
			}
		}

		.user-head {
			width: 100%;
			padding-top: 30rpx;

			.info-box {
				// padding-left: 30rpx;

				.head-img-wrap {
					position: relative;

					.refresh-btn {
						position: absolute;
						padding: 0;
						background: none;
						width: 40rpx;
						height: 40rpx;
						border-radius: 50%;
						background: #c9912c;
						top: -10rpx;
						right: 10rpx;
					}
				}

				.head-img {
					width: 94rpx;
					height: 94rpx;
					border-radius: 50%;
					background: #ccc;
					margin-right: 25rpx;
					overflow: hidden;
				}

				.user-name {
					font-size: 30rpx;
					font-weight: 500;
					color: #fff;
					line-height: 30rpx;
					// width: 180rpx;
				}
			}
.displayFlex{
	display: flex;
}
			.tag-box {
				background: rgba(0, 0, 0, 0.2);
				border-radius: 22rpx;
				margin-left: 10rpx;
				 padding: 10upx 20upx;
				text-align: center;

				.tag-img {
					width: 40rpx;
					height: 40rpx;
					display: inline-block;
					border-radius: 50%;
				}

				.tag-title {
					font-size: 20rpx;
					font-weight: 500;
					color: rgba(255, 255, 255, 1);
					line-height: 40rpx;
					padding: 0 10rpx;
				}
			}

			.code-btn {
				padding: 30rpx;

				.icon-qrcode {
					font-size: 50rpx;
					color: #fff;
				}
			}
		}

		.wallet {
			font-size: 20rpx;
			padding-left: 140rpx;

			.money {
				margin-right: 40rpx;
			}
		}
	}

	// 绑定微信公众号
	.notice-box {
		width: 750rpx;
		height: 70rpx;
		background: rgba(253, 239, 216, 1);
		padding: 0 35rpx;

		.notice-detail {
			font-size: 24rpx;

			font-weight: 400;
			color: rgba(204, 149, 59, 1);
		}

		.bindPhone {
			width: 135rpx;
			line-height: 52rpx;
			background: linear-gradient(90deg, rgba(233, 180, 97, 1), rgba(238, 204, 137, 1));
			border-radius: 26rpx;
			padding: 0;
			font-size: 26rpx;

			font-weight: 500;
			color: rgba(255, 255, 255, 1);
		}
	}

	.info-box-position {
		position: relative;
		width: 100%;
	}

	.info-box-position-absolute {
		height: 320rpx;
		// width: 700rpx;
		margin: 20px auto;
        border-radius: 40upx;
		background-image: url(../../../static/images/mipmap-xhdpi/ic_mine_vip_bg.webp);
		flex-wrap: nowrap;
		background-repeat: no-repeat;
		background-size: cover;

		// background-image: -webkit-image-set("../../");
	}

	.cu-modal {
		position: relative;
	}
	.u-flex {
		width: 100%!important;
	}
</style>
