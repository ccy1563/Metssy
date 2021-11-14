import React from 'react';
import { Link } from 'react-router-dom';
import ReviewIndexItem from './review_index_item';

import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

class ReviewIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger
        this.props.fetchReviews(this.props.product.id);
        // debugger
    }


    render() {
        // debugger
        if (!this.props.reviews) { 
            // debugger;    
            return null;
        }
        // debugger
        // debugger

        let currentUserId = undefined;
        if (this.props.currentUser) {
            currentUserId = this.props.currentUser.id;
        }

        let starSum = 0;

        const allReviews = this.props.reviews.reverse().map(review => {
            // console.log(this.props.product);
            starSum += review.rating;
            return (
                <ReviewIndexItem
                    key={review.id}
                    review={review}
                    body={review.body}
                    rating={review.rating}
                    createdAt={review.created_at}
                    productId={review.product_id}
                    authorId={review.author_id}
                    productId={this.props.product.id}
                    currentUserId={currentUserId}
                    deleteReview={this.props.deleteReview}
                    fetchReviews={this.props.fetchReviews}
                    reviews={this.props.reviews}
                    state={this.state}
                    openModal={this.props.openModal}
                    closeModal={this.props.closeModal}
                    // email={this.props.fetchUser(this.props.user)}
                />
            )
        });

        let stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < parseInt(starSum/allReviews.length)) {
                stars.push(<StarIcon key={i} />);
            } else {
                stars.push(<StarBorderIcon key={i} />);
            }
        }

        // debugger

        // debugger
        return (
            <div>
                <div className='total-reviews-top'>
                    <div className='total-num-reviews'>
                        {allReviews.length}
                    </div>
                    <div className='total-reviews-string'>
                        Reviews
                    </div>
                    <div className='total-reviews-star-avg'>
                        {stars}
                    </div>
                </div>
                <div className='total-reviews-line'></div>

                {allReviews}
            </div>
        )
    }
}

export default ReviewIndex;