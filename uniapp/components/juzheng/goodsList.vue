<template>
	<view class="p_100">


		<view class="goodsList" @click="nagatorToDetail(item.id)" v-for="(item,index) in missionList" :key="index">
			<view class="goodsListTop">
				<view class="goodsListTopImg">
				 <image  :src="item.image" class="goodsListTopImgimg"  ></image> 
				</view>
				
				<view class="goodsListTopText">
					<view class="goodsListTopTitle ellipsis2">{{item.goods_name}} </view>
					<view class="goodsListTag m20 ">
						短视频任务
					</view>
					<view class="goodsListMonly m20">
						最高奖励{{item.reward}}元
					</view>
					<view class="goodsListjy m20">
						<view class="as1">价格：¥{{item.price}} </view>
						<view class="as2">佣金：¥{{item.commission}} </view>
					</view>
					<view class="m20">
						<LineProgress :currentIndex="11" :progressCount="item.robbed" :total="100" />
					</view>
				</view>
			</view>
			<view class="goodsListbottom">
				<view class="goodsListbottomLeft">
					<view class="">
						<h4>奖励规则</h4>
					</view>
					<view class="colorC m20" v-for="(items,i) in item.award" :key="i">
						<h6>{{items}}</h6>
					</view>
				</view>
				<view class="goodsListbottomRight">
					<view class="goodsListbottomRightLeft">
						<view class="">
							<h4>参与要求</h4>
						</view>
						<view class="colorC m20">
							<h6>粉丝数≥{{item.fans_required}} </h6>
						</view>
						<view class="colorC m20">
							<h6>橱销≥{{item.showcase_required}} </h6>
						</view>
						<view class="colorC m20">
							<h6>积分≥{{item.points_required}}</h6>
						</view>
					</view>
					<view class="goodsListbottomRightRight" @click.stop="getGoods(item.id)">
						<view class="buttomOver">
							{{item.order_state_txt}}
						</view>
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import LineProgress from "./lineProgress.vue"
	export default {
		components: {
			LineProgress
		},
		props: ['ploutoUrl','missionList'],
		data() {
			return {


			};
		},


		methods: {
			getGoods(id) {
				this.$emit("getTaskOrder",id)
			},
			nagatorToDetail(id) {
				uni.navigateTo({ 
					url:`/pages/dkdetail/detail?id=${id}`
				 
				})
			}

		}
	};
</script>

<style scoped>
	.goodsList {

		overflow: hidden;
		margin-bottom: 30upx;
	}


	.goodsListjy {
		display: flex;
		flex-direction: row;
		align-items: center;
		color: #7972a8;
		font-size: 12px;
	}

	.as1 {
		margin-right: 20upx;
	}

	.as2 {}

	.goodsListTop {
		display: flex;
		flex-direction: row;
		padding: 20upx;
		border-bottom: .5px solid #ccc;
		background-color: #fff;
	}

	.goodsListTopImg {
		width: 330upx;
		height: 330upx;
		overflow: hidden;
		border-radius: 4px
	}

	.goodsListTopImgimg  {
		width: 100%;
		height: 100%;
		display: block;
	}

	.goodsListTopText {
		flex: 1;
		margin-left: 20upx;
	}

	.goodsListTopTitle {
		color: #333;
		font-size: 16px;
		font-weight: bold;
	}

	.ellipsis2 {
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical
	}

	.goodsListTag {
		color: #7C75F5;
		font-size: 12px;
		width: 160upx;
		height: 50upx;
		line-height: 50upx;
		text-align: center;
		background-color: #F3E5F6;
		border-radius: 8upx;
	}

	.goodsListMonly {
		color: #7972a8;
		font-size: 40upx;
		font-weight: bold;
	}

	.m20 {
		margin-top: 20upx;

	}

	.goodsListbottom {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		background-color: #fff;
	}

	.goodsListbottomLeft {
		flex: 1;
		height: 300upx;
		padding: 60upx;
	}

	.colorC {
		color: #999;
	}

	.goodsListbottomRight {
		flex: 1;
		height: 300upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.goodsListbottomRightLeft {
		flex: 1;
	}

	.goodsListbottomRightRight {
		flex: 1;
	}

	.buttomOver {
		width: 120upx;
		height: 120upx;
		line-height: 120upx;
		text-align: center;
		border-radius: 60upx;
		color: #fff;
		background-color: #ff9900;
	}
</style>
