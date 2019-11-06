import React, {useState, useEffect, useRef} from 'react'
import {timeFormat} from '../../utility'
import Gallery from 'components/Gallery'
import Link from 'components/Link'
import './post.css'

const OriginalPost = props => {
    const lineHeight = 21 //???

    const [fold, setFold] = useState(false)
    const [overflow, setOverflow] = useState(false)
    const textContainer = useRef(null)
    
    useEffect(() => {
        let element = textContainer.current
        if (!element) return
        let line = Math.ceil(element.scrollHeight / lineHeight)
        if (line >= 8) [setFold, setOverflow].forEach(set => set.call(null, true))
    }, [])
    
    return (
        <div className='post original'>
            <div className='header'>
                <div className='avatar' style={{backgroundImage: `url(${props.data.user.avatarImage.smallPicUrl})`}}></div>
                <div className='text'>
                    <div className='user'>{props.data.user.screenName}</div>
                    <div className='related'>
                        <div className='time'>{timeFormat(props.data.actionTime)}</div>
                        {props.data.poi ? <div className='position'>{props.data.poi.name}</div> : null}
                    </div>
                </div>
                <button className='more'></button>
            </div>
            <div className='content'>
                {props.data.content ? <div className={'text' + (fold ? ' fold': '')} ref={textContainer}>{props.data.content}</div> : null}
                {overflow ? <a className='anchor' onClick={() => setFold(!fold)}>{fold ? '展开' : '收起'}</a> : null}
                {props.data.pictures && props.data.pictures.length ? <Gallery data={props.data.pictures}></Gallery> : null}
                {props.data.linkInfo ? <Link data={props.data.linkInfo}></Link> : null}
            </div>
            <div className='bottom'>
                <div className='button-group'>
                    <button className='comment'></button>
                    {props.data.commentCount ? <div className='count'>{props.data.commentCount}</div> : null}
                </div>
                <div className='button-group'>
                    <button className='repost'></button>
                    {/* {props.data.repostCount ? <div className='count'>{props.data.repostCount}</div> : null} */}
                </div>
                {props.data.topic ? <div className='topic' label={props.data.topic.content}></div> : null}
            </div>
        </div>
    )
}

export default OriginalPost