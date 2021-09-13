import React from 'react';

class ReviewEditForm extends React.Component {

    componentDidMount() {
        // debugger
        this.props.fetchReview(this.props.match.params.reviewId);
    }

    constructor(props) {
        super(props)
        this.state = this.props.review;
    }

    render() {
        return (
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quibusdam consequuntur maxime libero provident? Odit quis, eveniet incidunt mollitia optio, vitae eaque laudantium delectus a expedita ratione assumenda labore accusantium?</div>
        )
    }
}

export default ReviewEditForm;