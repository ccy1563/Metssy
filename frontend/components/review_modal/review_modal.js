import React from 'react';

class ReviewModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
    }

    componentDidMount() {
        debugger
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.processForm(user).then(this.props.closeModal);
    }

    render() {
        // debugger
        return (
            <div>

                <div>

                    <form
                        className="modal-form"
                        onSubmit={(e) => this.handleSubmit(e)}>

                        <div
                            onClick={this.props.closeModal}
                            className="close-x">
                            X
                        </div>

                        <div
                            className="submit-button-list">
                            <li>
                                <input
                                    className="submit-button"
                                    type="submit"
                                    value="Continue">
                                </input>
                            </li>
                        </div>

                    </form>

                </div>

            </div>
        )
    }
}

export default ReviewModal;
