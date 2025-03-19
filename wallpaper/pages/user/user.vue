<template>
	<view class="userLayout pageBg">
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
					<navigator url="/pages/classList/classList">
						<user-item class="section-item" icon="download" title="我的下载"></user-item>
					</navigator>
				
				<navigator url="/pages/classList/classList">
					<user-item class="section-item" icon="star-filled" title="我的评分"></user-item>
				</navigator>
				
				<view class="contact-us-wx">
					<user-item class="section-item last" icon="chat-filled" title="联系客服"></user-item>
					<!-- 小程序端联系客服必须使用 button, open-type="contact"会调用微信聊天 但是在h5中是不一样的，所以需要条件编译-->
					<!-- #ifdef MP -->
					<button open-type="contact" class="contact">微信客服</button>
					<!-- #endif -->
					<!-- #ifndef MP -->
					<button open-type="contact" class="contact" @click="callPhone" >拨打电话</button>
					<!-- #endif -->
				</view>
					
			</view>
			
			<view class="section">
				<user-item class="section-item" icon="notification-filled" title="订阅更新"></user-item>
				<user-item class="section-item last" icon="flag-filled" title="常见问题"></user-item>
			</view>
	</view>
</template>

<script setup>
const callPhone = ()=>{
	uni.makePhoneCall({
		phoneNumber: '114' 
	})
}
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
			
			
			.contact-us-wx{
				position: relative;
				
				.contact{
					position: absolute;
					top: 0;
					bottom:0;
					left: 0;
					right: 0;
					z-index: 9;
					opacity: 0;
				}
			}
			
			&-item{
				&.last{
					border-bottom: none;
				}
			}
			
		}
	}
</style>
