// 最好的方法是不是放到全局来保存

export const  getStatusBarHeight = ()=>{
	const SYSTEM_INFO = uni.getSystemInfoSync()
	// #ifdef H5
			return 10
	// #endif
	
	// #ifdef MP-WEIXIN
			return SYSTEM_INFO.statusBarHeight 
	// #endif
}

export const getTitleBarHeight = ()=>{
	if(uni.getMenuButtonBoundingClientRect){
		const MENU_BUTTON_INFO = uni.getMenuButtonBoundingClientRect()
		const  { height, top } =  MENU_BUTTON_INFO
		const navbarHeight = ref( (top - getStatusBarHeight() ) * 2 + height )
		return navbarHeight
	}
	else{
		return 40
	}
}