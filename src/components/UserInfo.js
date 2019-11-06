import React from 'react'

const UserInfo = props => {
    return (
        <div className='user'>
            <div className='avatar' style={{backgroundImage: `url(${props.data.avatarImage.smallPicUrl})`}}></div>
            <div className='text'>
                <div className='name'>{props.data.screenName}</div>
                <div className='intro'>{props.data.briefIntro}</div>
            </div>
        </div>
    )
}

export default UserInfo