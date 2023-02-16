<template>
	<view class="goodsList" >
		<view class="goodsListTopVipList">

			<view class="goodsListTopVip" @click="nagatorToDetail(item.id)" v-for="(item,index) in listData" :key="index">
				<view class="goodsListTopImg">
					<image :src="item.name" alt="" srcset="">
				</view>
				<view class="goodsListTopText">
					<view class="goodsListTopTextLeft">
						<view class="goodsListTopTitle ellipsis2">{{item.title}} </view>
						<view class="goodsListTopTextrow">
							<view class="goodsListjy m20 fantasize2">
								<view class="as1">¥{{item.monly}} </view>
								 
							</view>
							
							<view class="as2 m22 fantasize2">20元宝 佣金{{item.yongjin}}% </view>
							<!-- <view class="goodsListTopTextRight" :class="item.likeActive?'goodsListTopTextRightlike':''"
								@click.stop="likeSave(item,index)">
								<u-icon name="heart-fill" :color="item.likeActive ?'#7C75F5':'#F3E5F6'" size="40">
								</u-icon>
							</view> -->
						</view>
					</view>
				</view>
			</view>

		</view>

	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {

				listData: [{
						name: 'http://file.shopro.top/uploads/20210519/356bead1ea234354168954aa55e98d7a.jpeg',
						title: "杨先生黑芝麻芡实糕八珍杨先生黑芝麻芡实糕八珍杨先生黑芝麻芡实糕八珍",
						monly: "19.90",
						yongjin: "10",
						likeActive: false
					},
					{
						name: 'http://file.shopro.top/uploads/20210519/356bead1ea234354168954aa55e98d7a.jpeg',
						title: "杨先生黑芝麻芡实糕八珍杨先生黑芝麻芡实糕八珍杨先生黑芝麻芡实糕八珍",
						monly: "19.90",
						yongjin: "10",
						likeActive: false
					},
					{
						name: 'http://file.shopro.top/uploads/20210519/356bead1ea234354168954aa55e98d7a.jpeg',
						title: "杨先生黑芝麻芡实糕八珍杨先生黑芝麻芡实糕八珍杨先生黑芝麻芡实糕八珍",
						monly: "19.90",
						yongjin: "10",
						likeActive: false
					},
					{
						name: 'http://file.shopro.top/uploads/20210519/356bead1ea234354168954aa55e98d7a.jpeg',
						title: "杨先生黑芝麻芡实糕八珍杨先生黑芝麻芡实糕八珍杨先生黑芝麻芡实糕八珍",
						monly: "19.90",
						yongjin: "10",
						likeActive: false
					},
					{
						name: 'http://file.shopro.top/uploads/20210519/356bead1ea234354168954aa55e98d7a.jpeg',
						title: "杨先生黑芝麻芡实糕八珍杨先生黑芝麻芡实糕八珍杨先生黑芝麻芡实糕八珍",
						monly: "19.90",
						yongjin: "10",
						likeActive: false
					},
					{
						name: 'http://file.shopro.top/uploads/20210519/356bead1ea234354168954aa55e98d7a.jpeg',
						title: "杨先生黑芝麻芡实糕八珍杨先生黑芝麻芡实糕八珍杨先生黑芝麻芡实糕八珍",
						monly: "19.90",
						yongjin: "10",
						likeActive: false
					},
					{
						name: 'http://file.shopro.top/uploads/20210519/356bead1ea234354168954aa55e98d7a.jpeg',
						title: "杨先生黑芝麻芡实糕八珍杨先生黑芝麻芡实糕八珍杨先生黑芝麻芡实糕八珍",
						monly: "19.90",
						yongjin: "10",
						likeActive: false
					},
					{
						name: 'http://file.shopro.top/uploads/20210519/356bead1ea234354168954aa55e98d7a.jpeg',
						title: "杨先生黑芝麻芡实糕八珍杨先生黑芝麻芡实糕八珍杨先生黑芝麻芡实糕八珍",
						monly: "19.90",
						yongjin: "10",
						likeActive: false
					},
					{
						name: 'http://file.shopro.top/uploads/20210519/356bead1ea234354168954aa55e98d7a.jpeg',
						title: "杨先生黑芝麻芡实糕八珍杨先生黑芝麻芡实糕八珍杨先生黑芝麻芡实糕八珍",
						monly: "19.90",
						yongjin: "10",
						likeActive: false
					},
					{
						name: 'http://file.shopro.top/uploads/20210519/356bead1ea234354168954aa55e98d7a.jpeg',
						title: "杨先生黑芝麻芡实糕八珍杨先生黑芝麻芡实糕八珍杨先生黑芝麻芡实糕八珍",
						monly: "19.90",
						yongjin: "10",
						likeActive: false
					},
					{
						name: 'http://file.shopro.top/uploads/20210519/356bead1ea234354168954aa55e98d7a.jpeg',
						title: "杨先生黑芝麻芡实糕八珍杨先生黑芝麻芡实糕八珍杨先生黑芝麻芡实糕八珍",
						monly: "19.90",
						yongjin: "10",
						likeActive: false
					}
				]

			};
		},


		methods: {
			likeSave(item, index) {
				// this.listData.forEach((item,i)=>{
				//   if(index==i){

				//   }
				// })

				this.listData[index].likeActive = !this.listData[index].likeActive;

				console.log("000", this.listData);
			},
			nagatorToDetail(id) {
				uni.navigateTo({
					url: "/pages/dkdetail/detail?id="+id
				})
			}

		}
	};
</script>

<style scoped>
	.goodsListTopVipList {
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;
		justify-content: start;
	}

	.goodsListTopTextLeft {
		width: 100%
	}

	.goodsListTopTextRight {
		width: 70upx;
		height: 70upx;
		border-radius: 40upx;
		border: 2px solid #F3E5F6;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.goodsListTopTextRightlike {
		border: 2px solid #7C75F5;
	}

	.goodsList {

		overflow: hidden;
		margin-bottom: 30upx;
	}
.fantasize2{
	font-size: 1vw;
}

	.goodsListjy {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		color: #7972a8;
		font-size: 12px;
	}

	.as1 {
		margin-right: 20upx;
		font-size: 40upx;
		color: #7C75F5;
	}

	.as2 {
		color: #999;
	}
.goodsListTopVipList > .goodsListTopVip:nth-child(odd){
	margin: 1%;
	 
}
.goodsListTopVipList > .goodsListTopVip:nth-child(even){
	margin: 1%;
}
	.goodsListTopVip {
		width: 48%;
		display: flex;
		flex-direction: column;
		padding: 20upx;
		background-color: #fff;
		margin-bottom: 20upx;
	}

	.goodsListTopImg {
		width: 330upx;
		height: 330upx;
		overflow: hidden;
		border-radius: 4px
	}

	.goodsListTopImg image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.goodsListTopText {
		margin-top: 20upx;
	}

	.goodsListTopTextrow {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
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
		-webkit-line-clamp: 1;
		line-clamp: 1;
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
	.m22{
		margin-top: 26upx;
	}

	.colorC {
		color: #999;
	}
</style>
