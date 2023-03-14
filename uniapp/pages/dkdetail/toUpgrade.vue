<template>
	<view class="s_upgrade">
		<view class="s_upgrade_monly">
			<view class="s_upgrade_text">
				钻石会员
			</view>
			<view class="">
				<text>¥</text>
				<text class="s_upgrade_text_num">{{fee}}</text>
			</view>
		</view>
		<view class="s_upgrade_94 s_upgrade_img">
			<image :src="vipsType" mode=""></image>
		</view>


		<view class="s_upgrade_94 s_sw s_agree_xieyi">
			<view class="">
				是否同意 <text class="s_upgrade_xy"> &laquo;服务协议 &raquo;</text>
			</view>
			<view class="">
				<u-switch v-model="checked" active-color="#7C75F5" inactive-color="#eee"></u-switch>
			</view>
		</view>
		<view class="s_upgrade_94 s_sw backgroundTopBottom" @click="handleToPay(item)" v-for="(item,index) in payList"
			:key="index">
			<view class="rowstyle">
				<image :src="item.name" class="zhifubao"></image>
				<text class="">{{item.title}}</text>
			</view>
			<view class="">
				<u-radio-group v-model="value" @change="radioGroupChange">
					<u-radio @change="radioChange" name="orange" :active-color="coutnType==item.id?'#7C75F5':'#f5f5f5'">
					</u-radio>
				</u-radio-group>
			</view>
		</view>
		<view class="s_upgrade_94 s_sw">
			<button class="s_pay" :disabled="disabled" @click.stop="toPay">立即支付</button>
		</view>

	</view>
</template>

<script>
	import {
		mapMutations,
		mapActions,
		mapState
	} from 'vuex';
	let systemInfo = uni.getSystemInfoSync();
	export default {
		components: {

		},
		data() {
			return {
				disabled:false,
				coutnType: 1,
				fee: '',
				checked: false,
				value: 'orange',
				pay_type: 'alipay',
				payList: [{
						title: "支付宝支付",
						name: require('../../static/images/mipmap-xhdpi/ic_alipay.webp'),
						id: 1,
						type: "alipay"
					},
					// {
					// 	title: "微信支付",
					// 	name: require('../../static/images/mipmap-xhdpi/ic_launcher.webp'),
					// 	id: 2,
					// 	type: "wxpay"
					// },
					// {
					// 	title: "银行卡支付",
					// 	name: require('../../static/images/mipmap-xhdpi/ic_login_icon_1.webp'),
					// 	id: 3,
					// 	type: "bank"
					// }
				],
				zhifubao: require('../../static/images/mipmap-xhdpi/ic_alipay.webp'),
				vipsType: require('../../static/images/vip/vipsType.png'),

			};
		},
		// 触底加载更多
		onReachBottom() {

		},
		onLoad() {
			this.addDkpayUpgradeInfo()
		},
		methods: {
			handleToPay(item) {
				this.pay_type = this.payList.filter((its) => its.id == item.id)[0].type
				this.coutnType = item.id;
			},
			toPay() {
				let that = this;
				if (!this.checked) {
					uni.showToast({
						icon: "none",
						title: "请同意协议"
					})
					return
				}
               this.disabled =true
				that.$http('upgrade.dkpayUpgrade', {
					pay_type: this.pay_type, //alipay支付宝，wxpay微信，bank银联
				}).then(res => {
					if (res.code == 1) {
						uni.showToast({
							icon:"none",
							title:"升级成功"
						})
						this.disabled =false
						console.log("=====列表======>", res)
					}


				});
			},
			addDkpayUpgradeInfo() {
				let that = this
				that.$http('upgrade.dkpayUpgradeInfo', {

				}).then(res => {
					if (res.code == 1) {
						that.fee = Number(res.data.fee).toFixed(2);
					}


				});
			},
			radioGroupChange(e) {

			},
			radioChange(e) {
				// alert(e)
			},

		}
	};
</script>

<style lang="scss" scoped>
	.s_upgrade {
		padding-top: 20upx;
		min-height: 100%;
		background-color: #fff;
	}

	.bgfff {
		width: 100%;
		background-color: #fff;

	}

	.s_upgrade_monly {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		border: 1px solid #7C75F5;
		width: 94%;
		margin: 0 auto;
		padding: 20upx;
		border-radius: 20upx;
		margin-bottom: 40upx;

	}

	.s_upgrade_text {
		font-size: 40upx;
		font-weight: bold;
	}

	.s_upgrade_xy {
		color: #7C75F5;
	}

	.s_upgrade_text_num {
		font-size: 50upx;
		font-weight: bold;
	}

	.s_upgrade_94 {
		width: 94%;
		margin: 0 auto;
	}

	.rowstyle {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.s_sw {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 30upx 20upx;
	}

	.s_upgrade_img {
		height: 400upx;
		width: 100%;
	}

	.s_upgrade_img image {
		width: 100%;
		height: 100%;
	}

	.backgroundTopBottom {
		border: 20upx solid #f5f5f5;
		border-radius: 12upx;
		margin-bottom: 20upx;
	}

	.s_pay {
		color: #fff;
		background-color: #7C75F5;
		width: 100%;
		margin-top: 40upx;
		padding: 20upx 0;
		border-radius: 50upx;
		text-align: center;
		font-size: 28upx;
		font-weight: bold;
	}

	.zhifubao {
		width: 60upx;
		height: 60upx;
		margin-right: 20upx;
	}

	.s_agree_xieyi {
		padding: 50upx 20upx;
	}
</style>
