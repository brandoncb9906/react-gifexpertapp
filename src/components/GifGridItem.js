import React from 'react'

export default function GifGridItem({title, url}) {

    return (
        <div className='card animate__animated animate__pulse'>  
            <img src={ url } alt={ title }/>
            <h5>{title}</h5>
            
        </div>
    )
}
