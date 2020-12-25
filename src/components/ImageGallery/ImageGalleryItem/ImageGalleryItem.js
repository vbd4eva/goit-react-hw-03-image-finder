import React from 'react'
import PropTypes from 'prop-types'

function ImageGalleryItem({src, alt, largeImageURL}) {
    return (
        <>
            <li className="ImageGalleryItem">
                <img src={src} alt={alt} className="ImageGalleryItem-image" />    
            </li>
        </>
    )
}

ImageGalleryItem.propTypes = {

}

export default ImageGalleryItem

