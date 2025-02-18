<template>
	<view class="out">
		<checkbox-group  @change="itemChange">
		<view class="item" v-for="(item,index) in goods" :key="index">
			<checkbox :value="item.id" :checked='item.checked'></checkbox>
			<text class="title">{{item.name}}</text>
			<text class="price">{{item.price}}￥</text>
			<text class="del" @click='remove(index)'>删除</text>
		</view>
		</checkbox-group>
		
		<view>
			<text>选中了{{totalCount}}个商品，总价：{{totalPrice}}元</text>
		</view>
		
		<!-- <view>{{goods}}</view> -->
	</view>
</template>

<script setup>
	import {computed, ref} from 'vue'
	const goods = ref([
		{id:"1",name:"小米",price:1999,checked:false},
		{id:"2",name:"oppo",price:2999,checked:false},
		{id:"3",name:"vivo",price:3999,checked:false},
		{id:"4",name:"苹果",price:4999,checked:false},
	])
	const remove = (index)=>{
		goods.value.splice(index,1)
	}
	
	const selectedGroup = ref([])
	const totalCount = computed(()=>{
		return selectedGroup.value.length
	})
	const totalPrice = computed(()=>{
		return goods.value.filter((item)=>item.checked).reduce((prev,cur)=>prev + cur.price,0)
	})
	const itemChange = (e)=>{
		selectedGroup.value = e.detail.value
		goods.value.forEach((item)=>{
			item.checked  = selectedGroup.value.includes(item.id)
		})
	}
</script>

<style lang="scss" scoped>
	.out {
		.item {
			.title{
				
			}
			.price{
				margin-left: 20px;
			}
			.del {
				margin-left: 20px;
				color:red
			}
		}
	}
</style>
