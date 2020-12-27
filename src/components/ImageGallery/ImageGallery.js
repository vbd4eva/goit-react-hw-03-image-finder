import { Component } from 'react';

import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';
import ApiService from '../../js/apiService';
import LoadMore from './LoadMore/LoadMore';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};


class ImageGallery extends Component {

    state = {
        gallery: [],
        status: Status.IDLE,
    }
    static propTypes = {
        searchQuery: PropTypes.string.isRequired,
    }

    componentDidMount() { 
        this.fetchImagesOnSearch(this.props.searchQuery);
    }

    componentDidUpdate(prevProps, prevState) {  
        const prevSearchQuery = prevProps.searchQuery;
        const prevGalleryLength = prevState.gallery.length;
        const stateGalleryLength = this.state.gallery.length;
        const isScroll = (prevGalleryLength*stateGalleryLength);


        if (this.props.searchQuery !== prevSearchQuery) {         // обновилась строка поиска
            this.setState({ gallery: [] });            

            this.fetchImagesOnSearch(this.props.searchQuery);
        }        
        else if (stateGalleryLength !== prevGalleryLength) {     
            if(isScroll) window.scrollTo({
                top: this.scroll,
                behavior: "smooth",
            });
            this.scroll = document.documentElement.scrollHeight - document.querySelector('#searchbar').scrollHeight;
        }
    }

    apiService = new ApiService();

    async fetchImagesOnSearch(searchQuery) {
        this.setState({ status: Status.PENDING });  
        //   console.log('фетчим запрос : ', this.props.searchQuery);

        const justFetchedImages = await this.apiService.getImages(searchQuery)
            .then(images => images);      

        //если бекэндотдал пустой массив
        if (!justFetchedImages.length) {
            this.setState({ status: Status.REJECTED });
            return;
        }

        // console.log(" бекэндотдал НЕ пустой массив");
        this.setState(({ gallery }) => { 
            const fetchedImages = [...gallery, ...justFetchedImages];
            return { gallery: fetchedImages };
        });

        this.setState({ status: Status.RESOLVED });

        // console.dir(this.apiService.options);
    }

    loadMore = () => {
        // console.log("ImageGalery load MOre");        
        this.fetchImagesOnSearch();
    }

    render() {
        const { status, gallery } = this.state;
        return (
            <>
                {
                    (Status.PENDING === status) && <Loader type='Rings' color="#bfbfbf" className="loader"/>
                }
                {
                    (Status.REJECTED === status) &&  (!gallery.length) && (<h1>Nothing founded</h1>)
                }
                {
                    (!gallery.length)
                    ||
                    <>
                        <ul className={s.ImageGallery}>
                            {gallery.map(
                                ({id, webformatURL, largeImageURL, tags}) =>
                                (<ImageGalleryItem key={id}
                                    src={webformatURL}
                                    largeImageURL={largeImageURL}
                                    alt={tags}
                                />)
                            )}
                        </ul>
                        
                        {(Status.RESOLVED === status) && < LoadMore loadMore={this.loadMore} />}

                        {(Status.REJECTED === status) &&  <h1>there are no more images....</h1>}
                        
                        
                    </>

                }
            </>
        )
    }
}

export default ImageGallery

