<template>
	<view class="preview">
		<!-- 这里是一个轮播图 scrollview ? swiper 是不是都可以-->
<!-- 		<image src="/common/images/preview1.jpg" mode=""></image> -->
		<swiper class="swiper" circular>
			<swiper-item v-for="item in imageList" :key="item._id">
				<image :src="item.smallPicurl" mode="aspectFill" @click="toggleMask"></image>
			</swiper-item>
		</swiper>
		
		<!-- mask层有问题，还有就是从分类点击 进到 预览页时，要显示当前点击的这张图 -->
		<!-- mask -->
		<view class="mask" v-show="!hiddenMask" >
			<view class="goBack" :style="{height:goBackBarHeight + 'px' , top: getStatusBarHeight() + 'px'}"
			@click="handleGoBack"
			>
				<uni-icons type="back" size="20" color="#fff" ></uni-icons>
			</view>
			<view class="count">3 / 9</view>
			<view class="time">
				<uni-dateformat :date="new Date()" format="hh:mm"></uni-dateformat>
			</view>
			<view class="date">
				<uni-dateformat :date="new Date()" format="MM月dd日"></uni-dateformat>
			</view>
			<view class="footer">
				<view class="box" @click="popInfo">
					<uni-icons type="info" size="30"></uni-icons>
					<view class="text">
						信息
					</view>
				</view>
				<view class="box" @click="popScore">
					<uni-icons type="star" size="30"></uni-icons>
					<view class="text">
						评分
					</view>
				</view>
				<view class="box">
					<uni-icons type="download" size="26"></uni-icons>
					<view class="text">
						下载
					</view>
				</view>
			</view>
		</view>
		
		<!-- 信息弹窗 -->
		<uni-popup ref="infoPopupRef"  type="bottom">
			<view class="info-popup">
				<view class="popHeader">
					<view></view>
					<view class="title">
						壁纸信息
					</view>
					<uni-icons type="closeempty" size="20" class="close" @click="cloesInfoPopup"></uni-icons>
				</view>
				<scroll-view scroll-y="true" class="scroll-view-info" >
					<view class="content">
						<view class="row" >
							<view class="label">壁纸ID：</view>
							<view class="value">
								<text>asdadadadweq</text>
							</view>
						</view>
						
						<view class="row" >
							<view class="label">分类：</view>
							<view class="value category">
								<text>明星美女</text>
							</view>
						</view>
						
						<view class="row" >
							<view class="label">发布者：</view>
							<view class="value">
								<text>樱桃小丸子</text>
							</view>
						</view>
						
						<view class="row" >
							<view class="label">评分：</view>
							<view class="value rate">
								<uni-rate :max="5"  v-model="imgScore" touchable="false" readonly allowHalf/>
								<text class="score">{{imgScore}}分</text>
							</view>
						</view>
						
						<view class="row" >
							<view class="label">摘要：</view>
							<view class="value">
								<text>NBACFAF啊第几集啊啊实打实的就阿山 </text>
							</view>
						</view>
											
						<view class="row" >
							<view class="label">标签：</view>
							<view class="value tabs">
								<view class="tab" v-for="item in 3" :key="item">
									标签{{item}}
								</view>
							</view>
						</view>
						
						<view class="copyright">
							声明：本图片来用户投稿，非商业使用，用于免费学习交流，如侵犯了您的权益，您可以拷贝壁纸ID举报至平台，邮箱2498492824@qq.com，管理将删除侵权壁纸，维护您的权益。
						</view>
					</view>
				</scroll-view>
			</view>
			
		</uni-popup>
		
		<!-- 评分弹窗 -->
		<!-- uniapp渲染在小程序中，uni-popup组件是一个包裹层，他身上是没有 uni-popup类的 -->
		<uni-popup ref="scorePopupRef"  class="score"  :is-mask-click="false">
			<view class="score-popup" >
				<view class="popHeader">
					<view></view>
					<view class="title">
						壁纸信息
					</view>
					<uni-icons type="closeempty" size="20" class="close" @click="cloesScorePopup"></uni-icons>
				</view>
				
				<view class="rate">                
					<uni-rate :max="5" v-model="imgScore" allowHalf />
					<text>{{imgScore}}分</text>
				</view>
				
				<view class="btn">
					<button type="default" size="mini" :disabled="!imgScore" plain @click="handleScore">确认评分</button>
				</view>
				
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
	
	import { getTitleBarHeight ,getStatusBarHeight} from "@/utils/system.js"
	const imageList = ref([])
	
	onLoad(()=>{
		// 从缓存中获取之前的数据
		const storageClassList = uni.getStorageSync("classList")
		// console.log("classList",storageClassList)
		imageList.value = storageClassList
	})
	
	const hiddenMask = ref(true)
	const toggleMask = ()=>{
		hiddenMask.value = !hiddenMask.value
	}
	
	// 返回按钮
	const goBackBarHeight = ref( getTitleBarHeight() )
	const handleGoBack = ()=>{
		uni.navigateBack()
	}
	// 信息框
	const infoPopupRef = ref(null)
	const popInfo = ()=>{
		infoPopupRef.value.open()
	}
	const cloesInfoPopup = ()=>{
		infoPopupRef.value.close()
	}

	
	// 评分
	const imgScore = ref(3.5)
	const scorePopupRef = ref(null)
	
	const handleScore = ()=>{
		console.log("平分了")
	}
	
	const popScore = ()=>{
		console.log("mark")
		scorePopupRef.value.open()
	}
	const cloesScorePopup = ()=>{
		scorePopupRef.value.close()
	}

</script>

<style lang="scss" scoped>
.preview{
	position: relative;
	width: 100%;
	height:100vh;
	background-color: lightblue;
	.swiper{
		width: 100%;
		height: 100%;
		image{
			width: 100%;
			height: 100%;
		}
	}
	
	.mask{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
			
		&>view{
			position: absolute;
			left: 0;
			right: 0;
			margin: 0 auto;
			width: fit-content;
			color: #fff;
		}
		.goBack{
			width: 38px;
			height: 38px;
			left: 30rpx;
			margin:0;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: rgba(0, 0, 0, 0.5);
			backdrop-filter: blur(10rpx);
			border:1px solid rgba(255, 255, 255, 0.3);
			border-radius: 100%;
		}
		
		.count{
			top:10vh;
			padding: 8rpx 28rpx;
			font-size: 28rpx;
			border-radius: 40rpx;
			background-color: rgba(0, 0, 0, 0.3);
			backdrop-filter: blur(10rpx);
		}
		
		.time{
			font-size: 140rpx;
			top: calc(10vh + 80rpx);
			font-weight: 100;
			line-height: 1em;
			text-shadow: 0 4rpx rgba(0, 0, 0, 0.3);
		}
		
		.date{
			font-size: 34rpx;
			top: calc(10vh + 230rpx);
			text-shadow: 0 2rpx rgba(0, 0, 0, 0.3);
		}
		.footer{
			background: rgba(255, 255, 255, 0.8);
			bottom: 10vh;
			width: 65vw;
			height: 120rpx;
			border-radius: 120rpx;
			color: #000;
			display: flex;
			justify-content: space-around;
			align-items: center;
			box-shadow: 0 2rpx 0 rgba(0, 0, 0, 0.1);
			backdrop-filter: blur(20rpx);
			
				.box{
					padding: 2rpx 10rpx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					.text{
						font-size: 26rpx;
						color: $text-font-color-2;
					}
				}
		}
	}
	
	.info-popup{
		padding: 30rpx;
		border-radius: 30rpx 30rpx 0 0;
		background-color: #fff;
		
		.scroll-view-info{
			max-height: 60vh;
			
			.content{
				.row{
					display: flex;
					align-items: center;
					padding: 16rpx 0;
					.label{
						width: 140rpx;
						text-align: right;
						font-size: 30rpx;
						color: $text-font-color-3;
					}
					.value{
						flex: 1;
						&.category{
							color:$brand-theme-color;
						}
						
						&.rate{
							display: flex;
							align-items: center;
							.score{
								font-size: 26rpx;
								color: $text-font-color-2;
								padding: 10rpx;
							}
						}
						
						&.tabs{
							display: flex;
							flex-wrap: wrap;
							align-items: center;
							gap:15rpx 20rpx;
							.tab{
								border:1px solid $brand-theme-color;
								color: $brand-theme-color;
								font-size: 22rpx;
								padding: 10rpx 30rpx;
								border-radius: 40rpx;
								margin: 0 20rpx 15rpx 0;
							}
						}
					}
				}
				
				.copyright {
					font-size: 28rpx;
					padding: 20rpx;
					background: #F6F6F6;
					color: #666;
					border-radius: 10rpx;
					margin: 20rpx 0;
					line-height: 1.6em;
				}
			}
		}
	}
	
	.score-popup{
		padding: 30rpx;
		width: 70vw;
		border-radius:30rpx;
		background-color: #fff;
		
		.rate{
			padding: 30rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			text{
				margin-left: 20rpx;
			}
		}
		
		.btn{
			padding: 10rpx 0;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

}

.popHeader{
	display: flex;
	justify-content: space-between;
	align-items: center;
	.title{
		color: $text-font-color-2;
		font-size: 26rpx;
	}
	.close{
		padding: 6rpx;
	}
}
</style>
