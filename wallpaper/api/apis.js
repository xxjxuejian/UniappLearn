import {request} from "../utils/request.js"

// 获取轮播
export function apiGetBanners(data={}){
	return request({
		url:'/homeBanner',
		method:'get',
		data,
	})
}

// 获取通知
export function apiGetNoticeList(data={}){
	return request({
		url:'/wallNewsList',
		method:'get',
		data,
	})
}

// 获取每日推荐
export function apiGetRandomRec(data={}){
	return request({
		url:'/randomWall',
		method:'get',
		data,
	})
}

// 获取分类
export function apiGetClassify(data={}){
	return request({
		url:'/classify',
		method:'get',
		data,
	})
}


// 获取某一个类别下的详情数据列表
export function apiGetClassifyList(data={}){
	return request({
		url:'/wallList',
		method:'get',
		data,
	})
}

