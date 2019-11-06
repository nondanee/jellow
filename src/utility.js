const timeFormat = (post, subtle = true) => {
    post = new Date(post)
    
    const date = () => {
        return (post.getFullYear() === (new Date()).getFullYear() ? '' : `${post.getFullYear()} `) + `${post.getMonth() + 1}/${post.getDate()}`
    }

    const time = () => {
        const stringify = number => ('0' + number).slice(-2)
        return post.getHours() + ':' + stringify(post.getMinutes())
    }

	const interval = () => {
		let delta = parseInt((Date.now() - post) / 1000)
        if (delta < 60)
			return '刚刚'
		else if (delta < 3600)
			return parseInt(delta / 60) + '分钟前'
		else if (delta < 3600 * 24)
            return parseInt(delta / 3600) + '小时前'
        else if (delta < 3600 * 24 * 10)
            return parseInt(delta / (3600 * 24)) + '天前'
        else
            return date()
	}	

    return subtle ? interval() : date() + ' ' + time()
}

export {
    timeFormat
}