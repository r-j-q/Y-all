<template>
	<view class="kechen">
		<view class="kechen-search">
			<u-search placeholder="请输入你要搜索的内容" shape="square" height="100" @search='bandleSearch' @custom="bandleSearch" :showAction="true"
				:animation="true" :clearabled="true" v-model="keyword"></u-search>

		</view>
		<view class="kechen0">
			<image :src="banner" mode=""></image>
		</view>
		<view class="kechen1">
			<view class="kechen2">课程中心</view>
          
			<view v-if="keChenList.length>0" @click="jumpkDetail(item)"  class="kechen-list bShow"  v-for="(item,index) in keChenList" :key="index">
				<view class="kechen-list0">
					<image :src="item.image" mode=""></image>
				</view>
				<view class="kechen-list1">
					<view class="kechen-list2"> {{item.name}}</view>
					<view class="kechen-list3"> {{item.series}}</view>
					<view class="kechen-list kechen-list4">
						<view class="mianfei0"> {{item.type_txt}}</view>
						<view class="mianfei1"> 去学习</view>
					</view>
				</view>
			</view>
			    <noData title="暂无数据" v-if='keChenList.length==0'/>


		</view>


	</view>

</template>

<script>
	import noData from '@/components/juzheng/noData.vue';
	export default {
		components: {
			noData
		},
		data() {
			return {
				keyword: "",
				keChenList: [],
				banner:""

			};
		},
		// 触底加载更多
		onReachBottom() {},
		onLoad() {
			this.getCourse()
		},
		onShow() {

		},
		methods: {
			bandleSearch() {
               this.getCourse()
			},
			jumpkDetail(item){
				uni.navigateTo({
					url:'/pages/me/kczx-detail?id='+item.id
				})
			},
			// courseDetail
			getCourse() {
				let that = this
				that.$http('me.course', {
                keyword:that.keyword
				}).then(res => {
					if (res.data) {
						that.banner =res.data.banner;
						that.keChenList = res.data.list.data;
					}



					console.log("=====11111======>", res.data.banner)
					console.log("=====222222======>",  res.data.list.data)
				});
			},

		}

	};
</script>

<style lang="scss" scoped>
	.kechen-search {
		margin-bottom: 30upx;
	}

	.mianfei0 {
		color: #C0853C;
	}

	.mianfei1 {
		color: #999;
	}

	.kechen {
		min-height: 100%;
		padding: 30upx;
		background-color: #fff;
	}

	.kechen0 {
		width: 100%;
		height: 360upx;
		border-radius: 10upx;
		overflow: hidden;
	}

	.kechen0 image {
		width: 100%;
		height: 100%;
	}

	.kechen2 {
		margin: 30upx 0;
		font-weight: bold;
	}

	.kechen-list {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		overflow: hidden;
		border-radius: 10upx;

	}

	.bShow {
		box-shadow: 0 0 2px #999;
	}

	.kechen-list0 {
		width: 50%;
		height: 260upx;
	}

	.kechen-list0 image {
		width: 100%;
		height: 100%;
	}

	.kechen-list1 {
		width: 50%;
		height: 260upx;
		padding-left: 20upx;
	}

	.kechen-list2 {
		margin: 20upx 0;
		font-weight: bold;
	}

	.kechen-list3 {
		margin: 20upx 0;
		color: #999;
	}

	.kechen-list4 {
		margin-top: 60upx;
		padding-right: 20upx;
	}
</style>
