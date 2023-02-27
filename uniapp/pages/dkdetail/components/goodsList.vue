<template>
	<view class="l-a-b">
		<view class="l-a-b-1">
			<view class="l-a-b-img">
				<image :src="items.goods_name" mode=""></image>
			</view>
			<view class="l-a-b-2">
				<view class="l-a-b-c">
					<view class="">
						<view class="color98 f28" v-if="items.type==0"> 任务奖励{{items.reward}}现金</view>
						<view class="color98 f28" v-if="items.type==1"> 任务奖励{{items.points}}元宝</view>
						<view class="l-a-b-3" v-if="current!=2">
							<image class="l-a-b-3-1" :src="ic_timewebp" mode=""></image>
							<u-count-down class="count-down-demo" :timestamp="items.end_timestamp-items.time"
								separator-color="#333 " bg-color="#333 " color="#fff" autoplay format="HH:mm:ss">
							</u-count-down>

						</view>
					</view>
					<view class="l-a-b-c-r" @click="del(items.id)">
						<image :src="ic_cancel_order" mode=""></image>
						<view class="colora8">
							取消订单
						</view>
					</view>
				</view>
				<view class="colora8 l-a-b-3-c">
					*接单后超过24小时未完成任务自动取消备份
				</view>

			</view>

		</view>
		<view class="l-a-b-footer">
			<view class="l-a-b-footer-l el2">
				{{items.goods_name}}
			</view>
			<view class="l-a-b-footer-r">
				<!-- <view class="l-a-b-footer-btn goOut">
					放弃任务
				</view> -->
				<!-- <view class="l-a-b-footer-btn goto">
					去完成
				</view> -->

				<view class="l-a-b-footer-btn gosh">
					{{items.status_txt}}
				</view>
			</view>
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
		props: ['current', 'items'],
		components: {

		},
		data() {
			return {
				ic_timewebp: require('../../../static/images/mipmap-xhdpi/ic_time.webp'),
				ic_cancel_order: require('../../../static/images/mipmap-xhdpi/ic_cancel_order.webp'),
			};
		},

		onLoad() {

		},

		methods: {
			del(id) {
				this.$emit('getordersListApply', id)
			}
		}
	};
</script>

<style scoped lang="scss">
	.l-a-b {
		width: 90%;
		margin: 0 auto;
		padding: 20upx;
		box-shadow: 0px 2px 14px 2px rgba(170, 165, 189, 0.19);
		border-radius: 12upx;
		margin-bottom: 20upx;
	}

	.l-a-b-c {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.l-a-b-1 {
		display: flex;
		flex-direction: row;
	}

	.l-a-b-img {
		width: 180upx;
		height: 180upx;
		border-radius: 20upx;
		overflow: hidden;
	}

	.l-a-b-img image {
		width: 100%;
		height: 100%;
	}

	.l-a-b-2 {
		flex: 1;
		margin-left: 20upx;
	}

	.l-a-b-3 {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 50upx;
	}

	.l-a-b-3-1 {
		width: 30upx;
		height: 30upx;
		margin-right: 10upx;

	}

	.l-a-b-c-r {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 2vw;
	}

	.l-a-b-c-r image {
		width: 60upx;
		height: 60upx;
		position: relative;
		left: 4px;
	}

	.l-a-b-3-c {
		font-size: 1vw;
		margin-top: 20upx;
	}

	.l-a-b-footer {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin-top: 20upx;
	}

	.l-a-b-footer-l {
		font-size: 28upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #404040;
		width: 50%;
	}

	.l-a-b-footer-r {
		width: 50%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: end;

	}

	.goOut {
		background-color: #FFEEE9;
		color: #FFB197;
	}

	.goto {
		background-color: #A8A8A8;
		color: #fff;
	}

	.gosh {
		background-color: #9E8DDE;
		color: #fff;
	}

	.l-a-b-footer-btn {
		width: 140upx;
		text-align: center;
		font-size: 12px;
		padding: 16upx 0;
		border-radius: 50upx;
		margin-right: 10upx;
	}
</style>
