import React from 'react'
import {timeFormat} from '../../utility'
import './repost.css'

const Repost = props => {
    // const state = {up: false}
    
    const thumbnail = () => {
        let target = props.data.target
        if ('video' in target)
            return target.video.thumbnailUrl
        else if ('pictures' in target && target.pictures.length)
            return target.pictures[0].thumbnailUrl
        else
            return target.user.avatarImage.smallPicUrl
    }

    return (
        <div className={'post repost' + (props.data.content ? '' : ' share')}>
            <div className='header'>
                <div className='avatar' style={{backgroundImage: `url(${props.data.user.avatarImage.smallPicUrl})`}}></div>
                <div className='text'>
                    <div className='user'>{props.data.user.screenName}</div>
                    <div className='related'>
                        <div className='time'>{timeFormat(props.data.actionTime)}</div>
                    </div>
                </div>
                <button className='more'></button>
            </div>
            <div className='content'>
                {props.data.content ? <div className='text'>{props.data.content}</div> : null}
                <div className='target'>
                    <div className='content'>
                        <div className='thumbnail' style={{backgroundImage: `url(${thumbnail()})`}}></div>
                        <div className='text'>{props.data.target.user.screenName + ': ' + props.data.target.content}</div>
                    </div>
                    {props.data.target.topic ? <div className='topic'>{props.data.target.topic.content}</div> : null}
                </div>
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
            </div>
        </div>
    )
}

export default Repost