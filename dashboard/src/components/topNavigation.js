import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand,MDBFormInline, MDBNavbarNav,MDBBtn, MDBTooltip,MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
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

                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <MDBNavbarNav left>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search Courses" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem active>
                        
                            <NavLink to="/createcourse">
                            <MDBTooltip
          domElement
          tag="span"
          placement="top"
        >
          <span><i class="far fa-lg fa-plus-square"></i></span>
          <span>Create Post</span>
        </MDBTooltip>
                                </NavLink>&nbsp; &nbsp;&nbsp;
                        </MDBNavItem>
                        <MDBNavItem>
                            <NavLink to="#"> 
                            <MDBTooltip
          domElement
          tag="span"
          placement="top"
        >
          <span><i class="far fa-lg fa-bell"></i></span>
          <span>Notifications</span>
        </MDBTooltip>
                            </NavLink>

                            <NavLink to="#">&nbsp;&nbsp;&nbsp;<i class="far fa-lg fa-user-circle"></i></NavLink>
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