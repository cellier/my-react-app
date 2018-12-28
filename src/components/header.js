import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
// import Image from '../components/image'
// import logo from '../images/Tokaw.svg'

const HeaderNav = styled.div`
  position: fixed;
  width: 100%;
  padding: 16px 0;
  margin: 0 auto;
  z-index: 100;
  font-size: 16px;
  background: white;
  img {
    margin-top: 16px;
    height: 24px;
  }
  .Logo {
    font-size: 20px;
    font-weight: 600;

  }
  
`
const HeaderGroup = styled.div`

  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(7, auto);
  align-items: center;
  justify-items: center;
  line-height: 40px;
  .NavMenu {
    text-decoration: none !important;
    color: black;
    transition: .25s linear;
  }

  .NavMenu:hover {
    color: gray;
  }

  .SignUp {
    height: 34px;
    width: 114px;
    text-align: center;
    border-radius: 17px;
    line-height: 32px;
    border: 1px solid #2860F5;
    color: #2860F5;
    transition: .25s linear;
  }
  .SignUp:hover {
    transform: translateY(-2px);
    background: rgba(40,96,245, 0.8);
    box-shadow: 0px 8px 24px rgba(40,96,245, 0.6);
    color: white;
    border: 0px;
  }
  .SignUp:active {
    transform: translateY(1px);
    background: rgba(24,70,194,1);
    box-shadow: 0px 1px 2px rgba(40,96,245, 0.9);
  }
`



const Header = ({ siteTitle }) => (
  <HeaderNav>
    <HeaderGroup>
      {/* <img src={require('../images/Tokaw.png')} alt=""/> */}
      <Link to="/" className="Logo NavMenu">Tokaw</Link>
      <Link to="/features" className="NavMenu">Features</Link>
      <Link to="/solutions" className="NavMenu">Solutions</Link>
      <Link to="/pricing" className="NavMenu">Pricing</Link>
      <Link to="/about" className="NavMenu">About</Link>
      <Link to="/sign-in" className="NavMenu">Sign In</Link>
      <Link to="/sign-up" className="NavMenu SignUp">Sign Up</Link>  
    </HeaderGroup>
  </HeaderNav>
)

export default Header
