<template>
	<view class="container">
		<view class="menu">
			 <uni-segmented-control :current="currentTab" :values="tabArr" @clickItem="onClickItem" 
			 styleType="button" activeColor="#4cd964">
			 </uni-segmented-control>
		</view>
		
		<view class="layout">
				<view class="box" v-for="(item,index) in pets" :key="item._id">
					<view class="pic" @click='preview(index)'>
						<image  lazy-load :src="item.url" mode="widthFix"></image>
					</view>
					<view class="text">{{item.content}}</view>
				</view>
		</view>
		
		<view class="toolbar">
			<view class="item" @click="refresh">
				<uni-icons type="refreshempty" size="30"></uni-icons>
			</view>
			<view class="item" @click="goTop">
				<uni-icons type="arrow-up" size="30"></uni-icons>
			</view>
		</view>
		
		<view class="loading">
			<uni-load-more status="loading"></uni-load-more>
		</view>
	</view>
</template>

<script setup>
import { computed } from 'vue'


const pets = ref([])
const imageUrls = computed(()=>{
	return pets.value.map((item)=>{
		return item.url
	})
})
function getData(){
		// 开启加载动画
	uni.showNavigationBarLoading()
	uni.request({
		url:"https://tea.qingnian8.com/tools/petShow",
		data:{
			size:5,
			type:imgType.value
		},
		header:{
			"access-key":'xxjgetkey$'
		}
	}).then((res)=>{
		// 网络请求结果别忘记校验
		const code = res.data.errCode
		// 针对请求成功的情况
		if(code === 0){
			pets.value = [...pets.value,...res.data.data]
		}
		// 针对accesskey出错或过期等问题
		else if(code === 400){
			// 给出错误提示
			uni.showToast({
				title:res.data.errMsg,
				icon:'none'
			})
		}
	})
	// 针对其它错误情况，比如url写错了
	.catch((err)=>{
		uni.showToast({
			title:"请求出错，请检查后重新请求",
			icon:'none'
		})
	})
	// 结束加载动画
	.finally(()=>{
		// 隐藏顶部加载图标
		uni.hideNavigationBarLoading()
		// 停止下拉刷新动画
		uni.stopPullDownRefresh()
	})
}


// 点击图片预览
const preview = (index)=>{
	// console.log(index)
	// console.log(imageUrls.value)
	uni.previewImage({
		urls:imageUrls.value,
		current:index
	})
}


// 触底加载更多
onReachBottom(()=>{
	// console.log("触底l")
	getData();
	console.log(pets.value)
})

// 下拉刷新
onPullDownRefresh(()=>{
	pets.value = []
	getData();
})

// 刷新按钮
const refresh = ()=>{
	uni.startPullDownRefresh()
}

// 返回顶部
const goTop = ()=>{
	uni.pageScrollTo({
		scrollTop:0
	})
}

const currentTab = ref(0)
const clssify = [
	{key:"all",value:"全部"},
	{key:"cat",value:"猫猫"},
	{key:"dog",value:"狗狗"}
]
const tabArr = computed(()=>{
	return clssify.map(item=>item.value)
})
const imgType = computed(()=>{
	return clssify[currentTab.value]["key"]
})

const onClickItem = (e)=>{
	currentTab.value = e.currentIndex
	pets.value = []
	getData()
}


getData()
</script>

<style scoped lang="scss">
.container{
	.menu{
		// margin-top: 50rpx;
		padding: 50rpx 50rpx 0rpx 50rpx;
		position: sticky;
		top:0;
		z-index: 10;
	}
	.layout{
		padding: 50rpx;
		.box{
			box-shadow: 0 10rpx 40rpx rgba(0,0,0,0.08);
			margin-bottom: 60rpx;
			border-radius: 15rpx;
			overflow: hidden;
			.pic{
				image{
					display: inline-block;
					vertical-align: middle;
					width: 100%;
				}
			}
			
			.text{
				padding :30rpx 0;
				text-align: center;
			}
		}
	}
	.toolbar{
		position: fixed;
		right: 30rpx;
		bottom: 80rpx;
		padding-bottom: env(safe-area-inset-bottom);
		.item{
			width: 90rpx;
			height: 90rpx;
			background: rgba(255,255,255,0.9);
			border-radius: 50%;
			margin-bottom: 20rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			border: 1px solid #eee;
		}
	}
	
	.loading{
		padding-bottom: calc(env(safe-area-inset-bottom) + 30rpx);
	}

}

</style>
