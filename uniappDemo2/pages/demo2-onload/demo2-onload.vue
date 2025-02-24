<template>
	<view class="box">
		<text>通常onLoad页面生命周期是用来接收参数，接收另外的页面传递过来的参数</text>
		<view class="" ref="vwRef">
		{{name}}--{{age}}
		</view>
	</view>
</template>

<script setup>
// import {ref} from "vue"
// import {onLoad,onReady} from "@dcloudio/uni-app"
const name = ref('')	
const age = ref(0)
const vwRef = ref(null)
onLoad((e)=>{
	console.log(e)
	name.value = e.name
	age.value = e.age
})

onReady(()=>{
	console.log("onReady中获取DOM元素",vwRef.value)
})
</script>

<style lang="scss" scoped>
	       
</style>
