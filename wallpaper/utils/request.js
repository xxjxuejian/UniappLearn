const BASE_URL = "https://tea.qingnian8.com/api/bizhi"

export  function request(config = {}){
	// 假如url都是短链
	let {
		url,
		data={},
		method='get',
		header={},
	} = config
	
	url = BASE_URL+url
	header['access-key'] = "xxjkey9824"

	return new Promise((resolve,reject)=>{
		uni.request(
		{
			url,
			data,
			method,
			header,
			success:(res)=>{
				if(res.data.errCode===0){
					resolve(res.data)
				}else if(res.data.errCode === 400){
					uni.showModal({
						title:"错误提示",
						content:res.data.errMsg,
						showCancel:false
					})
					reject(res.data)
				}else{
					uni.showToast({
						title:res.data.errMsg,
						icon:"none"
					})
					reject(res.data)
				}
			},
			fail: (err) => {
				reject(err)
			}
		}
		)
	})
}