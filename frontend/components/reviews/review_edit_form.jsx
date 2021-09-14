import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

class ReviewEditForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = this.props.review;
        this.navigateToBenchShow = this.navigateToBenchShow.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        // debugger
        const productId = this.props.review.author_id;
        const review = Object.assign({}, this.state, {
            product_id: productId,
            author_id: this.props.user,
        });
        this.props.updateReview(review, productId);
        document.getElementById("review-submit-button").value = "";
        this.navigateToBenchShow();
    }

    update(property) {
        return e => this.setState({ [property]: e.currentTarget.value });
    }

    navigateToBenchShow() {
        const url = `/products/${this.props.review.author_id}`
        this.props.history.push(url);
    }

    render() {

        // debugger
        return (
            <div >
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label>Rating</label>
                    <input
                        type="number"
                        max="5"
                        min="0"
                        value={this.state.rating}
                        onChange={this.update("rating")}
                    />
                    {/* <label>Review</label> */}
                    <textarea
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