<template>
	<view class="list-box">
		<u-sticky zIndex="100">
			<view class="bafff">

				<view class="sHeader row_s row_s_r">
					<view class="sHeaderLeft row_s">
						<image :src="logo" class="HeaderLeftImg"></image>

						<view class="sHeaderLeftTitle">
							<view class="sfontWeight"> 蛋壳严选</view>
							<view class=""> 高级会员</view>
						</view>
					</view>
					<view class="sHeaderRight">
						中午好
					</view>
				</view>
				<view class="mission-center">
					<view class="mission-center-center">
						<view class="center1  borderL1" @click="tabActive(item)" :class="current == index ?'bgcolor':''"
							v-for="(item,index) in listTabs" :key="index">
							{{item.name}}
						</view>

					</view>
				</view>
			</view>
		</u-sticky>
		<view class="sList row_s row_s_around" v-if='current==0'   v-for="(item,index) in merchList"
			:key="index">
			<view class="sListImg sic_logo">
				<image :src="item.avatar || item.image" class="sk"></image>
			</view>
			<view class="sListCenter">
				<view class="sfw ellips_line2"> {{item.nickname}}</view>
				<view class="row_s row_s_r ptb">
					<view class="marginR"> 粉丝数：{{item.fans}} </view>
					<view class=""> 橱窗销量：- </view>
				</view>
				<view class="sfw"> 联系方式：：{{item.mobile}} </view>
			</view>
			<view class="bgcolor looks">
				查看
			</view>
		</view>
		<view class="sList row_s row_s_around" v-if='current==1' @click="navgetTo(itemOrder.id)"
			v-for="(itemOrder,index) in merchList" :key="index">
			<view class="sListImg sic_logo">
				<image :src=" itemOrder.image" class="sk"></image>
			</view>
			<view class="sListCenter">
				<view class="sfw ellips_line2"> {{itemOrder.goods_name}}</view>
				<view class="row_s row_s_r ptb">
					<view class="marginR"> 编号：{{itemOrder.order_sn}} </view>
					<view class=""> </view>
				</view>
				<view class="sfw"> 下单时间：：{{itemOrder.created_time}} </view>
			</view>
			<view class="copyCode" @click.stop="handleClickCopys(itemOrder.order_sn)">
				复制编号
			</view>
		</view>
		<view class="sList row_s row_s_around" v-if='current==2' @click="navgetTo(itemOrders.id)"
			v-for="(itemOrders,index) in merchList" :key="index">
			<view class="sListImg sic_logo">
				<image :src=" itemOrders.image" class="sk"></image>
			</view>
			<view class="sListCenter">
				<view class="sfw ellips_line2"> {{itemOrders.goods_name}}</view>
				<view class="row_s row_s_r ptb">
					<view class="marginR"> 编号：{{itemOrders.order_sn}} </view>
					<view class=""> </view>
				</view>
				<view class="sfw"> 下单时间：：{{itemOrders.created_time}} </view>
			</view>
			<view class="copyCode" @click.stop="handleClickCopys(itemOrders.order_sn)">
				复制编号
			</view>
		</view>


		<u-toast ref="uToastDetails"></u-toast>
	</view>
</template>

<script>
	import {
		mapMutations,
		mapActions,
		mapState,
		mapGetters
	} from 'vuex';
	let systemInfo = uni.getSystemInfoSync();
	export default {
		components: {

		},
		data() {
			return {
				merchList: [],
				listTabs: [{
					name: '达人列表',
					id: 0
				}, {
					name: '订单列表',
					id: 1
				}, {
					name: '积分订单',
					id: 2
				}],
				current: 0,
				logo: require('../../static/images/mipmap-xhdpi/ic_logo.jpg'),


			};
		},
		// 触底加载更多
		onReachBottom() {

		},
		onLoad() {
			this.getmerchantMyUsersList()
		},
		computed: {
			...mapGetters(['userInfo', 'agentInfo'])
		},
		methods: {
			...mapActions(['getAgent', 'getUserInfo']),
			//达人列表  merchantMyUsers
			handleClickCopys(content) {
				let _this = this;
				uni.setClipboardData({
					data: String(content), // 必须字符串
					success: function() {
						uni.hideToast(); // 隐藏弹出提示
						uni.hideKeyboard();
						_this.$refs.uToastDetails.show({
							title: "复制成功",
							position: 'bottom'

						})
					}
				});
			},

			getmerchantMyUsersList() {
				let that = this;
				that.loadStatus = 'loadmore';
				that.$http('merchantMyUsers.merchantMyUsers', {
					page: 1,
					rows: 10,
					sort: 'desc',
					order: "id"
				}).then(res => {
					that.merchList = res.data.data;
					console.log("=======达人列表=====>", res.data.data)
				});
			},

			//任务订单列表 taskMerchantOrders
			getTaskMerchantOrders(type) {
				let that = this;
				that.loadStatus = 'loadmore';
				that.$http('merchantMyUsers.taskMerchantOrders', {
					page: 1,
					rows: 10,
					sort: 'desc',
					order: "id",
					status: "",
					type

				}).then(res => {
					that.merchList = res.data.data;
					console.log("=======达人列表=====>", res.data.data)
				});
			},
			//任务订单审核列表 taskVerify

			gettaskVerify() {
				let that = this;
				that.loadStatus = 'loadmore';
				that.$http('merchantMyUsers.taskVerify', {
					page: 1,
					rows: 10,
					sort: 'desc',
					result: "1"
				}).then(res => {
					that.merchList = res.data.data;
					console.log("=======达人列表=====>", res.data.data)
				});
			},

		 

			tabActive(item) {
				this.current = item.id;
				console.log("=======item.id=====>", item.id)
				if (item.id == 0) {
					this.getmerchantMyUsersList()
				}
				// else {
				// 	uni.showToast({
				// 		icon:"none",
				// 		title:"努力升级中..."
				// 	})
				// }
				if (item.id == 1) {
					this.getTaskMerchantOrders(0)
				} else if (item.id == 2) {
					this.getTaskMerchantOrders(1)
				}



				// getmerchantOrderDetail()
			},
			navgetTo(id) {
				uni.navigateTo({
					url: '/pages/dkdetail/merchantDetails?id='+id
				})
			}
		}
	};
</script>

<style lang="scss" scoped>
	.bafff {
		background-color: #fff;
		padding-bottom: 40upx;
	}

	.sList {
		padding: 20upx 0;
		border-bottom: 20upx solid #f5f5f5;
	}

	.ptb {
		padding: 10upx 0;
	}

	.sfw {
		font-weight: bold;
	}

	.list-box {
		min-height: 100%;
		background-color: white;
	}

	.HeaderLeftImg {
		width: 100upx;
		height: 100upx;
		margin-right: 40upx;
	}

	.row_s_around {
		justify-content: space-around;
	}

	.row_s_r {
		justify-content: space-between;
	}

	.row_s {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.marginR {
		margin-right: 10upx;
	}

	.sfontWeight {
		font-weight: bold;
		font-size: 40upx;
		margin-bottom: 20upx;
	}

	.sHeader {
		padding: 0 40upx;
		height: 300upx;

	}

	.mission-center-center {
		width: 500upx;
		height: 100upx;
		margin: 0 auto;
		background-color: #f5f5f5;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		border-radius: 50upx;

	}

	.looks {
		padding: 10upx 30upx;
		border-radius: 10upx;
	}

	.center1 {
		width: 250upx;
		height: 100upx;
		text-align: center;
		line-height: 100upx;
		color: #999;
		font-size: 30upx;

	}

	.mission-content-swiper {
		margin-top: 40upx;
	}

	.copyCode {
		color: #7C75F5;
	}

	.bgcolor {
		background-color: #7C75F5;
		color: #fff;

	}

	.borderL1 {
		border-radius: 50upx;
	}

	.mission-list {
		width: 100%;
		position: absolute;
		z-index: 88;
		background-color: #fff;
	}

	.mission-list-title {
		font-size: 16px;
		padding: 20upx;
	}

	.mission-content {
		// height: 332upx;
		padding: 20px;
		background: linear-gradient(90deg, #F3E5F6, #E7E5FB);

		.mission-center {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-around;
			font-size: 18px;
			margin-top: 40upx;

			position: relative;

			.mission-t {
				color: #333;
			}
		}

		.c1 {
			color: #7C75F5;
		}

		.c2 {
			color: #333;
		}



		.mission-t1,
		.mission-t2 {
			color: #7C75F5;
		}


	}

	.mission-c {

		display: flex;
		flex-direction: row;

		.mission-l {
			width: 100%;
			position: relative;
		}



		.mission-r {
			width: 20%;
			height: 100upx;
			line-height: 100upx;
			font-size: 16px;
			background-color: #E7E5FB;
			border: none;
			outline: none;
			color: #7C75F5;

		}
	}

	.sListImg {
		width: 160upx;
		height: 160upx;
		border-radius: 80upx;
		overflow: hidden;
	}

	.sic_logo .sk {
		width: 100%;
		height: 100%;
	}
</style>
