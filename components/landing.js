/**
 * @author Tony Hazama
 * @email tonyhazama4721@gmail.com
 * @create date 2021-05-22 02:01:51
 * @modify date 2021-05-22 02:01:51
 * @desc This is my personal website
 */

import { useEffect, useState } from "react";

 export default function Landing() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', val => {
      console.log(window.pageYOffset);
      if (window.pageYOffset > 150) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    });
  }, []);

  return (
    <div className="section landing-section">
      <div className="landing">
        {/* <div className="container"> */}
          <h1 className="title">I am Muhammad Sultoni</h1>
          <h3 className="subtitle">I'm a professional Web Developer.</h3>
        {/* </div> */}
      </div>
    </div>
  )
}