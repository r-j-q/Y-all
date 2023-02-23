<template>
	<view class="bacAlipay">
		<u-form :model="form" ref="uForm">
			<u-form-item label="真实姓名" label-width='200upx' :label-style="labelStyle">
				<u-input v-model="form.name" placeholder="请输入真实姓名" />
			</u-form-item>
			<u-form-item label="支付宝账号" label-width='200upx' :label-style="labelStyle">
				<u-input v-model="form.alipyNum" placeholder="请输入支付宝账号" />
			</u-form-item>

		</u-form>
		<view @click="submit" class="submitAlipay">提交</view>
		<u-toast ref="uToast"></u-toast>
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
				form: {
					name: '',
					alipyNum: ''
				},
				labelStyle: {
					fontWeight: "bold",
					fontSize: "14px"
				}
			};
		},
		// 触底加载更多
		onReachBottom() {

		},
		onLoad() {

		},

		methods: {
			getAddWithdrawAccountEdit() {
				let that = this
				that.$http('ali.addWithdrawAccountEdit', {
			    real_name:that.form.name,
			    account:that.form.alipyNum,
				type:0
				}).then(res => {
					if (res.code==1) {
						 uni.navigateTo({
						 	url: `/pages/dkdetail/toAlipay`
						 })
					}
			         console.log("=====11111======>", res)
					 
				});
			},
			submit() {
				if (!this.form.name) {
					this.$refs.uToast.show({
						title: "请输入真实姓名",
						position: 'bottom'

					})

					return;
				}
				if (!this.form.alipyNum) {
                    this.$refs.uToast.show({
						title: "请输入账号",
						position: 'bottom'

					})
					return;
				}
             
              this.getAddWithdrawAccountEdit()


				 
			}
		}
	};
</script>

<style scoped>
	.bacAlipay {
		min-height: 100%;
		background-color: #fff;
		padding: 50upx 20upx;
	}

	.submitAlipay {

		width: 70%;
		margin: 0 auto;
		padding: 28upx 0;
		text-align: center;
		margin-top: 100upx;
		background-color: #7C75F5;
		color: #fff;
		border-radius: 16upx;
	}
</style>
