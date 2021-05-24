import React from 'react';

export default function Contact() {
  return (
    <>
      <div className="section">
        <div className="container">
          <div style={{background: '#f2f2f2', padding: '40px 20px', textAlign: 'center', wordWrap: 'break-word'}}>
            <p>
              To get in touch, write to &nbsp;
              <a href="mailto:tonyhazama4721@gmail.com" style={{textDecoration: 'underline', color: '#102629'}}>tonyhazama4721@gmail.com</a>
            </p>
            {/* <h4 className="section-title text-center">Contact</h4> */}
            <h5 style={{color: '#102629', textAlign: 'center', marginBottom: '1em'}}>
              
            </h5>
            <p className="text-center">or find more about me here</p>
            <div className="actions center">
              <a href='https://github.com/tonyhazama/vmdlab' target='_blank' rel="noopener noreferrer" className="action gh">
                <i className="fab fa-github" title="View on Github"></i>
              </a>
              <a href='https://github.com/tonyhazama/vmdlab' target='_blank' rel="noopener noreferrer" className="action bh">
                <i className="fab fa-behance-square" title="View on Github"></i>
              </a>
              <a href='https://github.com/tonyhazama/vmdlab' target='_blank' rel="noopener noreferrer" className="action ig">
                <i className="fab fa-instagram" title="View on Github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
