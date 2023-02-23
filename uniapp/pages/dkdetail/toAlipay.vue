<template>
	<view class="to_tixian">
		<view class="to_tixian_banner s_c_75 ">
			转出到支付宝
		</view>
		<view class="s_upgrade_94">
			<view class="to_tixian_title">
				到账支付宝
			</view>
			<view v-if="showUserAlipay" class="to_tixian_add" @click="jumpUserAlipay">
				<image :src="ic_add_bank" mode=""></image>
			</view>
			<view v-if="!showUserAlipay && alipayList.length>0" class="to_tixian_alipay" @click="lookAlipay">
				<view class="rowstyle_row">
					<image :src="zhifubao" class="zhifubaoStyle"></image>
					<view class="zhifubaoStyleName"> {{alipayList[0].real_name}} </view>
					<view class=""> {{alipayList[0].account}} </view>
				</view>
				<view class="zhifubaoStyleNameLiji">
					立即到账
				</view>
			</view>
			<view class="to_tixian_title">
				提现金额
			</view>
			<view class="rowstyle border_b_style">
				<view class="">
					¥
				</view>
				<u-input :height="heightInput" :custom-style="customStyle" v-model="amount" type="number"
					placeholder="请输入提现金额" />

			</view>
			<view class="to_tixian_title rowstyle">
				<view class="to_tixian_title_left">
					可用金额 ¥{{userInfoMoney}}
				</view>
				<view class="to_tixian_title_right" @click="availableAmountAdd">
					全部提现
				</view>

			</view>
			<button :disabled="isDisabled" class="rowstyle_tixian" @click="availableAmountPay">
				提现
			</button>
		</view>


		<u-popup mode="bottom" v-model="bottomShow" length="50%">
			<view class="content-v-model-nump">
				<view class="content-v-model-num">
					选择提现账号
				</view>


				<scroll-view scroll-y="true" style="height: 740rpx;margin-top: 80upx;">
					<view class="content-v-model">
						<view v-for="(item,index) in alipayList" :key="index" @click="deleteAlipay(item,index)">
							<view class="to_tixian_alipay to_tixian_alipay_row">
								<view class="">
									<view class="rowstyle_row">
										<image :src="zhifubao" class="zhifubaoStyle"></image>
										<view class="zhifubaoStyleName"> {{item.real_name}} </view>
										<view class=""> {{item.account}} </view>
									</view>
									<view class="zhifubaoStyleNameLiji ccff">
										立即到账
									</view>
								</view>
								<view class="">
									<u-icon name="trash" size="40rpx" color="#333"></u-icon>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
				<view class="addAlipayNum rowstyle_row" @click="jumpUserAlipay">
					<view class="addAlipayNum0">
						<image :src="ic_add_bank" mode=""></image>
					</view>

					<view class="">
						添加账号
					</view>
				</view>
			</view>

		</u-popup>
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
		computed: {
			...mapGetters(['userInfo', 'agentInfo'])
		},
		data() {
			return {
				isDisabled: false,
				alipayList: [],
				name: "",
				alipyNum: "",
				userInfoMoney: '',
				availableAmount: 100,
				amount: 0,
				bottomShow: false, //底部弹窗
				showUserAlipay: true, //是否显示添加支付宝按钮
				customStyle: {
					fontSize: "30px",
					textIndent: "10px"
				},
				heightInput: 100,
				zhifubao: require('../../static/images/mipmap-xhdpi/ic_alipay.webp'),
				ic_add_bank: require('../../static/images/mipmap-xhdpi/ic_add_bank.webp')
			};
		},
		// 触底加载更多
		onShow() {
			this.getuserInfo()
			this.getAddWithdrawAccounts()
		},
		onLoad(option) {
			// console.log("alipayList==0=", this.alipayList)
			// if (option.name) {
			//              let name = JSON.parse(decodeURIComponent(option.name));
			// 	let alipyNum = JSON.parse(decodeURIComponent(option.alipyNum));
			// 	this.name = name;
			// 	this.alipyNum = alipyNum;
			// 	let thisalipayList=this.alipayList.concat([{
			// 		name: name,
			// 		alipyNum: alipyNum
			// 	}])
			// 	this.alipayList = thisalipayList
			// 	this.showUserAlipay = false

			// }
			// console.log("alipayList==1=", this.alipayList)
			// console.log("alipayList==2=", this.name)
		},

		methods: {
			getAddWithdrawAccounts() {
				let that = this
				that.$http('ali.addWithdrawAccounts', {

					type: 0,
					rows: 50
				}).then(res => {
					if (res.code == 1) {
						that.alipayList = res.data.data;
						if (res.data.data.length > 0) {
							that.showUserAlipay = false
						}

						console.log("=====列表======>", res)
					}


				});
			},
			deleteAli(id) {
				let that = this
				that.$http('ali.addWithdrawAccountDel', {

					id
				}).then(res => {
					if (res.code == 1) {
						uni.showToast({
							icon: "none",
							title: "删除成功"
						})
						that.getAddWithdrawAccounts()


					}


				});
			},
			getaddWithdraw() {

				let that = this
				that.isDisabled = true
				that.$http('ali.addWithdraw', {
					account_id: that.userInfo.id,
					amount: that.amount
				}).then(res => {
					if (res.code == 1) {
						that.getuserInfo()
						uni.showToast({
							icon: "none",
							title: "提现成功"
						})
						that.isDisabled = false
					}
					setTimeout(() => {
						that.isDisabled = false
					}, 3000)


				});
			},
			getuserInfo() {
				let that = this
				that.$http('ali.userInfo', {}).then(res => {
					if (res.code == 1) {
                  	that.userInfoMoney = res.data.money

					}


				});
			},

			// 全部提现
			availableAmountAdd() {
				this.amount = this.userInfoMoney;
			},
			// 提现
			availableAmountPay() {
				if (Number(this.userInfo.money) < Number(this.amount) || Number(this.userInfo.money) == 0) {
					uni.showToast({
						icon: "none",
						title: "可用余额不足"
					})
					return
				}
				this.getaddWithdraw()
				console.log(this.amount)
			},
			jumpUserAlipay() {
				this.bottomShow = false
				uni.navigateTo({
					url: "/pages/dkdetail/userAlipay"
				})
			},
			// 查看账号
			lookAlipay() {
				this.bottomShow = !this.bottomShow
			},
			// 删除支付宝账号
			deleteAlipay(item, index) {
				this.deleteAli(item.id)
				console.log("----->", item, index)
			}
		}
	};
</script>

<style lang="scss" scoped>
	.to_tixian {
		min-height: 100%;
		background-color: #fff;
	}

	.zhifubaoStyle {
		width: 60upx;
		height: 60upx;
	}

	.zhifubaoStyleName {
		margin: 0 40upx;
	}

	.zhifubaoStyleNameLiji {
		margin-left: 100upx;
	}

	.rowstyle_row {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.to_tixian_banner {
		text-align: center;
		font-size: 36upx;
		font-weight: bold;
		padding: 40upx 0 30upx 0;
		background-color: #f5f5f5;
		border-bottom: 4upx solid #7C75F5;
	}

	.rowstyle_tixian {
		width: 40%;
		margin: 0 auto;
		// padding: 30upx 0;
		margin-top: 100upx;
		text-align: center;
		border-radius: 50upx;
		background-color: #7C75F5;
		color: #fff;
	}

	.s_upgrade_text {
		font-size: 40upx;
		font-weight: bold;

	}

	.to_tixian_title {
		font-size: 28upx;
		font-weight: bold;
		padding: 30upx 0;
	}

	.to_tixian_title_left {
		font-size: 28upx;
		color: #303133;
	}

	.to_tixian_title_right {
		margin-left: 60upx;
		font-size: 28upx;
		color: #7C75F5;
	}

	.to_tixian_add {
		width: 100%;
		padding: 30upx 0;
		text-align: center;
		background-color: #ebebeb;


	}

	.to_tixian_add image {
		width: 60px;
		height: 60px;
	}

	.s_c_75 {
		color: #7C75F5;
	}

	.border_b_style {
		border-bottom: 1px solid #ebebeb;
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

	.to_tixian_alipay {
		padding-left: 40upx;
		font-size: 28upx;
	}

	.addAlipayNum {
		background-color: #fff;
		padding: 30upx 0;
		position: absolute;
		bottom: 0;
		width: 100%;
		padding-left: 80upx;
	}

	.addAlipayNum0 {
		width: 60upx;
		height: 60upx
	}

	.addAlipayNum0 image {
		width: 50upx;
		height: 50upx;
	}

	.content-v-model-nump {
		position: relative;
		border-top-left-radius: 20upx !important;
		border-top-right-radius: 20upx !important;
		overflow: hidden;
	}

	.content-v-model-num {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		font-size: 28upx;
		font-weight: bold;
		text-align: center;
		padding: 30upx 0;
		z-index: 100;
		background-color: #fff;
	}

	.content-v-model {
		padding: 50upx;
	}

	.ccff {
		color: #ccc;
	}

	.to_tixian_alipay_row {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
</style>
