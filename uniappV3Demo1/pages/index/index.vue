<template>
	<!-- hover-class 指的是 手指按住元素时的样式，h5，小程序没有类似pc的hover效果，所以这里指的是按住时的样式 
	
	hover-stay-time="0" 手指松开后点击态保留时间，单位毫秒-->
	<view class="box1" hover-class="box1Hover" >
		box1盒子
		<!-- hover-stop-propagation阻止事件的冒泡 ，inner点击以后，触发hover-class ，同时点击事件向外传播，box1也触发了hover-class、
		给inner设置 hover-stop-propagation就可以，但是注意文档上的，有些小程序不支持这个属性
		-->
			<view class="inner" hover-stop-propagation  hover-class="innerHover">
				inner box
			</view>
	</view>
	
	<view>----------------------------</view>
	<view>
		<view>view元素内部的文本无法被选中</view>
		<text selectable>text元素可以设置selectable属性让文本被选中等等</text>
	</view>

	<view>----------------------------</view>
	<scroll-view scroll-y="true" class="scrollViewY" >
		<view>垂直滚动</view>
		<view>垂直滚动</view>
		<view>垂直滚动</view>
		<view>垂直滚动</view>
		<view>垂直滚动</view>
		<view>垂直滚动</view>
		<view>垂直滚动</view>
		<view>垂直滚动</view>
		<view>垂直滚动</view>
		<view>垂直滚动</view>
		<view>垂直滚动</view>
		<view>垂直滚动</view>
	</scroll-view>
	
	
	<view>----------------------------</view>
	<scroll-view scroll-y scroll-x class="scrollViewX" >
		<view class="item">水平滚动</view>
		<view class="item">水平滚动</view>
		<view class="item">水平滚动</view>
		<view class="item">水平滚动</view>
		<view class="item">水平滚动</view>
		<view class="item">水平滚动</view>
		<view class="item">水平滚动</view>
		<view class="item">水平滚动</view>
		<view class="item">水平滚动</view>
		<view class="item">水平滚动</view>
		<view class="item">水平滚动</view>
		<view class="item">水平滚动</view>
		<view class="item">水平滚动</view>
		<view class="item">水平滚动</view>
	</scroll-view>
	
	<view>----------------------------</view>	
	<swiper indicator-dots="true"  interval="3000" duration="1000" class="swiper" circular >
		<swiper-item>
			<view class="swiper-item">111</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">222</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">333</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">444</view>
		</swiper-item>
	</swiper>
	
	<view>----------------------------</view>
	<view>
		<!-- open-type="reLaunch" 销毁当前页面，然后跳转到指定页面 -->
		<navigator url="/pages/demo1/demo1" open-type="reLaunch">跳转到demo1</navigator>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss">
	.box1{
		border: 1px solid red;
		width: 200px;
		height: 200px;
	}
	.box1Hover{
		color: green;
		background-color: darkgrey;
	}
	.inner{
		width: 100px;
		height: 100px;
		background-color: lightcoral;
	}
	.innerHover{
		color: red;
	}
	
	.scrollViewY{
		width: 80%;
		height: 200px;
		border: 1px solid red;
	}
	
	.scrollViewX{
		width: 80%;
		height: 200px;
		border: 1px solid red;
		white-space: nowrap;
		.item{
			width: 70px;
			height: 70px;
			display: inline-block;
			background-color: lightcoral;
			margin:5px;
		}
	}
	
	.swiper{
		width: 100vw;
		height: 200px;
		border: 1px solid red;
		swiper-item {
			background-color: lightblue;
		}
		swiper-item:nth-child(2n){
			background-color: lightcoral;
		}
	}
</style>
