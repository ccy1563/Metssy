import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

class ReviewIndexItem extends React.Component {

    render() {
        
        const { review } = this.props;
        let stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < review.rating) {
                stars.push(<StarIcon />);
            } else {
                stars.push(<StarBorderIcon />);
            }
        }

        return (
            <div className="submitted-reviews-top">
                <div className="review-email">
                    {/* <p>{this.props.fetchUser(this.props.authorId).email}</p> */}
                    <p>{this.props.review.email}</p>
                </div>
                <div className="review-rating">
                    <p>{stars}</p>
                </div>
                <div className="review-body">
                    <p>{review.body}</p>
                </div>
                <Link to={`/reviews/${review.id}/edit`}><button>Edit</button></Link>
            </div>
        )
    }
}

export default ReviewIndexItem;