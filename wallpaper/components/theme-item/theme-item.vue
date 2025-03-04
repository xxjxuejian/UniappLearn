<template>
	<view class="themeItem">
		<view class="top">2月前更新</view>
		<image class="pic" src="/common/images/classify1.jpg" mode=""></image>
		<view class="bottom">
			可爱萌宠
		</view>
	</view>
</template>

<script setup>


</script>

<style lang="scss" scoped>
.themeItem{
	width: 220rpx;
	height: 340rpx;
	position: relative;
	border-radius: 10rpx;
	overflow: hidden;
	
	.top{
		position: absolute;
		top: 0;
		left: 0;
			width: 100%;
		background-color: rgba(0, 0, 0, 0.4);
		// background-color: black;
		color: #fff;
		font-size: 22rpx;
	}
	
	.pic{
		width: 100%;
		height: 100%;
	}
	.bottom{
		position: absolute;
		height: 70rpx;
		left: 0;
		right:0;
		bottom:0;
		// text-align: center;
		// line-height: 70rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgba(0, 0, 0, 0.4);
		color: #fff;
		font-size: 22rpx;
		
	}
}
</style>