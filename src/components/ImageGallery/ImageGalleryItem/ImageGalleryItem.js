import {Component} from 'react';
import PropTypes from 'prop-types';

import s from './ImageGalleryItem.module.css';
import Modal from '../../Modal/Modal';

class ImageGalleryItem extends Component {
    state = {
        showModal: false,
    }

    toggleModal = () => {
        this.setState(({ showModal }) =>( {
            showModal: !showModal
        }))
    }

    render() { 
        const {src, alt, largeImageURL} = this.props;
            return (
        <>
            <li className={s.ImageGalleryItem}>
                <img src={src} alt={alt} onClick={this.toggleModal} className={s.ImageGalleryItemImage} />    
            </li>
            {
                this.state.showModal && <Modal src={largeImageURL} alt={alt} onClose={this.toggleModal}/>
            }
        </>
    )
    }
}

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
}

export default ImageGalleryItem

