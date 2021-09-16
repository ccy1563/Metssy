import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import Rating from '@material-ui/lab/Rating';


class ReviewIndexItem extends React.Component {

    constructor(props) {
        super(props);
    }

    
    handleDelete(e) {
        e.preventDefault();
        this.props.deleteReview(this.props.review, this.props.productId);
        // const review = Object.assign({}, this.state, {
        //     product_id: productId,
        //     author_id: this.props.user,
        // });
        // this.setState({
        //     reviews: this.props.reviews.filter(r => r.id !== this.props.review.id),
        // });
        // this.props.fetchReviews(this.props.productId);
        // location.reload();
        // debugger
    }
    
    
    render() {        
        const { review, productId } = this.props;
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
                
                <div className="show-page-buttons">
                    <div>
                        {this.props.authorId === this.props.currentUserId ? <Link to={`/products/${this.props.productId}/reviews/${review.id}`}><button className="show-page-edit-button">Edit</button></Link> : null}
                    </div>

                    <div>
                        {this.props.authorId === this.props.currentUserId ? <button className="show-page-delete-button" onClick={(e) => this.handleDelete(e)}>Delete</button> : null}
                    </div>
                </div>
                {/* <button className="review-edit-modal-button" onClick={() => this.props.openModal('editReview')}>Edit</button> */}
            </div>
        )
    }
}

export default ReviewIndexItem;