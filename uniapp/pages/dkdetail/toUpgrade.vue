<template>
	<view class="s_upgrade">
		<view class="s_upgrade_monly">
			<view class="s_upgrade_text">
				钻石会员
			</view>
			<view class="">
				<text>¥</text>
				<text class="s_upgrade_text_num">999.00</text>
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
				<u-switch v-model="checked" active-color="#7C75F5"   inactive-color="#eee"></u-switch>
			</view>
		</view>
		<view class="s_upgrade_94 s_sw backgroundTopBottom">
			<view class="rowstyle">
				<image :src="zhifubao" class="zhifubao"></image>
				<text class="">支付宝支付</text>
			</view>
			<view class="">
				<u-radio-group v-model="value" @change="radioGroupChange">
					<u-radio    @change="radioChange" name="orange" active-color="#7C75F5">

					</u-radio>
				</u-radio-group>
			</view>
		</view>
		<view class="s_upgrade_94 s_sw">
		 <view  class="s_pay" @click.stop="toPay" >立即支付</view>
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
				checked: false,
				value: 'orange',
				zhifubao:require('../../static/images/mipmap-xhdpi/ic_alipay.webp'),
				vipsType:require('../../static/images/vip/vipsType.png'),
				 
			};
		},
		// 触底加载更多
		onReachBottom() {

		},
		onLoad() {

		},
		methods: {
			radioGroupChange(e) {
				 
			},
			radioChange(e) {
				// alert(e)
			},
			 toPay(){
				console.log(this.checked); 
			 }
		}
	};
</script>

<style lang="scss" scoped>
	.s_upgrade {
		padding-top: 20upx;
		min-height: 100%;
		background-color: #fff;
	}
	.bgfff{
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
.rowstyle{
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
	.s_upgrade_img image{
		width: 100%;
		height: 100%;
	}

	.backgroundTopBottom {
		border: 20upx solid #f5f5f5;
		border-radius: 12upx;
	}
	.s_pay{
		color: #fff;
		background-color: #7C75F5;
		width: 100%;
		margin-top: 40upx;
		padding: 30upx 0;
		border-radius: 50upx;
		text-align: center;
		font-size: 28upx;
		font-weight: bold;
	}
	.zhifubao{
		width: 60upx;
		height: 60upx;
		margin-right: 20upx;
	}
	.s_agree_xieyi{
		padding: 50upx 20upx;
	}
</style>
