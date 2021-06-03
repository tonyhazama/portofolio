import React from 'react';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

export default function Contact() {
  const email = `tonyhazama4721@gmail.com`;
  const phone = `+62 812 2095 1033`;
  return (
    <>
      <div className="section contact-section" style={{padding: '40px 0px 40px'}}>
        <div className="container">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{flex: 1}}>{email} {`  |  `} {phone}</div>
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
