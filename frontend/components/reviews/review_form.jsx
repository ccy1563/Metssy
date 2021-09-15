import React from 'react';
import { withRouter } from 'react-router-dom';

import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';


class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            rating: 1,
        };
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        // debugger;
        e.preventDefault();
        if (!this.props.user) {
            this.props.openModal('login');
        } else {
            const productId = this.props.match.params.productId;
            // debugger
            const review = Object.assign({}, this.state, {
                product_id: productId,
                author_id: this.props.user,
            });
            // debugger
            this.props.createReview(review, productId);
            document.getElementById("review-submit-button").value = "";
        // this.state = {
        //     body: '',
        //     rating: 1,
        // }
        }

    }

    update(property) {
        return e => this.setState({ [property]: e.currentTarget.value });
    }

    render() {
        // debugger;
        return (
            <div className="review-form">
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


                    {/* <label>Rating</label>
                    <input
                        type="number"
                        max="5"
                        min="0"
                        value={this.state.rating}
                        onChange={this.update("rating")}
                    /> */}
                    {/* <label>Review</label> */}
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
                {/* <button onClick={this.navigateToReviewShow}>Cancel</button> */} </div>
        )
    }
}

export default withRouter(ReviewForm);