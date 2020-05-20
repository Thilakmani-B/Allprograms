import React, {Component} from 'react';
import {Navbar, NavbarBrand,Nav, NavbarToggler, Collapse, NavItem ,Jumbotron} from 'reactstrap';
import {NavLink} from 'react-router-dom';
class Header extends Component{
  constructor(props){
      super(props);
      this.state  = {
        isNavOpen:false
      };
      this.toogleNav = this.toogleNav.bind(this);
  }
toogleNav(){
  this.setState(
    {
isNavOpen:!this.state.isNavOpen
    }
  );
}
    render(){
    return(
        <React.Fragment>
        <Navbar dark expand="md">
        <div className="container">
        <NavbarToggler onClick  = {this.toogleNav} />
          <NavbarBrand className="mr-auto" href="/">
          <img
        alt="Thilakmani"
        src="assets/images/logo1.png"
        width="41"
        height="30"
      />
          </NavbarBrand>
          <Collapse isOpen= {this.state.isNavOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className="nav-link" to="/home">
              <span className="fa fa-home fa-lg"></span> Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/aboutme">
              <span className="fa fa-info fa-lg"></span> About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/project">
              <span className="fa fa-list fa-lg"></span> Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contact">
              <span className="fa fa-address-card fa-lg"></span> Contact</NavLink>
            </NavItem>
          </Nav>
          </Collapse>
        </div>
      </Navbar>
     
<Jumbotron>
<div className="container">
    <div className="row row-header">
<div className="col-12 col-sm-6">
    <h1>I am Thilakmani</h1>
    <h5>I am a web developer, I want to share my knowledge with everybody, I am always welcome for your project, you can contact me, if you need my help.
    Always learn something new and be focused whenever you are learning.
    I learned many things from Online learning resources</h5>
    
</div>
    </div>
</div></Jumbotron>
           
            </React.Fragment>
    );
}
}
export default Header;