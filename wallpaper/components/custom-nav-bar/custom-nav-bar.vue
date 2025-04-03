<template>
	<!-- 小程序开发的一个问题：
		顶部的状态栏是有一个高度的，
		小程序右上角的胶囊按钮也是有高度的，
		开发页面时，需要考虑到这两个高度，然后做适配
	 -->
	 <view class="">
	 	<view class="nav-bar">
			<view class="empty-box" :style="{height:statusBarHeight+'px'}"></view>
			<view class="nav" :style="{height:navbarHeight+'px'}">
				<text class="title">{{title}}</text>
				<view class="search">
					<uni-icons type="search" ></uni-icons>
					<text class="text">搜索</text>
				</view>
			</view>
		</view>
			
		<view class="placeholder" :style="{height: statusBarHeight + navbarHeight + 'px'}">
		</view>
	 </view>
</template>

<script setup>
// 手机顶部状态栏的高度
import {getStatusBarHeight,getTitleBarHeight} from "../../utils/system.js"
const statusBarHeight = ref( getStatusBarHeight() )
const navbarHeight = ref( getTitleBarHeight() )

const prop = defineProps({
	title:{
		type:String,
		default:""
	}
})
</script>

<style lang="scss" scoped>
.nav-bar{
	// padding: 0 30rpx;
	// height: 100rpx;
	// display: flex;
	// align-items: center;
	position: fixed;
	z-index: 9;
	width: 100%;
	// border:1px solid red;
	background:
			linear-gradient(to bottom,transparent,#fff 400rpx),
			linear-gradient(to right,#beecd8 20%,#F4E2D8);
	
	.nav{
		display: flex;
		align-items: center;
		padding: 0 30rpx;
		.title{
			margin-right: 20rpx;
		}
		.search{
			display: flex;
			align-items: center;
			gap: 0 10rpx;
			padding: 0 20rpx;
			background-color: #c6d3cc;
			width: 200rpx;
			// border: 1px solid #fff;
			border-radius: 50rpx;
			color: #848d86;

		}
	}
}
</style>