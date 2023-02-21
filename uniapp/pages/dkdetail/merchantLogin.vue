<template>
	<view class="bacAlipay">
		<u-form :model="form" ref="uForm">
			<u-form-item label="账号" label-width='200upx' :label-style="labelStyle">
				<u-input v-model="form.name" placeholder="请输入手机号" />
			</u-form-item>
			<u-form-item :label-style="labelStyle" label="验证码" label-width="150">
				<u-input placeholder="请输入验证码" v-model="form.code" type="text"></u-input>
				<view class="" slot="right" @click="getSmsCode('mobilelogin')">
					<button class="btn" :disabled="codeBtn.codeStatus" type="primary"
						size="default">{{codeBtn.codeText}}</button>
				</view>
			</u-form-item>

		</u-form>
		<view @click="submit" class="submitAlipay">提交</view>
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
				//验证码按钮
				codeBtn: {
					codeTime: 60,
					codeText: "获取验证码",
					codeStatus: false
				},
				form: {
					name: '',
					code: ''
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
// 获取短信验证码
			getSmsCode(type) {
				const that = this;
				if (!that.form.name) {
				
					uni.showToast({
						icon: 'none',
						title: "请输入手机号"
					})
					return
				}
				  	that.$http(
						'common.smsSend', {
							mobile: that.form.name,
							event: type
						},
						'获取验证码中...'
					).then(res => {
						if (res.code === 1) {
							that.getPhonecode();
							that.$u.toast('验证码已发送，请注意查收短信');
						} else {
							that.$u.toast(res.msg);
						}
					});
				 
			},
			getPhonecode() {
				console.log("ppppp", this.form.name)
				 
				if (this.form.name && !this.codeBtn.codeStatus) {
					this.codeBtn.codeStatus = true
					let timerId = setInterval(() => {
						let codetime = this.codeBtn.codeTime
						codetime--
						this.codeBtn.codeTime = codetime
						this.codeBtn.codeText = `重新获取（${codetime}）`
						if (codetime < 1) {
							clearInterval(timerId)
							this.codeBtn.codeText = "重新获取"
							this.codeBtn.codeTime = 60
							this.codeBtn.codeStatus = false
						}
					}, 1000)
				}
			},


			submit() {
				 if (!this.form.name) {
				 
				 	uni.showToast({
				 		icon: 'none',
				 		title: "请输入手机号"
				 	})
				 	return
				 }
				if (!this.form.code) {
					uni.showToast({
						icon: 'none',
						title: "请输入账号"
					})
					return;
				}
				uni.setStorageSync('merchantId',1)
				uni.navigateTo({
					url:"/pages/dkdetail/merchantList"
				})


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

		width: 94%;
		margin: 0 auto;
		padding: 28upx 0;
		text-align: center;
		margin-top: 100upx;
		background-color: #7C75F5;
		color: #fff;
		border-radius: 16upx;
	}

	.btn {
		background-color: #7C75F5;
	}
</style>
