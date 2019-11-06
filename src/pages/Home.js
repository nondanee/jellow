import React from 'react'
import Feed from '../Feed'
import UserInfo from 'components/UserInfo'
import Refresh from '../Refresh'
import './home.css'

const Home = props => {
    return (
        <div className='home'>
            <div className='title-bar'>
                <div className='logo'></div>
                <button className='diary'></button>
                <button className='search'></button>
                <button className='message'></button>
            </div>
            <Refresh size={2} content={
                React.forwardRef((props, ref) =>
                    <React.Fragment>
                        {/* <Feed path={'personalUpdate/single'}  payload={{username: 'nondanee', limit: 20}} ref={ref[0]}></Feed> */}
                        <Feed path={'personalUpdate/followingUpdates'} ref={ref[1]}></Feed>
                    </React.Fragment>
                )
            }></Refresh>
        </div>
    )
}

export default Home