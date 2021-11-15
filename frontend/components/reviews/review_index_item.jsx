import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

class ReviewIndexItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: this.props.review.rating,
            body: this.props.review.body,
            flag: false,
        };
    }

    handleEdit(e) {
        this.handleOpen(e);
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteReview(this.props.review, this.props.productId);
    }

    handleOpen(e) {
        e.preventDefault();
        this.setState({
            flag: true,
        })
    }

    handleClose(e) {
        e.preventDefault();
        // debugger
        this.setState({
            flag: false,
        })
    }

    update(property) {
        // debugger
        return e => this.setState({ [property]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        // debugger
        const newReview = {
            author_id: this.props.currentUserId,
            body: this.state.body,
            email: this.props.review.email,
            id: this.props.review.id,
            product_id: this.props.review.product_id,
            rating: this.state.rating,
        }
        // debugger
        this.props.updateReview(newReview, this.props.review.product_id);
        // debugger
        document.getElementById("review-submit-button").value = "";
        this.setState({
            flag: false,
        })
    }


    render() {
        const { review, productId } = this.props;
        // debugger    
        let stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < this.state.rating) {
                stars.push(<StarIcon key={i} />);
            } else {
                stars.push(<StarBorderIcon key={i} />);
            }
        }

        // console.log("rating: " + this.state.rating + " " + (typeof this.state.rating === 'string'))

        let staticStars = undefined;
        if (!staticStars) staticStars = stars;
        
        if (this.state.flag) {
            // debugger
            return (
                <div>
                    <div className="submitted-reviews-top">
                        {/* <div className="review-email"> */}
                            {/* <p>{this.props.fetchUser(this.props.authorId).email}</p> */}
                            {/* <p>{this.props.review.email}</p> */}
                        {/* </div> */}
                        {/* <div className="review-rating"> */}
                            {/* <p>{staticStars}</p> */}
                        {/* </div> */}
                        {/* <div className="review-body"> */}
                            {/* <p>{review.body}</p> */}
                        {/* </div> */}

                        {/* <div className="show-page-buttons"> */}
                            {/* <div> */}
                                {/* {this.props.authorId === this.props.currentUserId ? <Link to={`/products/${this.props.productId}/reviews/${review.id}`}><button className="show-page-edit-button">Edit</button></Link> : null} */}

                                {/* <button */}
                                    {/* // onClick={(e) => this.handleOpen(e)} */}
                                    {/* className='show-page-edit-button'> */}
                                    {/* Edit */}
                                {/* </button> */}
                            {/* </div> */}

                            {/* <div> */}
                                {/* {this.props.authorId === this.props.currentUserId ? <button className="show-page-delete-button" onClick={(e) => this.handleDelete(e)}>Delete</button> : null} */}
                            {/* </div> */}
                        {/* </div> */}
                        {/* <button className="review-edit-modal-button" onClick={() => this.props.openModal('editReview')}>Edit</button> */}
                    </div>
                    <div className='modal'>
                        <div className='modal-box-2'>
                            {/* <div className='modal-edit-review-title'>
                                Edit your review
                            </div> */}
                            <div className='modal-edit-review-title-2'>
                                Edit your review
                            </div>
                            {/* <div className='modal-form-line-2'></div> */}
                            <div 
                                className='modal-x-edit'
                                onClick={(e)=>this.handleClose(e)}>
                                    X
                            </div>
                            <form onSubmit={(e) => this.handleSubmit(e)}>
                                <div className='modal-edit-review-star'>
                                    <Box component="fieldset" mb={3} borderColor="transparent">
                                        <Rating
                                            style={{ color: "black" }}
                                            name="Rating Label Modal"
                                            value={this.state.rating}
                                            precision={0.5}
                                            // type="number"
                                            onChange={this.update("rating")}
                                        />
                                    </Box>
                                </div>
                                <textarea
                                    className="modal-edit-review-text"
                                    id="review-submit-button"
                                    cols="65"
                                    rows="4"
                                    value={this.state.body}
                                    onChange={this.update("body")}
                                />
                                <input 
                                    type="submit" 
                                    className="review-submit-bttn-modal"/>
                            </form>
                        </div>
                    </div>
                </div>
            )
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
                        {/* {this.props.authorId === this.props.currentUserId ? <Link to={`/products/${this.props.productId}/reviews/${review.id}`}><button className="show-page-edit-button">Edit</button></Link> : null} */}
                        {this.props.authorId === this.props.currentUserId ? <button className="show-page-edit-button" onClick={(e) => this.handleEdit(e)}>Edit</button> : null}
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