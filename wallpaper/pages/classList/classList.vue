<template>
	<!-- 刚进来，数据还在加载，显示加载中 -->
	<view class="loadMore" v-if="!pageData.length && !isNodata">
		<uni-load-more status="loading"></uni-load-more>
	</view>
	
	<view class="classList">
		<view class="content">
			<navigator url="/pages/preview/preview" class="item" v-for="item in pageData" :key="item._id">
				<image :src="item.smallPicurl" mode="aspectFill"></image>
			</navigator>
			
			<navigator url="/pages/preview/preview" class="item end">
			</navigator>
		</view>
	</view>

	<view class="loadMore" v-if="isNodata">
		<uni-load-more status="noMore"></uni-load-more>
	</view>
	
	<view class="loadMore" v-if="isLoading && pageData.length !== 0">
		<uni-load-more status="loading"></uni-load-more>
	</view>
	
</template>

<script setup>
	const prop = defineProps(["id","name"])
	import {apiGetClassifyList} from "@/api/apis.js"
	import {onLoad,onReachBottom,onPullDownRefresh} from "@dcloudio/uni-app"
	onLoad((e)=>{
		console.log("生命周期",e)
		const {id=null,name=""} = e
		if(id){
			queryParams.classid = id
		}
		getPageData(id)
		
		uni.setNavigationBarTitle({
			title:name
		})
	})
	
	// 判断是否 获取了全部数据
	let isNodata = ref(false)
	const isLoading = ref(false)
	// 查询参数
	const queryParams = {
		classid:undefined,
		pageNum:1,
		pageSize:12
	}
	
	// 获取页面数据
	const pageData = ref([])
 	async function getPageData(){
		
		const res = await apiGetClassifyList(queryParams)
		console.log("res",res.data)
		/* 如果这次返回的数据量少于12，说明没有数据了，不要再次发送网络请求了 */
		if(res.data.length < queryParams.pageSize){
			isNodata.value = true
		}
		pageData.value = [...pageData.value,...res.data]
		
		// 每次都保存到缓存中
		uni.setStorageSync('classList',pageData.value)
	}
	
	
	// 触底加载更多,要做一次节流(n秒内,只运行一次，重复触发，只执行一次)，避免发送多次网络请求
	// 防抖(n秒后执行的事件，在n秒内再次触发，则重新计时)
	onReachBottom( async ()=>{
		// 没有数据时，触底直接返回
		if(isNodata.value) return 
		
		isLoading.value = true
		
		queryParams.pageNum++
		await getPageData()
		
		isLoading.value = false
		console.log(isLoading.value)
	})
		
	
	// 下拉刷新
	onPullDownRefresh(async ()=>{
		queryParams.pageNum = 1
		await getPageData()
		uni.stopPullDownRefresh();
	})
	
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
				&.end{
					height: 0;
				}
				image{
					width: 100%;
					height: 100%; //不设置高度的问题，怎么解决
				}
			}
		}
	}
</style>
