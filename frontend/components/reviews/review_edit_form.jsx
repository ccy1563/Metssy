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
        return (
            <div >
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
                        rows="20"
                        value={this.state.body}
                        onChange={this.update("body")}
                    />
                    <input type="submit" className="review-submit-bttn" />
                </form>
                </div>
        )
    }
}

export default withRouter(ReviewEditForm);