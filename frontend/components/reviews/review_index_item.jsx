import React from 'react';
import { Link } from 'react-router-dom';

class ReviewIndexItem extends React.Component {

    render() {
        
        const { review } = this.props;
        // debugger
        return (
            <div>
                <li className="review-body">
                    <p>{review.body}</p>
                </li>
                <li className="review-rating">
                    <p>{review.rating}</p>
                </li>
            </div>
        )
    }
}

export default ReviewIndexItem;