import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Grand Swift Bear</title>
        <meta property="og:title" content="Grand Swift Bear" />
      </Helmet>
    </div>
  )
}

export default Home
