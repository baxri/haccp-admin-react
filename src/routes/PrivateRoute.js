import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
// import logo from './logo.svg';
import LoadingScreen from 'react-loading-screen';
import Mmc from '../gateway/Mmc';
import { connect } from "react-redux";

class PrivateRoute extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        if (this.props.loading) {
            return (<LoadingScreen
                loading={true}
                bgColor='#f1f1f1'
                spinnerColor='red'
                textColor=''
                logoSrc=''
                text=''
            ><p></p></LoadingScreen>
            )
        }

        if (!this.props.loading) {
            // Check for user autorization and redirect
            if (this.props.auth) {
                return (
                    <Route {...this.props} />
                )
            } else {
                return (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: this.props.location }
                        }}
                    />
                )
            }
        }
    }
}


function mapStateToProps(state) {
    return {
        auth: state.login.auth,
        loading: false,
    };
}

export default connect(mapStateToProps)(PrivateRoute);
