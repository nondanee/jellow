import React from 'react'
import './link.css'

const Link = props => {
    // const mediaDetector = () => {
    //     if ('audio' in props.data)
    //         return 'audio'
    //     else if ('video' in props.data)
    //         return 'video'
    //     else
    //         return
    // }

    if ('audio' in props.data) {
        return (<div className='target link audio'>
            <div className='content'>
                <div className='cover' style={{backgroundImage: `url(${props.data.audio.coverUrl})`}}></div>
                <div className='text'>
                    <div className='title'>{props.data.audio.title}</div>
                    <div className='artist'>{props.data.audio.author}</div>
                </div>
            </div>
        </div>)
    }
    else {
        return (<div className='target link'>
            <div className='content'>
                <div className='thumbnail' style={{backgroundImage: `url(${props.data.pictureUrl})`}}></div>
                <div className='text'>{props.data.title}</div>
            </div>
        </div>)
    }
}

export default Link