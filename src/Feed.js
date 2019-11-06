import React, {Component} from 'react'
import session from './session'
import Post from 'components/post'


class Feed extends Component {
	state = {data: []}
	path = ''
	payload = {}

    constructor(props) {
        super(props)
		this.path = props.path
		this.payload = props.payload || {}
		this.refresh = this.refresh.bind(this)
		this.loadMore = this.loadMore.bind(this)
    }

	loading = false
	loadMore () {
		if (this.loading) return
		console.log('loadMore', this.payload)
		this.loading = true
		return session(this.path, {method: 'POST', body: JSON.stringify(this.payload)})
		.then(body => {
			this.loading = false
			this.payload.loadMoreKey = body.loadMoreKey
			this.setState({data: this.state.data.concat(body.data)})
		})
	}

	refresh () {
		this.payload.loadMoreKey = null
		this.setState({data: []})
		this.loadMore()
	}

	componentDidMount () {
		this.loadMore()
	}

	render () {
		return (
			<div className='feed'>
				{this.state.data.map(post => <Post data={post} key={post.id}></Post>)}
			</div>
		)
	}
}

export default Feed