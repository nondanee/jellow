import React from 'react'
import './gallery.css'

const Gallery = props => {
    const key = image => image.picUrl.replace(/\?.+/, '').split('/').pop()

    return (
        <div className='gallery' box={props.data.length}>
            {props.data.map(image =>
                <div className='wrap' key={key(image)}>
                    <img src={image.smallPicUrl}/>
                </div>
            )}
        </div>
    )
}

export default Gallery