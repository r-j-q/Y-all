<template>
	<view class="mission-center-center position-r">
		 <view class="mission-center-center2">
			 
		 	<view class="center1  borderL1" @click="tabActive(item)" :class="current == item.id ?'bgcolor':''"
		 		v-for="(item,index) in taskCategorylist" :key="index">
		 		{{item.name}}
		 	</view>
		 </view>
		<u-icon @click="showMore" width="10px"  name="list" color="#A8A8A8"></u-icon>
		<!-- <image @click="showMore" class="centerImages" src="../../../static/images/mipmap-xhdpi/ic_pay.webp" mode=""></image> -->

	</view>
</template>

<script>
	/**
	 * 自定义之广告魔方
	 * @property {Object} detail -广告魔方信息
	 */
	export default {
		props:['taskCategorylist','current'],
		components: {},
		data() {
			return {
				 
				// current: 0,
			};
		},
		 
		computed: {},
		created() {},
		methods: {
			tabActive(item) {
				this.$emit("changeActive",item)
				// this.current = item.id
			},
			// 路由跳转
			jump(path) {
				this.$tools.routerTo(path);
			},
			showMore(){
				this.$emit("handleShowMore")
			}
		}
	};
</script>

<style lang="scss" scoped>
	  
	.mission-center-center {
		width: 100%;
		// height: 100upx;
		// margin: 0 auto;
		// background-color: #f5f5f5;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		// border-radius: 50upx;

	}
	.mission-center-center2{
		display: flex;
		flex-direction: row;
		align-items: center;
	}


	.center1 {
		font-size: 26upx;
		text-align: center;
		color: #999;
		padding: 6upx 18upx;

	}

	.borderL1 {
		border-radius: 50upx;
	}

	.bgcolor {
		background-color: #7C75F5;
		color: #fff;

	}

	.centerImages {
		width: 30upx;
		height: 30upx;
	}
</style>
