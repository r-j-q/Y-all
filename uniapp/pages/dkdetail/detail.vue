<template>
	<view>

		<!-- 轮播 -->
		<view class="detaiLunBo">
			<u-swiper height="600" :list="list"></u-swiper>
			<view class="backImg" @click="nativeGetTo">
				<u-icon name="arrow-left" size="40rpx"></u-icon>
			</view>
		</view>

		<!-- 标题 -->
		<view class="detailTitle bcg">
			<h3>{{qb.goods_name}}</h3>
		</view>
		<view class="deatilSY bcg">
			<view class="deatilSY0">
				<view class="colorc4"> 带货价</view>
				<view class="colorc5 fontW font20 mt"> ¥{{qb.price}}</view>
			</view>
			<view class="deatilSY0">
				<view class="colorc4"> 预估收益</view>
				<view class="colorc5 fontW font20 mt"> ¥{{qb.reward}}</view>
			</view>
			<view class="deatilSY0" v-if="qb.type==1">
				<view class="colorc4"> 获取元宝</view>
				<view class="colorc5 fontW font20 mt"> {{qb.points}}</view>
			</view>
			<view class="deatilSY0">
				<view class="colorc4"> 佣金</view>
				<view class="colorc5 fontW font20 mt"> ¥{{qb.commission}}</view>
			</view>
			<view class="deatilSY0">
				<view class="colorc4"> 公开</view>
				<view class="colorc4 mt"> {{qb.public}}%</view>
			</view>
		</view>
		<view class="bcg">
			<view class="deatilSY   btborder">
				<view class="deatil6">
					<view class="deatilList colorc4">
						<u-icon name="heart-fill" size="40rpx"></u-icon>
						<view class="deatilListText">收藏</view>
					</view>
				</view>
				<view class="deatil6">
					<view class="deatilList colorc4" @click="test">
						<u-icon name="share-fill" size="40rpx"></u-icon>
						<view class="deatilListText">分享</view>
					</view>
				</view>
				<view class="deatil6">
					<view class="deatilList colorc4"  @tap="handleClickCopys(qb.link)">
						<u-icon name="bookmark-fill" size="40rpx"></u-icon>
						<view class="deatilListText">复制</view>
					</view>
				</view>
			</view>
		</view>
		<view class="bcg">
			<view class="">
				<uni-view class="item-title">带货要求</uni-view>
				<view class="colorc4 pdl ptrb">
					<h4 class="pdl mt">抖音账号粉丝≥{{qb.fans_required}}</h4>
				</view>
			</view>
			<view class="">
				<uni-view class="item-title">奖励规则</uni-view>
				<view class="colorc4 pdl ptrb">
					<h4 v-if="qb.award" class="pdl mt" v-for="(items,index) in qb.award" :key="index">{{items}}</h4>
					 
				</view>
			</view>
			<view class="">
				<uni-view class="item-title">任务要求</uni-view>
				<view class="colorc4 pdl ptrb">
 
					<h4 v-if="qb.award" class="pdl mt" v-for="(itemsRequired,s) in qb.required" :key="s">{{itemsRequired}}</h4>
				</view>
			</view>
		<!-- 	<view class="" >
				<uni-view class="item-title">视频文案</uni-view>
				<view class="colorc4 pdl ptrb">

				</view>
			</view> -->
			<view class="">
				<uni-view class="item-title">视频展示</uni-view>
				<view class="colorc4 pdl ptrb displayRowAligin" > 
				    <view v-if="qb.patterns.length>0" @click="jumpkczxDetailVideo(pa)" class="displayRowAligin0" v-for="(pa,si) in qb.patterns" :key="pa">
				    	 <image :src="pa.image" mode=""></image>
				    </view>
					 
				</view>
			</view>
			<view class="">
				<uni-view class="item-title">带货流程</uni-view>
				<view class="colorc4 pdl ptrb daihuo">
                   <image :src="details" mode=""></image>
				</view>
			</view>

		</view>
		<view class="detailbaobei bcg">
			<center>
				<h4>宝贝详情</h4>
			</center>
			<view style="height: 30px;"> </view>
			<view class="detailbaobeiImg"> 
				<rich-text :nodes="qb.content" class="content"></rich-text> 
				 
			</view>
		</view>

		<view class="footerShare">
			<view class="footerShare0" @click="test">
				<u-icon name="share-fill" size="40rpx"></u-icon>
				<view class="">
					分享
				</view>
			</view>
			<view class="footerShare1 bacfff" @click="handleJianJI(qb.id)">
				<view class="footerShare11">
					{{qb.type==1?'发视频赚元宝':'一键剪辑'}}
				</view>
			</view>
			<view class="footerShare1 bacf5" @tap="handleClickCopys(qb.link)">
				<view class="footerShare2">
					复制商品链接
				</view>

			</view>
		</view>

		<qrcode-poster ref="poster" :erweima2="erweima2" :subTitleType="subTitleType" :title="title" :subTitle="subTitle" :headerImg="headerImg" :content="content">
		</qrcode-poster>
		<u-toast ref="uToastDetails"></u-toast>
	</view>
</template>

<script>
	import QrcodePoster from '@/components/poster/poster.vue'
	import {plouto_url} from "@/shopro/utils/config.js"
	export default {

		components: {
			QrcodePoster
		},
		data() {
			return {
				headerImg: '',
				details:require('../../static/images/mine/details.png'),
				erweima2: require('../../static/images/mine/1676329905397.jpg'),
				title: '测试标题',
				subTitle: '测试标题',
				subTitleType:"",
				content: "",
                 ploutoUrl:"",
				list: [],
				qb:{},
				list4: [{
				                    url: 'https://cdn.uviewui.com/uview/resources/video.mp4',
				                    title: '昨夜星辰昨夜风，画楼西畔桂堂东',
				                    poster: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				                    type: 'video'
				                }],
			}
		},
    onLoad(option) {
    	if(option.id){
			// console.log("=======任务详情======>", option.id)
			this.getTaskDetail(option.id)
		}
    },
	onShow() {
	this.ploutoUrl = plouto_url	
	},
		methods: {
			// 一键剪辑
			handleJianJI(order_id){
				let that = this;
				let douYin=1;
				if(douYin==1){
					uni.showToast({
						icon:"none",
						title:"请先绑定都抖音账号"
					})
					return
				}
				
				
			 
				 that.$http('missionHall.createVideo', {
					 order_id 
				}).then(res => {
				 
					console.log("=======一键剪辑======>",res)
				});
			},
			 
			jumpkczxDetailVideo(item){
			 uni.navigateTo({
				url:"/pages/me/kczxDetailVideo?title="+item.name+"&video="+item.video
			 })
			},
			
			// 任务详情  
			getTaskDetail(id) {
				let that = this;
				// that.loadStatus = 'loadmore';
				that.$http('missionHall.taskDetail', {
					 id:id
				}).then(res => {
				that.title =res.data.goods_name
				  that.qb =  res.data; 
				 that.list =res.data.images
				 
				  this.headerImg = res.data.image;
				this.subTitleType=  res.data.type_txt
				  
				  // var richtext=  that.qb.content;
				  // const regex = new RegExp('<img', 'gi');
				  // richtext = richtext.replace(regex, `<img style="max-width:100%;height:auto;display:block;"`);
				  // that.qb.content = richtext;
				 
				   // that.list =res.data.images

					console.log("=======任务详情======>", that.list)
				});
			},
			
			
			test() {
				this.$refs.poster.showCanvas(this.headerImg,  this.qb.image)
			},
			nativeGetTo() {
				uni.navigateBack()
			},
			handleClickCopys(content) {
				let _this = this;
				 uni.setClipboardData({
					data: String(content), // 必须字符串
					success: function() {
						uni.hideToast();   // 隐藏弹出提示
						uni.hideKeyboard();  
					 _this.$refs.uToastDetails.show({
							title: "复制成功",
							position: 'bottom'

						})
					}
				});
			}
		},

	}
</script>

<style scoped lang="scss">
	.detaiLunBo {
		position: relative;
	}

	.backImg {
		position: absolute;
		top: 30px;
		left: 20px;
		z-index: 99;
		background-color: #f5f5f5;
		width: 60upx;
		height: 60upx;
		line-height: 60upx;
		text-align: center;
		border-radius: 30upx;
	}

	.bcg {
		background-color: #fff;
	}

	.colorc4 {
		color: #999;
	}

	.colorc5 {
		color: #7C75F5;
	}

	.font20 {
		font-size: 20px;
	}

	.fontW {
		font-weight: bold;
	}

	.mt {
		margin-top: 20upx;
	}

	.detailTitle {
		padding: 40upx 40upx 0 40upx;
	}

	.deatilSY {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		padding: 40upx;
	}

	.deatilSY0 {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.detailShare {}

	.btborder {
		width: 90%;
		margin: 0 auto;
		border-top: .5px solid #c4c4c4;
	}

	.deatilList {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.deatil6 {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		flex: 1;
	}

	.deatilListText {
		margin-left: 10upx;
	}

	.pdl {
		padding-left: 60upx;
	}

	.ptrb {
		padding: 40upx 0 40upx 0;
	}
	.daihuo image{
		width: 90%;
		display: block;
		margin: 0 auto;
		height: 120upx;
	}

	// 右侧title
	.item-title {
		position: relative;
		padding-left: 60upx;
		font-weight: bold;
	}


	.item-title:after {
		position: absolute;
		width: 12upx;
		height: 50upx;
		top: -8upx;
		content: "";
		left: 0;
		border-radius: 10px;
		background-color: #7C75F5;

	}

	.detailbaobei {
		padding: 40upx 20upx;
		padding-bottom: 200upx;

	}

	.detailbaobeiImg,
	.detailbaobeiImg image ,.detailbaobeiImg img {
		width: 100%;
		display: flex;
		flex-direction: column;

	}

	.footerShare {
		height: 160upx;
		background-color: #333;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}

	.footerShare0 {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: #fff;
		font-size: 12px;
	}

	.footerShare1 {
		flex: 2;
		// background-color: red;
		color: #fff;
	}

	.footerShare11 {
		width: 100%;
		border-radius: 20%;
		padding: 14px 0;
	}

	.bacfff {
		border: 1px solid #fff;
	}

	.footerShare1 {

		width: 100%;
		border-radius: 50px;
		font-size: 26upx;
		text-align: center;
		margin-right: 10px;

	}

	.bacf5 {
		background-color: #7C75F5;
	}

	.footerShare2 {
		width: 100%;
		font-size: 12px;
		text-align: center;
		padding: 14px 0;

	}
	.displayRowAligin{
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap; 
		padding: 40upx  30upx;
	}
	.displayRowAligin0{
		width: 220upx;
		height: 160upx;
		background-color: #f5f5f5;
		border-radius: 10upx;
		margin-right: 10upx;
		margin-bottom: 10upx;
		 
	}
	.displayRowAligin0 image {
		width: 100%;
		height: 100%;
	}
</style>
