<template>
	<view class="userItem">
		<uni-icons :type="icon" size="26" class="icon" ></uni-icons>
		<view class="content">
			<text class="title">{{title}}</text>
			<text class="counter">0</text>
		</view>
		<uni-icons type="right" size="20" color="#aeaeae" class="arrow-right"></uni-icons>
	</view>
</template>

<script setup>
const props = defineProps({
	icon:{
		type:String,
		default:'contact'
	},
	title:{
		type:String,
		default:'我的下载'
	},
	
})
</script>

<style lang="scss" scoped>
.userItem{
	display: flex;
	align-items: center;
	padding: 20rpx 32rpx;
	border-bottom: 1px solid #f2f2f2;
	

	// 在h5中uni-icons类是直接在加这个元素上的，但是在微信中，uni-icons类是该元素内部的一个元素上的，所以选不中
	.icon {
		color:$brand-theme-color !important;
		
		/* #ifdef MP */
		:deep(text){
				color:$brand-theme-color !important;
		}
		/* #endif */
	}

	
	.content{
		flex: 1;
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		
		margin: 0 15rpx;
		.title{
			color: #3a3a3a;
		}
		.counter{
			color: #aeaeae;
		}
	}
	
	.arrow-right{
		
	}
}
</style>