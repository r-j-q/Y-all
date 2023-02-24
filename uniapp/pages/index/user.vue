<!-- 个人中心 -->
<template>
	<view class="personal-wrap">
		<!-- 个人信息卡片 -->
		<userinfo-card v-if="userHeadData && userHeadData.style" :user="userA" :scrollTop="scrollTop" :detail="userHeadData"
			@onShare="onShare"></userinfo-card>
		<view class="vip_center">

		</view>
		<!-- 自定义模块 -->
		<!-- <view v-for="(item, index) in userTemplate" :key="item.id"> -->
		<!-- 轮播 -->
		<!-- 	<sh-banner
				v-if="item.type === 'banner' && index !== 0"
				:Px="item.content.x"
				:Py="item.content.y"
				:borderRadius="item.content.radius"
				:height="item.content.height"
				:list="item.content.list"
			></sh-banner> -->
		<!-- 滑动宫格 -->
		<!-- <sh-grid-swiper v-if="item.type === 'menu'" :list="item.content.list" :oneRowNum="item.content.style"></sh-grid-swiper> -->
		<!-- 广告魔方 -->
		<!-- <sh-adv v-if="item.type === 'adv'" :detail="item.content"></sh-adv> -->
		<!-- 推荐商品 -->
		<!-- <sh-hot-goods v-if="item.type === 'goods-list' || item.type === 'goods-group'" :detail="item.content"></sh-hot-goods> -->
		<!-- 富文本 -->
		<!-- <sh-richtext v-if="item.type === 'rich-text'" :richId="item.content.id"></sh-richtext> -->
		<!-- 功能列表 -->

		<!-- <sh-cell v-if="item.type === 'nav-list'" :list="item.content.list"></sh-cell> -->
		<!-- 九宫格列表 -->
		<!-- <sh-grid v-if="item.type === 'grid-list'" :list="item.content.list"></sh-grid> -->
		<!-- 钱包 -->
		<!-- <sh-wallet v-if="item.type === 'wallet-card'"></sh-wallet> -->
		<!-- 订单卡片 -->
		<!-- <sh-order-card v-if="item.type === 'order-card'"></sh-order-card> -->
		<!-- </view> -->

		<!-- <sh-cell   :list="itemContentList"></sh-cell> -->
		<view class="order_dingdang mt50">
			<view class="order_dingdang_left1" @click="handleDongjie(userA.freeze_balance)">
				<view class="order_dingdang_weit">
					{{userA.freeze_balance}}
				</view>
				<view class="order_dingdang_left_text1">
					冻结金额
				</view>
			</view>
			<view class="order_dingdang_right1" @click="jumpYuanBao(userA.points)">
				<view class="order_dingdang_weit">
					 {{userA.points}}
				</view>
				<view class="order_dingdang_right_text1">
					元宝
				</view>
			</view>
		</view>

		<!-- <view class="order_dingdang">
			<view class="order_dingdang_left">
				 
				<view class="order_dingdang_left_text">
				 积分订单	
				</view>
			</view>
			<view class="order_dingdang_right">
				 
				<view class="order_dingdang_right_text">
				 任务订单	
				</view>
			</view>
		</view> -->
		<sh-order-card></sh-order-card>
		<!-- <sh-grid-sh :list="itemContentList2"></sh-grid-sh> -->
		<view class="lineStyle">

		</view>
		<sh-grid :list="itemContentList" @xuyYuanDuiHuan="xuyYuanDuiHuan"></sh-grid>
		<!-- copyright -->
		<!-- <view class="copyright-box u-flex-col u-row-center u-col-center u-p-t-80 u-p-b-50" v-if="initShop.copyright">
			<view class="copyright-text">{{ initShop.copyright[0] }}</view>
			<view class="copyright-text">{{ initShop.copyright[1] }}</view>
		</view> -->

		<!-- #ifdef H5 -->
		<view class="tabbar-hack" style="height: 120rpx; width:100%;"></view>
		<!-- #endif -->
		<!-- 关注弹窗 -->
		<!-- <shopro-float-btn></shopro-float-btn> -->
		<!-- 登录提示 -->
		<!-- <shopro-auth-modal></shopro-auth-modal> -->
		<!-- 分享组件 -->
		<shopro-share v-model="showShare" posterType="user"></shopro-share>
		<!-- <shopro-tabbar></shopro-tabbar> -->


		<u-popup :mask="true" :safeAreaInsetTop="false" closeIconPos="top-right" borderRadius="20" v-model="shareUrl"
			mode="bottom">
			<view class="share0">
				<view class="shareZhuan1">
					<!-- <view class="">分享赚 </view> -->
					<view class="shareZhuanColse1">
						<u-icon @click="closeShare" color="#ccc" name="close" size="20px"></u-icon>
					</view>
				</view>
				<view class="shareDui1">
					<view class="">
						激活码
					</view>
					<u-input placeholder="请输入激活码" :border="true" clearable v-model="code" class="customStyle1">
					</u-input>

				</view>
				<view class="shareDuiyongyou1 colora8">
					<u-switch v-model="checked" active-color="#7C75F5"   inactive-color="#eee"></u-switch>
				   <text class="color-3">是否同意</text> «服务协议»
				</view>
				<view class="share10">
					<view class="shareMonly1">
						激活使用
					</view>

				</view>
			</view>
		</u-popup>
		
	 
			<ExDrawer :showLeftIcon="false" :userInfoShow="userInfoShow"/>
		 
		
	</view>
</template>

<script>
	import ExDrawer from '@/components/dk-drawer/ex-drawer.vue';
	import shBanner from './components/sh-banner.vue';
	import shGridSwiper from './components/sh-grid-swiper.vue';
	import shAdv from './components/sh-adv.vue';
	import shRichtext from './components/sh-richtext.vue';
	import shCell from './components/sh-cell.vue';
	import shGrid from './components/sh-grid.vue';
	import shGridSh from './components/sh-grid-sh.vue';
	import shOrderCard from './components/sh-order-card.vue';
	import shWallet from './components/sh-wallet.vue';
	import shHotGoods from './components/sh-hot-goods.vue';

	import userinfoCard from './user/userinfo-card.vue';

	import {
		mapMutations,
		mapActions,
		mapState,
		mapGetters
	} from 'vuex';

	import share from '@/shopro/share';

	export default {
		components: {
			shBanner,
			shGridSwiper,
			shAdv,
			shRichtext,
			shCell,
			shGrid,
			shGridSh,
			shWallet,
			shOrderCard,
			shHotGoods,
			userinfoCard,
			ExDrawer
		},
		data() {
			return {
				userInfoShow:0,
				 userA:{},
				checked:false,
				code:"",
				shareUrl: false, //兑换
				scrollTop: 0,
				showShare: false,
				enable: false, //是否开启吸顶。
				itemContentList2: [{
						name: "待付款",
						image: require("../../static/images/mine/d1.png")
					},
					{
						name: "待发货",
						image: require("../../static/images/mine/d2.png")
					},
					{
						name: "待收货",
						image: require("../../static/images/mine/d3.png")
					},
					{
						name: "退换货",
						image: require("../../static/images/mine/d4.png")
					}
				],
				itemContentList: [{
						name: "课程中心",
						path: "/pages/me/kczx",
						image: require("../../static/images/mine/m7.png")
					},
					{
						name: "考试中心",
						path: "/pages/me/kszx",
						image: require("../../static/images/mine/m5.png")
					},
					{
						name: "推广中心",
						path: "/pages/me/tgzx",
						image: require("../../static/images/mine/m8.png")
					},
					{
						name: "订单",
						path: "/pages/me/ddzx",
						image: require("../../static/images/mine/m2.png")
					},
					{
						name: "个人信息",
						path: "/pages/me/grxx",
						image: require("../../static/images/mine/m4.png")
					},
					{
						name: "学员兑换",
						path: "/pages/me/xydh",
						image: require("../../static/images/mine/m3.png")
					},
					{
						name: "联系客服",
						path: "/pages/me/lxkf",
						image: require("../../static/images/mine/m6.png")
					},

					{
						name: "收藏",
						path: "/pages/me/sc",
						image: require("../../static/images/mine/m9.png")
					},
				]
			};
		},
		computed: {
			...mapGetters(['initShop', 'userTemplate', 'isLogin', 'userInfo', 'authType']),
			userHeadData() {
				if (this.userTemplate?.length) {
					return this.userTemplate[0].content;
				}
			}
		},
		// 下拉刷新
		onPullDownRefresh() {
			this.init();
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},

		onShow() {
			if (this.isLogin) {
				this.getuserInfo()
				this.init();
				this.getUserData();
				 
			}
			this.enable = true;
		},

		methods: {
			...mapActions(['getUserInfo', 'showAuthModal', 'getUserData']),
			getuserInfo() {
				let that = this
				that.$http('ali.userInfo', {}).then(res => {
					if (res.code == 1) {
						that.userA=  res.data
			       
					 
			
					}
			
			
				});
			},
			// 关闭分享
			closeShare() {
				this.shareUrl = false;
			},
			xuyYuanDuiHuan(item) {
				if(item.name=="学员兑换"){
					this.shareUrl = true
				}
				if(item.name=="个人信息"){
					this.userInfoShow ++
				}
				 
			},
			handleDongjie(v) {

				uni.navigateTo({
					url: "/pages/me/dongjie?v="+v
				})
			},
			jumpYuanBao(v) {
				uni.navigateTo({
					url: "/pages/me/yuanbao?v="+v
				})
			},

			onShare() {
				this.showShare = true;
				uni.hideTabBar();
			},
			// 初始化
			init() {
				this.getUserInfo()
					.then(res => {
						uni.stopPullDownRefresh();
					})
					.catch(e => {
						uni.stopPullDownRefresh();
					});
			}
		}
	};
</script>

<style lang="scss" scoped>
	.mt50 {
		margin-top: 180rpx;
	}

	.lineStyle {
		width: 674rpx;
		height: 2rpx;
		background: #000000;
		opacity: 0.05;
		margin: 50rpx auto;
	}

	.personal-wrap {
		min-height: 100%;
		background-color: #fff;
	}

	.order_dingdang_weit {
		font-size: 50upx;
		color: #333;
		font-weight: bold;
	}

	.order_dingdang {
		background-color: #fff;
		padding: 40upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.order_dingdang_left1 {
		width: 50%;
		margin-right: 10upx;
		height: 140upx;
		border-radius: 8upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

	}

	.order_dingdang_right1 {
		width: 50%;
		height: 140upx;
		margin-left: 10upx;
		border-radius: 8upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

	}

	.order_dingdang_left {
		width: 50%;
		margin-right: 10upx;
		height: 140upx;
		border-radius: 8upx;
		background-image: url('../../static/images/mipmap-xhdpi/ic_jifenduihuan.webp');
		background-size: cover;
		background-repeat: no-repeat;
	}

	.order_dingdang_right {
		width: 50%;
		height: 140upx;
		margin-left: 10upx;
		border-radius: 8upx;
		background-image: url('../../static/images/mipmap-xhdpi/ic_renwudating.webp');
		background-size: cover;
		background-repeat: no-repeat;
	}

	.order_dingdang_left_text1 {
		font-size: 28upx;
	}

	.order_dingdang_right_text1 {
		font-size: 28upx;
	}

	.order_dingdang_left_text {
		font-weight: bold;
		font-size: 36upx;
		margin: 50upx 20upx;
	}

	.order_dingdang_right_text {
		font-weight: bold;
		font-size: 36upx;
		margin: 50upx 20upx;
	}

	.copyright-box {
		.copyright-text {
			font-size: 22rpx;
			font-weight: 500;
			color: #c4c4c4;
		}
	}

	.u-flex {
		width: 92% !important;
		background: #FAFCFD;
		margin: 0 auto;
	}

	.shareZhuan1 {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		position: relative;
		font-size: 34upx;
		font-weight: bold;
		padding: 30upx 0;
	}

	.shareZhuanColse1 {
		position: absolute;
		right: 10px;

	}

	.shareDui1 {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 70%;
		margin: 0 auto;
		font-size: 32upx;
	}

	.customStyle1 {
		width: 100upx;
		margin: 0 16upx;
	}

	.shareDuiyongyou1 {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-top: 60upx;
	}

	.shareMonly1 {
		width: 90%;
		background-color: #7C75F5;
		color: #fff;
		margin: 40upx auto;
		padding: 30upx 0;
		text-align: center;
		border-radius: 100upx;
		font-size: 28upx;
	}
	.color-3{
		color: #000;
		margin: 0 20upx;
	}
</style>
