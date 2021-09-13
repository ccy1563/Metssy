import React from 'react';

class ReviewEditForm extends React.Component {

    componentDidMount() {
        // debugger
        this.props.fetchReviews();
    }

    constructor(props) {
        super(props)
        this.state = this.props.review;
    }

    render() {
        return (
            <div>Edit Form</div>
        )
    }
}

export default ReviewEditForm;