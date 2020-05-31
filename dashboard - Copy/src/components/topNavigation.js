import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import {NavLink} from 'react-router-dom';
class TopNavigation extends Component {
    state = {
        collapse: false
    }

    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <MDBNavbar className="flexible-navbar" light expand="md" scrolling>
                {/* <MDBNavbarBrand href="/">
                    <strong>MDB</strong>
                </MDBNavbarBrand> */}
                <MDBNavbarToggler onClick = { this.onClick } />
                <MDBCollapse isOpen = { this.state.collapse } navbar>

                    &nbsp;&nbsp;&nbsp;&nbsp;<MDBNavbarNav left>
                        <MDBNavItem active>
                            <NavLink to="/createcourse">Create New Post</NavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    {/* <MDBNavbarNav right>

                    <MDBNavbarNav right>
                        <MDBNavItem>
                            {/* <a className="border border-light rounded mr-1 nav-link Ripple-parent" rel="noopener noreferrer" href="https://github.com/mdbootstrap/React-Bootstrap-with-Material-Design" target="_blank"><MDBIcon fab icon="github" className="mr-2"/>MDB GitHub</a> }
                            <NavLink className="border border-light rounded mr-1 nav-link Ripple-parent" to="/createcourse">Create New Post</NavLink>
                        </MDBNavItem>
                    </MDBNavbarNav> */}
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default TopNavigation;