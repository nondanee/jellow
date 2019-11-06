import React, {Component} from 'react'

class Refresh extends Component{

    constructor (props) {
        super(props)
        this.Content = props.content
        this.children = Array(props.size).fill(null).map(() => React.createRef())
        this.refresh = this.refresh.bind(this)
        this.loadMore = this.loadMore.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
        this.scrollHandler = this.scrollHandler.bind(this)
        // this.refreshController = this.refreshController.bind(this)
    }

    clickHandler () {
        this.refresh()
    }

    refresh () {
        this.children
        .filter(component => component.current && component.current.refresh)
        .forEach(component => component.current.refresh())
    }

    // componentDidMount () {
    //     console.log(this.children)        
    // }

    scrollHandler (event) {
		let element = event.target
		if (element.scrollHeight - 240 < element.scrollTop + element.clientHeight){
			this.loadMore()
		}
	}

    loadMore () {
        let last = this.children[this.children.length - 1].current
        last && last.loadMore && last.loadMore()
    }

    render () {
        return (
            <div className='container' onScroll={this.scrollHandler}>
                <button style={{color: 'red'}} onClick={this.clickHandler}>refresh</button>
                <this.Content ref={this.children}></this.Content>
            </div>
        )    
    }
}

export default Refresh