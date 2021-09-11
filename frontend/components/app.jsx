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

import CartContainer from './cart/cart_container'

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

            <Route exact path="/products/:productId" component={ProductShowContainer} />
            {/* <Route exact path="/products" component={ProductIndexContainer} /> */}


            <Route path="/">
                <Welcome />
                <ProductIndexContainer />
            </Route>
        </Switch>

        <Announcement />
        <Footer />
    </div>
);

export default App;
