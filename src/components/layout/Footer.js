import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Footer = (props) => {
  return (
    <div>
      <Navbar
        color='light'
        light
        expand='md'
        className=' fixed-bottom justify-content-center'
      >
        <NavbarBrand className='text-center'>
          Build with <i className='fas fa-heart m-2'></i> By Aravind
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Footer;
