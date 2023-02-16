<template>
	<view class="fill-top-bottom">
		<u-icon v-if="Index>0 && Index<4" class="play-left-fill-top" name="play-left-fill"
			:color="current == Index ? '#7C75F5':'#999'"></u-icon>
		<u-icon v-if="Index>0 && Index<4" class="play-left-fill-bottom" name="play-right-fill"
			:color="current == Index? '#7C75F5':'#999’'"></u-icon>

	</view>
</template>

<script>
	export default {
		props: ['Index',
		'current'],

		data() {
			return {
				percentage: 80
			}
		},
		watch: {

		},
		methods: {


		},

	}
</script>

<style scoped lang="scss">
	.line-progress-w {
		width: 100%;
		// margin: 0 auto;
	}

	.fill-top-bottom {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center; 	
}
	
.play-left-fill-top {
		transform: scale(0.5) rotate(90deg);

	}

	.play-left-fill-bottom {
		margin-top: -14upx;
		transform: scale(0.5) rotate(90deg);
	}
</style>
