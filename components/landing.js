/**
 * @author Tony Hazama
 * @email tonyhazama4721@gmail.com
 * @create date 2021-05-22 02:01:51
 * @modify date 2021-05-22 02:01:51
 * @desc This is my personal website
 */

 export default function Landing() {

  return (
    <div className="section landing-section" style={{ display: 'flex' }}>
      <div className="container">
        <div className="landing">
          <div className="img-container">
            <img src={require('../public/static/profile.jpg')} />
          </div>
          <h1 className="title">I am Muhammad Sultoni</h1>
          <h3 className="subtitle">I'm a Professional Web Developer. Currently working at <b style={{color: '#fff'}}>PT. Padepokan Tujuh Sembilan</b></h3>
        </div>
      </div>
    </div>
  )
}