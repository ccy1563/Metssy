import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

class ReviewEditForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = this.props.review;
        this.navigateToReviewShow = this.navigateToReviewShow.bind(this);
    }

    componentDidMount() {
        // this.props.fetchReview(this.props.match.params.reviewId)
    }

    handleSubmit(e) {
        e.preventDefault();

        // debugger
        const productId = this.props.review.product_id;
        const review = Object.assign({}, this.state, {
            product_id: productId,
            author_id: this.props.user,
        });
        this.props.updateReview(review, productId);
        document.getElementById("review-submit-button").value = "";
        this.navigateToReviewShow();
    }

    update(property) {
        return e => this.setState({ [property]: e.currentTarget.value });
    }

    navigateToReviewShow() {
        const url = `/products/${this.props.review.product_id}`
        this.props.history.push(url);
    }

    render() {

        // debugger

        const { product } = this.props;
        const { name, photoUrl, price, description } = this.props.product;

        // debugger;

        return (
            <div className="review-edit-form-top-top">
                
                <div className="review-edit-form-product-list">
                    <div>
                        <div className='edit-review-form-name'>{name}</div>
                        <div className='review-edit-form-price'>${price}</div>
                    </div>
                    <div>
                        <Link to={`/products/${product.id}`}>
                            <img className="review-edit-form-img" src={photoUrl} alt="" />
                        </Link>
                    </div>
                    <div className='review-edit-form-desc'>{description}</div>
                </div>

                <div className="review-edit-form-top">
                    <div>
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                            <Box component="fieldset" mb={3} borderColor="transparent">
                                <Rating
                                    style={{ color: "black" }}
                                    name="Rating Label"
                                    value={this.state.rating}
                                    precision={0.5}
                                    onChange={this.update("rating")}
                                />
                            </Box>
                            <textarea
                                className="create-review-textarea"
                                id="review-submit-button"
                                cols="65"
                                rows="4"
                                value={this.state.body}
                                onChange={this.update("body")}
                            />
                            <input type="submit" className="review-submit-bttn" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ReviewEditForm);