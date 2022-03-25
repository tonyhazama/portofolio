import React from 'react'

export default function Header() {
  return (
    <div className="section header-container">
      <div className="container">
        <div className="header">
          <div className="info">
            <div className="fullname">Muhammad Sultoni</div>
            <div>Web Developer</div>
          </div>
          <div className="navigation" style={{textTransform: 'uppercase'}}>
            <div>Home</div>
            <div>My Works</div>
            <div>Blogs</div>
            <div>About / Contact</div>
          </div>
        </div>
      </div>
    </div>
  )
}
