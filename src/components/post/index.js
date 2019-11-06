import React from 'react'

import OriginalPost from 'components/post/OriginalPost'
import PersonalUpdate from 'components/post/PersonalUpdate'
import Repost from 'components/post/Repost'

const Post = props => {
    if (props.data.type === 'ORIGINAL_POST')
        return <OriginalPost data={props.data}></OriginalPost>
    else if (props.data.type === 'PERSONL_UPDATE')
        return <PersonalUpdate data={props.data}></PersonalUpdate>
    else if (props.data.type === 'REPOST')
        return <Repost data={props.data}></Repost>
    else
        return null
}

export default Post