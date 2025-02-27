<template>
	<view class="home">
		<view class="banner">
			<swiper indicator-dots indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#fff" 
			circular  interval="3000">
				<swiper-item>
					<image src="/common/images/banner1.jpg" mode="aspectFill"></image>
				</swiper-item>
				<swiper-item>
						<image src="/common/images/banner2.jpg" mode="aspectFill"></image>
				</swiper-item>
				<swiper-item>
						<image src="/common/images/banner3.jpg" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="notice">
			<view class="left">
				<uni-icons type="sound-filled" size="20" color="#28b389"></uni-icons>
				<text class="text">公告</text>
			</view>
			<view class="center">
				<swiper  :autoplay="true" circular :interval="1500" :duration="1000" vertical>
					<swiper-item v-for="item in 3" :key='item'>
						公告大师傅似的手动阀手动阀手动阀手动阀撒打发撒打发撒打发asdasdsadas
					</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="right" size="16" color="#333"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
.home{
	.banner{
		width: 750rpx;
		padding: 30rpx 0;
		
		swiper{	
			width: 100%;
			height: 340rpx;
			
			overflow: hidden;
			
			swiper-item{
					width: 100%;
					height: 100%;
					padding: 0 30rpx;
					
					// 图片的宽度高度确定时，图片需要按照父元素高度宽度设置，mode模式
				image{
					width: 100%;
					height: 100%;
					border-radius: 15rpx;
				}
			}
		}
	}
	
	.notice{
		width: 690rpx;
		height: 80rpx;
		margin: 0 auto;
		border-radius: 80rpx;
		background-color: #f9f9f9;
		display: flex;
		align-items: center;
		
		.left{
			width:140rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			.text{
				color:#28b389;
				font-weight: 600;
			}
		}
		.center{
			flex: 1;
			height: 100%;
			line-height: 80rpx;
			swiper{
					height: 100%;
				&-item{
					// 开了flex以后，文本溢出不显示省略号了
					// display: flex;
					// align-items: center;
					height: 100%;
					color: #666;
					font-size: 30rpx;
					
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
		}
		.right{
			width: 70rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			// background-color: #28b389;
		}
	}
}
</style>
