import React from 'react';
import Header from './header/header';
import ModalContainer from './modal/modal_container'
import GreetingContainer from './greeting/greeting_container'
import SearchContainer from './search/search_container'
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import CategoryContainer from './category/category_container'
import WelcomeContainer from './welcome/welcome_container'
import SubCategoriesContainer from './subcategories/subcategories_container';
import FooterContainer from './footer/footer_container';
import SquareCategoriesContainer from './square_categories/square_categories';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
    Route,
    Switch,
    Link
} from 'react-router-dom';

const App = () => (
    <div className="page-form">
        {/* <Header /> */}
        <section className="navbar">
            <ModalContainer />
            <Link className="home" to="/">Yeetsy</Link>
            <SearchContainer />
            <GreetingContainer />
        </section>
        <CategoryContainer />
        <WelcomeContainer />
        <SubCategoriesContainer />
        <SquareCategoriesContainer />
        <FooterContainer />
        {/* <Switch> */}
            {/* <Route exact path="/" component={App} /> */}
            {/* <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
        {/* </Switch> */}
    </div>
);

export default App;
