import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../logo.svg'
import { ButtonContainer } from './Button';
export default class Navbar extends Component {
    render() {
        return (
            <Navwrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
          
            <Link to='/'>
                <img src={Logo} alt="store" className="Navbar-brand"/>
              </Link>
              <ul className="navbar-nav align-items-center">
               <li className="nav-item ml-5">
                  <Link to="/" className="nav-link">
                   Product
                  </Link>
               </li>
              </ul>
              <Link to="/cart" className="ml-auto">
               <ButtonContainer>
                 <span className="mr-2">
                 <i className="fas fa-cart-plus">
                
               </i>
                 </span>
                 my cart
               </ButtonContainer>
              </Link>
               
            </Navwrapper>
        )
    }
}
const Navwrapper =styled.nav`
    background:var(--mainblue);
    .nav-link{
      color:var(--mainwhite)!important;
      font-size:1.3rem;
      text-transform:capitalize;
    }
`;
