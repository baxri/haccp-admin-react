import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

// Containers
import { DefaultLayout } from './containers';
// Pages
import { Login, Page404, Page500, Register } from './views/Pages';

// Private route
import PrivateRoute from './routes/PrivateRoute';

import 'react-toastify/dist/ReactToastify.css';
// import { renderRoutes } from 'react-router-config';

// Redux 
import { Provider } from 'react-redux'
import store from './store/index'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" name="Login Page" component={Login} />
            <Route exact path="/register" name="Register Page" component={Register} />
            <Route exact path="/404" name="Page 404" component={Page404} />
            <Route exact path="/500" name="Page 500" component={Page500} />
            <PrivateRoute path="/" name="Home" component={DefaultLayout} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
