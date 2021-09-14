import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            rating: 5,
        };
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        // debugger;
        e.preventDefault();
        if (!this.props.user) {
            this.props.openModal('login');
        }
        const productId = this.props.match.params.productId;
        // debugger
        const review = Object.assign({}, this.state, {
            product_id: productId,
            author_id: this.props.user,
        });
        // debugger
        this.props.createReview(review, productId);
        document.getElementById("review-submit-button").value = "";

    }

    update(property) {
        return e => this.setState({ [property]: e.currentTarget.value });
    }

    render() {
        // debugger;
        return (
            <div className="review-form">
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
                {/* <button onClick={this.navigateToReviewShow}>Cancel</button> */} </div>
        )
    }
}

export default withRouter(ReviewForm);