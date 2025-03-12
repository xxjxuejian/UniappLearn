<template>
	<view class="classLayout pageBg">
		<view class="classify">
			<theme-item v-for="item in 15" :key="item" class="item"></theme-item>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
	.classLayout{
	
		.classify{
			margin: 30rpx auto;
			width: 690rpx;
			display: flex;
			flex-wrap: wrap;
			
			.item{
				margin-right: 15rpx;
				margin-bottom: 15rpx;
				&:nth-child(3n){
					margin-right:0;
				}
			}
		}
	}
</style>
