import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import ReviewModalContainer from '../review_modal/review_modal_container'

class Modal extends React.Component {
    render() {
        if (!this.props.modal) {
            return null;
        }
        let component;
        switch (this.props.modal) {
            case 'login':
                // this.props.closeModal();
                component = <LoginFormContainer />;
                break;
            case 'signup':
                // this.props.closeModal();
                component = <SignupFormContainer />;
                break;
            case 'editReview':
                component = <ReviewModalContainer />;
            default:
                return null;
        }
        return (
            <div className="modal-background" onClick={closeModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>
        );
    }
}

export default Modal;