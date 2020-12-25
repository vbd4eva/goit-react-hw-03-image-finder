import {Component} from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import ApiService from '../../js/apiService';
import PropTypes from 'prop-types';
import LoadMore from './LoadMore/LoadMore';

class ImageGallery extends Component {

    state = {
        fetchedImages: [],
    }

    apiService = new ApiService();

    async fetchImagesOnNewSearch(searchQuery) {
        // console.log('фетчим запрос : ', this.props.searchQuery);
        // this.apiService = new ApiService();

        const justFetchedImages = await this.apiService.getImages(searchQuery)
            .then(images => images);      
        
        //    console.log('пришли с бєкЄнда', justFetchedImages);
        
        this.setState(({ fetchedImages: prevFetchedImages }) => { 
            const fetchedImages = [...prevFetchedImages, ...justFetchedImages];
            return { fetchedImages };
        });

    
        
        // console.log('в стейте', this.state.fetchedImages);
        console.dir(this.apiService.options);
    }

    componentDidMount() { 
        console.log("Я Смотнтировался !!!!    - ImageGallery");
        this.fetchImagesOnNewSearch(this.props.searchQuery);
    }

    componentDidUpdate(prevProps, prevState) {

        const prevsearchQuery = prevProps.searchQuery;

        console.log("Я перерендыриваюсь !!!!  componentDidUpdate  - ImageGallery", Date.now());

        if (this.props.searchQuery !== prevsearchQuery) {

            this.setState({ fetchedImages: [] });
            console.log("обновилась строка поиска");
            this.fetchImagesOnNewSearch(this.props.searchQuery);
       }

    }

    loadMore = () => {
        console.log("ImageGalery load MOre");
        this.fetchImagesOnNewSearch();
    }

    render() {
        return (
            <>
                <ul className="ImageGallery">
                    {this.state.fetchedImages.map(
                        ({id, webformatURL, largeImageURL, tags}) =>
                        (<ImageGalleryItem key={id}
                            src={webformatURL}
                            largeImageURL={largeImageURL}
                            alt={tags}
                        />)
                        //    img => console.log(img.tags)
                    )}
                    
                    {/* {this.state.fetchedImages.map(singleImg =>)} */}
                {/* <ImageGalleryItem/> */}
                </ul>

                {
                    !this.state.fetchedImages.length
                    ||
                    <LoadMore loadMore={this.loadMore}/>
                }
                

            </>
        )
    }
}

ImageGallery.propTypes = {

}

export default ImageGallery

