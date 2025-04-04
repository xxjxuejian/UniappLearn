<template>
	<view class="classLayout pageBg">
		<custom-nav-bar title="分类"></custom-nav-bar>
		<view class="classify" >
			<theme-item v-for="item in classifyList" :key="item._id" class="item" :classItem="item"></theme-item>
		</view>
	</view>
</template>

<script setup>
	import {apiGetClassify} from "@/api/apis.js"
	// 获取分类数据，就是首页专题精选的接口
	const classifyList = ref([])
	async function getClassifyData(){
		const res = await apiGetClassify({
			pageSize:15
		})
		classifyList.value = res.data
		console.log(classifyList.value)
	}
	getClassifyData()
	
	const goPreview = () => {
		uni.navigateTo({
			url:'/pages/preview/preview'
		})
	}
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
