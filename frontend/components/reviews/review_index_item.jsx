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
            </div>
        )
    }
}

export default ReviewIndexItem;