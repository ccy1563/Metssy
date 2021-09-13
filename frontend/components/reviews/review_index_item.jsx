import React from 'react';
import { Link } from 'react-router-dom';

class ReviewIndexItem extends React.Component {

    render() {
        
        const { review } = this.props;
        // debugger
        return (
            <div>
                <div className="review-body">
                    <p>{review.body}</p>
                </div>
                <div className="review-rating">
                    <p>{review.rating}</p>
                </div>
                <button>
                    {/* <Redirect to={{
                        pathname: '/reviews/${review.id}/edit',
                        product: this.props.product
                    }} /> */}
                    <Link to={`/reviews/${review.id}/edit`}>Edit</Link>
                </button>
            </div>
        )
    }
}

export default ReviewIndexItem;