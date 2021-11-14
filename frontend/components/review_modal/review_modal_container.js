import { connect } from 'react-redux';
import React from 'react';
import { login, removeErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import ReviewModal from './review_modal';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'editReview',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // processForm: (user) => dispatch(login(user)),
        closeModal: () => dispatch(closeModal()),
        openModal: modal => dispatch(openModal(modal)),
        // removeErrors: () => dispatch(removeErrors()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewModal);
