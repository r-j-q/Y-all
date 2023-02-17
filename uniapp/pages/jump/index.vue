<!-- 设置 -->
<template>
  <view>
   
  </view>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {
        token: uni.getStorageSync('token')
    };
  },
 computed: {
 ...mapGetters(['initShop', 'homeTemplate', 'hasTemplate', 'isLogin', 'userInfo' ])
 },
  onShow() {
  	console.log("this.authType=====",typeof this.token)
  			 
  	if (this.token == '') {
  		uni.navigateTo({
  			url: "/pages/user/login"
  		}) 
  	}else{
		uni.switchTab({
			url:"/pages/index/index"
		})
	}
  },
 
  methods: { 
	  
  },
};
</script>

<style lang="scss"> 
</style>
