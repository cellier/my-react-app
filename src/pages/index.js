import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import '../components/layout.css'
import styled from 'styled-components'
import Header from '../components/header'

const Hero = styled.div``
const HeroGroup = styled.div`
  margin: 0 auto;
  max-width: 720px;
  text-align: center;
  padding: 150px 50px;
  /* background: blue; */
  /* color: white; */
  h1 {
    font-size: 64px;
  }
  p {
    font-size: 24px;
    line-height: 1.45;
    color: #4A5567;
    /* margin-bottom: 48px; */
  }
  a {
    display: inline-block;
    margin-top: 8px;
    font-size: 16px;
    text-transform: uppercase;
    color: white;
    text-decoration: none;
    font-weight: 600;
    background: #2860F5;
    padding: 16px 24px;
    border-radius: 32px;
    transition: .25s linear;
  }

  a:hover {
    transform: translateY(-2px);
    background: rgba(40,96,245, 0.8);
    box-shadow: 0px 8px 24px rgba(40,96,245, 0.6);
  }

  a:active {
    transform: translateY(1px);
    background: rgba(24,70,194,1);
    box-shadow: 0px 1px 2px rgba(40,96,245, 0.9);
  }
`





const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header/>
    <Hero>
      <HeroGroup>
      <h1>Sync ideas <br />
with your teams.</h1>
      <p>Tokaw is the future of exchanging experiences, help you express your ideas better, communicate concepts synchronously and in real time.</p>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
      <Link to="/page-2/">Get Started</Link>
      </HeroGroup>
    </Hero>


  </Layout>
)

export default IndexPage
