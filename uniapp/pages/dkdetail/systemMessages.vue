<template>
	<view class="list-box">
		 
		<view class="sList row_s row_s_around" @click="navgetTosystemMessagesDetail(item)" v-for="(item,index) in 20" :key="index">
			 
			<view class="sListCenter">
				<view class="sfw margin-bottom"> 测试消息</view>
				 
				<view class="sfw"> 测试消息的内容</view>
			</view>
			<view class=" looks">
				2022-12-10
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
		components: {

		},
		data() {
			return {
				listTabs: [{
					name: '达人列表',
					id: 0
				}, {
					name: '订单列表',
					id: 1
				}],
				current: 0,
				logo: require('../../static/images/mipmap-xhdpi/ic_logo.jpg'),


			};
		},
		// 触底加载更多
		onReachBottom() {

		},
		onLoad() {

		},
		methods: {
			tabActive(item) {
				this.current = item.id
			},
			navgetTosystemMessagesDetail() {
				uni.navigateTo({
					url: '/pages/dkdetail/systemMessagesDetail'
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
