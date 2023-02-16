<template>
	<view class="bac100">
	<view class="mission-c">
		<view class="mission-l">
			<u-search placeholder="搜索商品" shape="square" height="100" @custom="bandleSearch" :showAction="true"
				:animation="true" :clearabled="true" @confirm="confirmData" v-model="keyword"></u-search>
			<view class="mission-list" v-show="searchText">
				<view @click="searchTextList" class="mission-list-title"> 搜索的商品搜索的商品搜索的商品搜索的商品搜索的商品搜索的商品 </view>
				<view @click="searchTextList" class="mission-list-title"> 搜索的商品 </view>
				<view @click="searchTextList" class="mission-list-title"> 搜索的商品 </view>
			</view>
		</view>
		</view>
		<view class="mission-center">
			<view class="mission-center-center">
				<view class="center1  borderL1" @click="tabActive(item)" :class="current == index ?'bgcolor':''"
					v-for="(item,index) in listTabs" :key="index">
					{{item.name}}
					<view class="center1-tag">
						0
					</view>
				</view>

			</view>
		</view>
		<!-- <view class="">
			<view class="">
				<OEmpty />
				<button class="backIndex" @click="goToIndex">去首页</button>
			</view>
		</view> -->
        <goods-list v-for="(item,index) in 3" :key="index" :items="item"></goods-list>
        
	</view>
</template>

<script>
	import OEmpty from "@/components/juzheng/o-empty.vue"
	import goodsList from "@/pages/dkdetail/components/goodsList.vue"
	export default {

		components: {
			OEmpty,
			goodsList
		},
		data() {
			return {
				searchText: false,
				keyword:"",
				listTabs: [{
					name: '全部',
					value:0,
					id: 0
				},{
					name: "进行中",
					value:0,
					id: 1
				}, {
					name: "已完成",
					value:2,
					id: 2
				},{
					name: "未通过",
					value:0,
					id: 3
				} ],
				current: 0,
			}
		},

		methods: {
			tabActive(item) {
				this.current = item.id
			},
			goToIndex() {
				uni.switchTab({
					url: "/pages/index/index"
				})
			},
			change() {},
			// 点击收缩时触发
			bandleSearch() {
				this.searchText = !this.searchText
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
	.center1-tag{
		    position: absolute;
		    top: 0px;
		    right: 13px;
		    background-color: #FF6D3B;
		    color: #fff;
		    padding: 0px 4px;
		    border-radius: 26px;
			font-size:1vw
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
