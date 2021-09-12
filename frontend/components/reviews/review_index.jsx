import React from 'react';
import { Link } from 'react-router-dom';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger
        this.props.fetchReviews(this.props.product.id); // debugger
        // debugger
    }

    render() {
        // debugger
        // const { reviews } = this.props;
        // if (!reviews) {
        //     return null;
        // }
        // let allReviews = this.props.reviews.map(review => {
        //     // console.log(review)
        //     return (
        //         <ReviewIndexItem
        //             review={review}
        //             key={review.id}
        //             body={review.body}
        //             rating={review.rating}
        //             createdAt={review.created_at}
        //             productId={review.product_id}
        //             authorId={review.author_id}
        //         />
        //     )
        // });

        // debugger
        if (!this.props.reviews) { 
            // debugger;
            return null;
        }
        // debugger
        const allReviews = this.props.reviews.map(review => {
            // console.log(this.props.product);
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
                {allReviews}
            </div>
        )
    }
}

export default ReviewIndex;