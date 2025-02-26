<template>
	<view class="home">
		<view class="banner">
			<swiper indicator-dots indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#fff" 
			circular  interval="3000">
				<swiper-item>
					<image src="/common/images/banner1.jpg" mode="aspectFill"></image>
				</swiper-item>
				<swiper-item>
						<image src="/common/images/banner2.jpg" mode="aspectFill"></image>
				</swiper-item>
				<swiper-item>
						<image src="/common/images/banner3.jpg" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
.home{
	.banner{
		width: 750rpx;
		padding: 30rpx;
		border: 1px solid red;
		
		swiper{
			width: 100%;
			height: 340rpx;
			border-radius: 15rpx;
			overflow: hidden;
			
			swiper-item{
					width: 100%;
					height: 100%;
					// 图片的宽度高度确定时，图片需要按照父元素高度宽度设置，mode模式
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
}
</style>
