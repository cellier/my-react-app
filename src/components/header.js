import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
// import Image from '../components/image'
import logo from '../images/Tokaw.svg'

const HeaderNav = styled.div`
  margin: 0 auto;
  max-width: 1200px;

`
const HeaderGroup = styled.div``


const Header = ({ siteTitle }) => (
  <HeaderNav>
    <HeaderGroup>
      <Link to="/"><img src={logo} alt="" height="16px"/></Link>
      <Link to="/features">Features</Link>
      <Link to="/solutions">Solutions</Link>
      <Link to="/pricing">Pricing</Link>
      <Link to="/about">About</Link>

      <Link to="/sign-in">Sign In</Link>

      <button>Sign Up</button>

    </HeaderGroup>
  </HeaderNav>
)

export default Header
