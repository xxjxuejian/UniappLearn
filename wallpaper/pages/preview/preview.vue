<template>
	<view class="preview">
		<!-- 这里是一个轮播图 scrollview ? swiper 是不是都可以-->
<!-- 		<image src="/common/images/preview1.jpg" mode=""></image> -->
		<swiper class="swiper" >
			<swiper-item v-for="item in 5" :key="item">
				<image src="/common/images/preview1.jpg" mode="aspectFill" @click="toggleMask"></image>
			</swiper-item>
		</swiper>
		
		<!-- mask -->
		<view class="mask" v-show="!hiddenMask" >
			<view class="goBack"></view>
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
				<view class="box" @click="markImage">
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
		<uni-popup ref="scorePopupRef" background-color="#fff"  >
			<view class="score-popup" >
				<view class="popHeader">
					<view class=""></view>
					<view class="title">壁纸信息</view>
					<uni-icons type="closeempty" size="20" class="close"></uni-icons>
				</view>
				
				<uni-rate :max="5" :value="2" />
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
	const hiddenMask = ref(false)
	const toggleMask = ()=>{
		hiddenMask.value = !hiddenMask.value
	}
	
	// 信息框
	const infoPopupRef = ref(null)
	const popInfo = ()=>{
		infoPopupRef.value.open()
	}
	const cloesInfoPopup = ()=>{
		infoPopupRef.value.close()
	}
	
	const imgScore = ref(3.5)
	
	// 评分
	const markImage = ()=>{
		console.log("mark")
		scorePopupRef.value.open()
	}
	const scorePopupRef = ref(null)
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
		width: 500rpx;
		height: 300rpx;
		padding: 20rpx;
		border-radius: 30rpx;
		// overflow: hidden;
		
		.popHeader{
			display: flex;
			justify-content: space-between;
			border: 1px solid red;
			
			.title{
				color: $text-font-color-2;
				font-size: 26rpx;
			}
			.close{
				padding: 6rpx;
			}
		}
		

	}
}
</style>
