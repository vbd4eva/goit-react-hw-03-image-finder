import PropTypes from 'prop-types'

function LoadMore({loadMore}) {

    // function Load() {
    //     console.log(props.loadMore);
    //     console.log('LOAD MORE', Date.now())
    // }

    return (
        <div>
            <button type="button" className="Button" onClick={loadMore}>Load More</button>
        </div>
    )
}

LoadMore.propTypes = {

}

export default LoadMore

