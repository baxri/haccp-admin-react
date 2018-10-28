import React, { Component } from 'react'
import { Button } from 'reactstrap';
import styled from 'styled-components'

export default class LoadingButton extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                {this.props.loading == false && <Button {...this.props}>{this.props.value}</Button>}
                {this.props.loading == true && <Button {...this.props} disabled={true}>
                    <span class="fa fa-circle-o-notch fa-spin"></span>
                    <TextWithSpinner>{this.props.value}</TextWithSpinner>
                </Button>}
            </div>
        )
    }
}

const TextWithSpinner = styled.span`
    padding-left: 10px;
`;
