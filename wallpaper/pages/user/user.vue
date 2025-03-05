<template>
	<view class="userLayout">
			<view class="userInfo">
				<image src="/static/images/xxmLogo.png" mode="" class="avatar"></image>
				<view class="ip">
					IP：192.168.1.35
				</view>
				<view class="area">
					来自：浙江
				</view>
			</view>
			
			<view class="section">
				<user-item class="section-item" icon="download" title="我的下载"></user-item>
				<user-item class="section-item" icon="star-filled" title="我的评分"></user-item>
				<view class="contact-us-wx">
					<user-item class="section-item" icon="chat-filled" title="联系客服"></user-item>
				</view>
					<!-- <button open-type="contact">联系我们</button> -->
			</view>
			
			<view class="section">
				<user-item class="section-item" icon="notification-filled" title="订阅更新"></user-item>
				<user-item class="section-item" icon="flag-filled" title="常见问题"></user-item>
			</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
	.userLayout{
		.userInfo{
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 50rpx 0;
			
			.avatar{
				width: 160rpx;
				height: 160rpx;
				border-radius: 50%;
			}
			.ip{
				font-size: 44rpx;
				color: #333;
				padding: 20rpx 0 5rpx;
			}
			.area{
				font-size: 28rpx;
				color: #aaa;
			}
		}
	
		.section{
			width: 690rpx;
			margin: 0 auto;
			margin-bottom: 50rpx;
			
			border: 1px solid #f2f2f2;
			border-radius: 10rpx;
			box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.2);
			
			&-item{
				&:last-child{
					border-bottom: none;
				}
			}
			
		}
	}
</style>
