import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
// import logo from './logo.svg';
import LoadingScreen from 'react-loading-screen';
import Mmc from '../gateway/Mmc';


export default class PrivateRoute extends Component {

    constructor(props) {
        super(props);

        this.state = {
            auth: false,
            loading: true,
        };
    }

    componentWillMount = async () => {

        try {

            let auth = await Mmc.checkAuth();

            this.setState({
                loading: false,
                auth: auth
            });

        } catch (error) {

        }
    }

    render() {

        if (this.state.loading) {
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

        if (!this.state.loading) {
            // Check for user autorization and redirect
            if (this.state.auth) {
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
