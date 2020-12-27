import PropTypes from 'prop-types';
import s from './LoadMore.module.css';


export default function LoadMore(props) {

    function onClick() {
        console.log("before loadMore()");
        props.loadMore();
        console.log("after loadMore()");

    }

        return (
            <>
                <button type="button" className={s.Button} onClick={onClick}>Load More</button>
            </>
        )

}

    LoadMore.propTypes = {
        loadMore: PropTypes.func.isRequired,
    }