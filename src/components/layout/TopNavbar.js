import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

const TopNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color='primary' dark expand='md'>
        <Link to='/' className='navbar-brand'>
          Github Finder <i className='fab fa-github' />
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar tabs>
            <NavItem>
              <Link to='/' className='nav-link'>
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/about' className='nav-link'>
                About
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopNavbar;
