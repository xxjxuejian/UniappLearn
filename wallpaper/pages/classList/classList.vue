<template>
	<view class="classList">
		<view class="content">
			<navigator url="" class="item" v-for="item in 9" :key="item">
				<image src="/common/images/preview_small.webp" mode="aspectFill"></image>
			</navigator>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
	.classList{
		.content{
				display: flex;
				flex-wrap: wrap;
				// gap:6rpx 6rpx; //行距 列距
				justify-content: space-evenly;
				
				// 学一下grid布局
			.item{
				width: 230rpx;
				height: 440rpx;
				margin-bottom: 15rpx;
				
				image{
					width: 100%;
					height: 100%; //不设置高度的问题，怎么解决
				}
			}
		}
	}
</style>
