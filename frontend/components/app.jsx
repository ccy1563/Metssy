import React from 'react';
import Header from './header/header';
import ModalContainer from './modal/modal_container'
import GreetingContainer from './greeting/greeting_container'
import SearchContainer from './search/search_container'
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
    Switch,
    Link
} from 'react-router-dom';

const App = () => (
    <div>
        {/* <Header /> */}
        <ModalContainer />
        <Link to="/">Home</Link>
        <SearchContainer />
        <GreetingContainer />
        {/* <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </Switch> */}
    </div>
);

export default App;
