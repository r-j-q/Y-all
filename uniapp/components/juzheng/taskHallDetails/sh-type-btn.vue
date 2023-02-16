<template>
	<view class="zuiwaicheng">
		<view class="mission-center-center">
			<view class="center1  borderL1" @click="tabActives(item)" :class="currentShai == item.id ?'bgcolor':''"
				v-for="(item,index) in listTabs" :key="index">
				{{item.name}}
				<topBottomJiantou :Index="index" :current="currentShai"/>
			</view>
		</view>
	</view>
</template>

<script>
	 
	import topBottomJiantou from "../topBottomJiantou.vue"
	export default {
		components: {
			topBottomJiantou
		},
		props:['listTabs','currentShai'],
		data() {
			return {
				 
			};
		},
		 
		computed: {},
		created() {},
		methods: {
			tabActives(item) {
				this.$emit('tabActive',item) 
			},
			// 路由跳转
			jump(path) {
				this.$tools.routerTo(path);
			}
		}
	};
</script>

<style lang="scss" scoped>
	.zuiwaicheng {
		padding: 20upx 0;
		background-color: #fff;
	}

	.mission-center-center {
		width: 90%;
		// height: 100upx;
		margin: 0 auto;

		display: flex;
		flex-direction: row;
		align-items: center;
		// justify-content: space-between;



	}


	.center1 {
		font-size: 26upx;
		text-align: center;
		color: #999;
		padding: 6upx 24upx;

	}

	.borderL1 {
		border-radius: 50upx;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.bgcolor {
		background-color: #F3E5F6;
		color: #7C75F5;

	}

	.centerImages {
		width: 30upx;
		height: 30upx;
	}
</style>
