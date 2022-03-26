import React from 'react'
import Head from 'next/head';

export default function index() {
  return (
    <div className="root" style={{'--bgpos': ``}}>
      <Head>
        <title>Blogs</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      
      <div className="section padded full-height" style={{display: 'flex'}}>
        <div className="container">
          <div className="landing">
            <h1 className="title">Blogs</h1>
            <h3 className="subtitle">This part of the site is under construction</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
