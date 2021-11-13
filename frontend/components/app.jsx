import React from 'react';
import Modal from './modal/modal_container'
import Greeting from './greeting/greeting_container'
import Search from './search/search_container'
import SignUp from './session_form/signup_form_container';
import Login from './session_form/login_form_container';
import Category from './category/category_container'
import Welcome from './welcome/welcome_container'
import Collection1 from './collection1/collection1';
import Collection2 from './collection2/collection2';
import Announcement from './announcement/announcement_container'
import Footer from './footer/footer_container';

import ProductIndexContainer from './products/product_container'
import ProductShowContainer from './products/product_show_container'

import ReviewIndexContainer from './reviews/review_container'

import ReviewEditContainer from './reviews/review_edit_container'

import CartContainer from './cart/cart_container'
import CartItemIndexContainer from './cart_items/cart_item_index_container'

import CartFooter from './cart_footer/cart_footer'

import SearchIndexContainer from './search/search_index_container'

import CategoryIndexContainer from './category/category_index_container'

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
    Route,
    Switch,
    Link
} from 'react-router-dom';

const App = () => (
    <div className="page-form">
        <section className="navbar">
            <Modal />
            <Link className="home" to="/">Yeetsy</Link>
            <Search />
            <Greeting />
            <CartContainer />
        </section>
        <Category />
        <Switch>
            {/* <Route exact path="/" component={App} /> */}
            {/* <AuthRoute exact path="/login" component={Login} />
            <AuthRoute exact path="/signup" component={SignUp} /> */}

            {/* <Route exact path="/products/:productId" component={ProductShowContainer} /> */}

            <Route exact path="/products/:productId/">
                <ProductShowContainer />
                <Announcement />
                <Footer />
            </Route>

            {/* <Route exact path="/products" component={ProductIndexContainer} /> */}
            <Route exact path="/products/:productId/reviews/:reviewId">
                <ReviewEditContainer />
                <Announcement />
                <Footer />
            </Route>

            <Route exact path="/cart_items">
                <CartItemIndexContainer />
                <CartFooter />
            </Route>

            <Route exact path="/search">
                <SearchIndexContainer />
            </Route>

            <Route exact path="/category">
                <CategoryIndexContainer />
            </Route>

            <Route exact path="/">
                <Welcome />
                <ProductIndexContainer />
                <Announcement />
                <Footer />
            </Route>


        </Switch>
    </div>
);

export default App;
