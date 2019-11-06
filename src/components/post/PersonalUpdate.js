import React from 'react'
import {timeFormat} from '../../utility'
import UserInfo from 'components/UserInfo'
import './follow.css'

const PersonalUpdate = props => (
    <div className='post follow'>
        <div className='header'>
            <div className='avatar' style={{backgroundImage: `url(${props.data.users[0].avatarImage.smallPicUrl})`}}></div>
            <div className='text'>
                <div className='user' extra={props.data.usernames.length > 2 ? `等${props.data.usernames.length}人` : null}>
                    {props.data.users.slice(0, 2).map(user => user.screenName).join(', ')}
                </div>
                <div className='related'>
                    <div className='time'>{timeFormat(props.data.actionTime)}</div>
                </div>
            </div>
        </div>
        <div className='content'>
            {props.data.targetUsers.slice(0, 2).map(user => <UserInfo data={user} key={user.id}></UserInfo>)}
            {props.data.targetUsernames.length > 2 ? <div className='more'>查看全部{props.data.targetUsernames.length}人</div> : null}
        </div>
    </div>
)

export default PersonalUpdate