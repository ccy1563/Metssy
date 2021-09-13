import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'
import { signup, login, logout } from './actions/session_actions';
import { fetchProduct, fetchProducts} from './actions/product_actions'
import { 
    fetchReview, 
    fetchReviews, 
    createReview,
    deleteReview,
    updateReview
} from './actions/review_actions'


import { fetchUser } from './actions/user_actions'

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
    
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    window.fetchProducts = fetchProducts;
    window.fetchProduct = fetchProduct;

    window.fetchReviews = fetchReviews;
    window.fetchReview = fetchReview;
    window.createReview = createReview;
    window.updateReview = updateReview;
    window.deleteReview = deleteReview;

    window.fetchUser = fetchUser;
});
