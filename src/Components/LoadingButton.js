import React, { Component } from 'react'
import { Button } from 'reactstrap';
import styled from 'styled-components'

export default class LoadingButton extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {!this.props.loader && <LoginButton
                    className={this.props.className}
                    color={this.props.color}
                    onClick={this.props.onClick}

                >{this.props.value}</LoginButton>}

                {this.props.loader && <LoginButton
                    className={this.props.className}
                    color={this.props.color}
                    onClick={this.props.onClick}
                    disabled={true}>

                    <span className="fa fa-circle-o-notch fa-spin"></span>
                    {/* {this.props.value && <TextWithSpinner>{this.props.value}</TextWithSpinner>} */}
                </LoginButton>}
            </div>
        )
    }
}

const TextWithSpinner = styled.span`
    padding-left: 10px;
`;

const LoginButton = styled(Button)`
    width: 100px;
`;
