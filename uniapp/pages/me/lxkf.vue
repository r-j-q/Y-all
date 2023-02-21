<template>
	<view class="feacd-list">

		<view class="feacd-list0">
			<view class="feacd-list1">
				反馈类型(必选)
			</view>
			<view class="feacd-list2">
				<view class="feacd-list3" @click="checkedList(index)" :class="counts==index?'activeColor':''"
					v-for="(item,index) in typeList" :key="index">
					{{item.name}}
				</view>
			</view>
			<view class="feacd-list1 m-b-30">
				反馈内容(必填)
			</view>
			<textarea class="textarea" placeholder="请输入内容" v-model="content"></textarea>


			<view class="">
				<view class="feacd-list1 m-b-30 m-t-30">
					添加图片(选填)
				</view>
				
				
				<u-upload
					:showProgress="false"
					@on-uploaded="uploadSuccess"
					@on-remove="uploadRemove"
					:action="`${$BASE_URL}/addons/shopro/index/upload`"
					:header="{token: token}"
					width="150"
					height="150"
					maxCount="9"
				></u-upload>
				 
			</view>
			<view class="feacd-list1 m-b-30 m-t-30">
				联系方式(必填)
			</view>
			<view class="">
				<input class="uni-input" v-model="phone" type="number" placeholder="请输入联系方式" />
			</view>
			<view class="">
				<button class="submitBtn" @click="addFeacd" :disabled="disabled">提交</button>
			</view>
			 
		</view>

		<u-toast ref="feacd"></u-toast>
	</view>

</template>

<script>
	export default {
		components: {
			 
		},
		data() {
			return {
				fileList1: [],


				typeList: [],
				counts: 0,
				content: "",
				disabled: false,
				phone: "",
				type: "",
				images: [],
				imgList: [],
				token: uni.getStorageSync('token')
			};
		},
		// 触底加载更多
		onReachBottom() {},
		onLoad() {
			this.getfeedbackType()
		},
		onShow() {

		},
		methods: {
			addFeacd() {
				let that = this;
				if (that.type == "") {
					that.$refs.feacd.show({
						title: "请选择反馈类型",
						position: 'bottom'

					})
					return
				}
				if (that.content == "") {
					that.$refs.feacd.show({
						title: "请填写反馈内容",
						position: 'bottom'

					})
					return
				}
				if (that.phone == "") {
					that.$refs.feacd.show({
						title: "请输入联系方式",
						position: 'bottom'

					})
					return
				}
               that.disabled=true
				that.$http('me.feedbackAdd', {
					type: that.type,
					images: that.imgList,
					content: that.content,
					phone: that.phone,
				}).then(res => {
					that.disabled=false
					that.images = ''
					that.content = ''
					that.phone = ''
					that.$refs.feacd.show({
						title: "提交成功",
						position: 'bottom'

					})
				});
			},
			bindTextAreaBlur: function(e) {
				console.log(e.detail.value)
			},
			checkedList(index) {
				this.counts = index;
				this.type = this.typeList[index].code
			},
			getfeedbackType() {
				let that = this
				that.$http('me.feedbackType', {

				}).then(res => {
					that.typeList = res.data
					that.type = that.typeList[that.counts].code

					console.log("=====222222======>", res.data)
				});
			},

			// 上传图片
			// 删除图片
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			// 新增图片
			
			// 上传图片成功
			uploadSuccess(e) {
				this.imgList = [];
				e.forEach(item => {
					this.imgList.push(item.response.data.fullurl);
				});
				console.log('imgListimgListimgList',this.imgList)
			},
			
			// 移除图片
			uploadRemove(index) {
				this.imgList.splice(index, 1);
			},
			 


		}

	};
</script>

<style lang="scss" scoped>
	.feacd-list {
		min-height: 100%;
		background-color: #fff;
	}

	.textarea {
		height: 400upx;
		width: 100%;
		background-color: #f5f5f5;
		padding: 20upx;
	}

	.uni-input {
		background-color: #f5f5f5;
		font-size: 28upx;
		height: 80upx;
		text-indent: 10upx;
	}

	.feacd-list1 {
		font-size: 30upx;
		font-weight: bold;

	}

	.submitBtn {
		color: #fff;
		background-color: #7C75F5;
		margin-top: 100upx;
	}

	.m-b-30 {
		margin-bottom: 30upx;
	}

	.m-t-30 {
		margin-top: 30upx;
	}

	.colorY {
		color: #C0853C;
	}

	.feacd-list0 {
		width: 94%;
		margin: 0 auto;
	}

	.feacd-list2 {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		padding: 30upx 0;

	}

	.feacd-list3 {
		font-size: 30upx;
		background-color: #f5f5f5;
		border-radius: 10upx;
		padding: 10upx 20upx;
	}

	.activeColor {
		background-color: #7C75F5;
		color: #fff;
	}
</style>
