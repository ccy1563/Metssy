import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

class ReviewIndexItem extends React.Component {

    render() {
        
        const { review } = this.props;
        // debugger    
        let stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < review.rating) {
                stars.push(<StarIcon key={i}/>);
            } else {
                stars.push(<StarBorderIcon key={i}/>);
            }
        }

        // if (this.props.authorId === this.props.currentUserId)
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
                {this.props.authorId === this.props.currentUserId ? <Link to={`/reviews/${review.id}`}><button>Edit</button></Link> : null}
                {/* <button className="review-edit-modal-button" onClick={() => this.props.openModal('editReview')}>Edit</button> */}
            </div>
        )
    }
}

export default ReviewIndexItem;