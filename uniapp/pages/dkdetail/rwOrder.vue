<template>
	<view class="bac100">
		<u-sticky>
		<view class="mission-c">
		 
			<view class="mission-l">
					 
				<u-search placeholder="搜索商品" shape="square" height="100" @search='bandleSearch' @custom="bandleSearch" :showAction="true"
					:animation="true" :clearabled="true" @confirm="bandleSearch" v-model="keyword"></u-search>
				<!-- <view class="mission-list" v-show="searchText">
					<view @click="searchTextList" class="mission-list-title"> 搜索的商品搜索的商品搜索的商品搜索的商品搜索的商品搜索的商品 </view>
					<view @click="searchTextList" class="mission-list-title"> 搜索的商品 </view>
					<view @click="searchTextList" class="mission-list-title"> 搜索的商品 </view>
				</view> -->
					 
			</view>
		 
		</view>
		<view class="mission-center">
			<view class="mission-center-center">
				<view class="center1  borderL1" @click="tabActive(item)" :class="current == index ?'bgcolor':''"
					v-for="(item,index) in listTabs" :key="index">
					{{item.name}}
					<view class="center1-tag" v-if="index==3">
						0
					</view>
				</view>

			</view>
		</view>
		</u-sticky>
		<!-- <view class="">
			<view class="">
				<OEmpty />
				<button class="backIndex" @click="goToIndex">去首页</button>
			</view>
		</view> -->
		<goods-list @getordersListApply="getordersListApply" :current='current' v-if="orderListView.length>0"
			v-for="(item,index) in orderListView" :key="index" :items="item"></goods-list>
		<noData v-if="orderListView.length==0" title="暂无数据" />
	</view>
</template>

<script>
	import OEmpty from "@/components/juzheng/o-empty.vue";
	import goodsList from "@/pages/dkdetail/components/goodsList.vue";
	import noData from '@/components/juzheng/noData.vue';
	export default {

		components: {
			OEmpty,
			goodsList,
			noData
		},
		data() {
			return {
				searchText: false,
				keyword: "",
				listTabs: [{
					name: '全部',
					value: 0,
					id: 0
				}, {
					name: "进行中",
					value: 0,
					id: 1
				}, {
					name: "已完成",
					value: 2,
					id: 2
				}, {
					name: "未通过",
					value: 0,
					id: 3
				}],
				current: 0,
				orderListView: [],
				page: 1,
				type:0
			}
		},
		onLoad(options) {
		  this.type=options.type
			if(options.type){
				this.getordersList()
			}
			 
		},
		methods: {
			// orderT.delOrderList 
			getordersList() {
				this.$http('orderT.ordersList', {
					order: 'id',
					sort: "desc",
					page: this.page,
					type:this.type,
					rows: 10,
					keyword: this.keyword,
					status: this.current==0?'':this.current,
				}).then(res => {
					if (res.data) {
					this.listTabs[3].value=	 res.data.totals.unpass
						let listOrder = res.data.data;
						this.orderListView = listOrder;
					}
				});
			},
			// 删除订单
			getordersListApply(id) {
				this.$http('orderT.apply', {
					id,
					info: "FASDFdd",

				}).then(res => {
					if (res.code == 1) {
						this.getordersList()
						uni.showToast({
							icon: "none",
							title: "删除成功"
						})
					}
				});
			},


			tabActive(item) {
				this.current = item.id;
				this.getordersList()
			},
			goToIndex() {
				uni.switchTab({
					url: "/pages/index/index"
				})
			},
			change() {},
			// 点击收缩时触发
			bandleSearch() {
				this.getordersList()
				// this.searchText = !this.searchText
				console.log("----", this.keyword)
			},
			searchTextList() {
				this.searchText = !this.searchText
			},
		},

	}
</script>

<style scoped lang="scss">
	.bac100 {
		background-color: #fff;
		min-height: 100%;
	}

	.center1-tag {
		position: absolute;
		top: 0px;
		right: 13px;
		background-color: #FF6D3B;
		color: #fff;
		padding: 0px 4px;
		border-radius: 26px;
		font-size: 1vw
	}

	.backIndex {
		width: 30%;
		margin: 0 auto;
		color: #fff;
		background-color: #7C75F5;
		border: none;
	}

	.mission-center {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		font-size: 18px;
		background-color: #fff;
		padding: 40upx 20upx;
		position: relative;


	}

	.mission-center-center {
		width: 100%;
		height: 80upx;
		margin: 0 auto;
		background-color: #f5f5f5;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		border-radius: 50upx;

	}

	.center1 {
		width: 250upx;
		height: 80upx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #999;
		font-size: 30upx;
		position: relative;

	}

	.borderL1 {
		border-radius: 50upx;
	}

	.bgcolor {
		background-color: #7C75F5;
		color: #fff;

	}

	.mission-c {

		display: flex;
		flex-direction: row;

		.mission-l {
			width: 94%;
			position: relative;
			margin: 0 auto;
		}

		/deep/ uni-button:after {
			border: none;
			outline: none;
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
</style>
