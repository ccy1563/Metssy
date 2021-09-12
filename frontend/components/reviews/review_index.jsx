import React from 'react';
import { Link } from 'react-router-dom';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger
        this.props.fetchReviews(); // debugger
    }

    render() {
        // debugger
        // const { reviews } = this.props;
        // if (!reviews) {
        //     return null;
        // }
        let allReviews = this.props.reviews.map(review => {
            // console.log(review)
            return (
                <ReviewIndexItem
                    review={review}
                    key={review.id}
                    body={review.body}
                    rating={review.rating}
                    createdAt={review.created_at}
                    productId={review.product_id}
                    authorId={review.author_id}
                />
            )
        });
        // debugger
        return (
            <div>
                <div>
                    {allReviews}
                </div>
            </div>
        )
    }
}

export default ReviewIndex;