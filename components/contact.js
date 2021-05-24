import React from 'react';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

export default function Contact() {
  const email = `tonyhazama4721@gmail.com`;
  return (
    <>
      <div className="section contact-section" style={{padding: '40px 0px 0px'}}>
        <div className="container">
          <div style={{background: '#f2f2f2', padding: '40px 20px', textAlign: 'center', wordWrap: 'break-word'}}>
            <p>
              To get in touch, write to &nbsp;
              <a href="mailto:tonyhazama4721@gmail.com" style={{textDecoration: 'underline', color: '#102629'}}>
                {email}
              </a>
            </p>
            <p>or find more about me here</p>
            <div className="contact-list">
              <a href='https://github.com/tonyhazama' target='_blank' rel="noopener noreferrer" className="contact-icon gh">
                <GithubOutlined />
              </a>
              <a href='https://www.linkedin.com/in/tonyhazama' target='_blank' rel="noopener noreferrer" className="contact-icon ig">
                <LinkedinOutlined />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
