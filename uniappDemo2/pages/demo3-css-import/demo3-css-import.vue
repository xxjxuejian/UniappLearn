<template>
	<view class="box">
		使用公共的样式
	</view>
	<text class="custom">使用全局自定义变量</text>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
	.custom{
		color:$custom-text-color;
	}
</style>
