<template>
	<view class="themeItem">
		<navigator url="/pages/classList/classList" class="content"  v-if="!isMore">
			<view class="top">
				<text class="text">2天前更新</text>
			</view>
			<image class="pic" :src="classItem.picurl" mode="aspectFill"></image>
			<view class="bottom">
				{{classItem.name}}
			</view>
		</navigator>
		
		<!-- 跳转tabbar页面，必须设置open-type="switchTab"  -->
		<navigator url="/pages/classify/classify" open-type="switchTab" class="content more" v-if="isMore">
			<image class="pic" src="/common/images/more.jpg" mode="aspectFill"></image>
			<view class="mask">
				<uni-icons type="more-filled" size="38" color="#fff"></uni-icons>
				<text class="mask-text">更多</text>
			</view>
		</navigator>
	</view>
</template>

<script setup>
const props = defineProps({
	isMore:{
		type:Boolean,
		default:false,
	},
	classItem:{
		type:Object,
		// 默认是一个对象，还要规定内部的属性
		default(){
			return {
				name:"",
				picurl:"",
				updateTime:''
			}
		}
	}
})
</script>

<style lang="scss" scoped>
.themeItem{
	
	.content{
		width: 220rpx;
		height: 340rpx;
		position: relative;
		border-radius: 10rpx;
		overflow: hidden;
		
		.top{
			position: absolute;
			left: 0;
			top:0;
			padding: 6rpx 14rpx;
			border-radius: 0 0 20rpx 0;
			background-color: rgba(250, 129, 90, 0.7);
			backdrop-filter: blur(20rpx);
			color: #fff;
			font-size: 22rpx;
			// 通常最小字体是12px，还想小可以试试scale
			transform-origin: left top;
			transform: scale(0.8);
			z-index:1
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
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: rgba(0, 0, 0, 0.4);
			backdrop-filter: blur(10rpx);
			color: #fff;
			font-size: 22rpx;
		}
	
	}
	
	// more
	.content.more{
		.pic{
			width: 100%;
			height: 100%;
		}
		.mask{
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			background-color: rgba(0, 0, 0, 0.5);
			backdrop-filter: blur(15rpx);
			
			.mask-text{
				color:#fff;
				font-size: 18rpx;
			}
		}
	}
	
}
</style>