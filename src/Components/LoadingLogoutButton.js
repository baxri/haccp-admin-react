import React, { Component } from 'react'
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';

export default class LoadingLogoutButton extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                {!this.props.loader && <NavLink href="#" onClick={this.props.onClick}><i className="icon-logout"></i></NavLink>}
                {this.props.loader && <NavLink href="#"><i className="fa fa-circle-o-notch fa-spin"></i></NavLink>}
            </div>
        )
    }
}
