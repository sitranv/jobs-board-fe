import React, { FC } from 'react'

interface Props {
  
}

const Footer : FC<Props> = () => {
  return (
    <footer id="footer" className="background-color-footer">
      <div className="container">
        <div className="vertical-space-100"></div>
        <div className="row">
          <div className="col-lg-4 col-md-6 vertical-space-2">
            <h5 style={{color:'white'}}>About Us</h5>
            <p className="paregraf">Tristique velit phasellus sed auctor leo eros luctus nibh fermentu ad impediet rhonus
              dolor habitant purus velit aliquet donecurna ut in turpis faucibus</p>
            {/* <a href="#">
              <i className="fa fa-facebook social-icon"></i></a>
            <a href="#">
              <i className="fa fa-twitter social-icon"></i></a>
            <a href="#">
              <i className="fa fa-pinterest-p social-icon"></i></a>
            <a href="#">
              <i className="fa fa-map-marker social-icon"></i></a> */}
          </div>
          <div className="col-lg-2 col-md-6 vertical-space-2">
            <h5 style={{color:'white'}}>Company</h5>
            <div className="text">
              <a href="#" style={{color: '#888'}}>About</a>
              <a href="#" style={{color: '#888'}}>Support</a>
              <a href="#" style={{color: '#888'}}>Tems</a>
              <a href="#" style={{color: '#888'}}>Privacy</a>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 vertical-space-2">
            <h5 style={{color:'white'}}>Supports</h5>
            <div className="text">
              <a href="#" style={{color: '#888'}}>About</a>
              <a href="#" style={{color: '#888'}}>Support</a>
              <a href="#" style={{color: '#888'}}>Tems</a>
              <a href="#" style={{color: '#888'}}>Privacy</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 vertical-space-2">
            {/* <h5 style={{color:'white'}}>Subscribe Us</h5>
            <p>Get latest update and newsletter</p>
            <div className="vertical-space-30"></div>
            <form>
              <input type="email" className="email " placeholder="Email Address "/>
              <span className="fa fa-envelope email-icone "></span>
              <input type="submit" className="Subscribe" value="Subscribe" />
            </form> */}
          </div>
        </div>
        <div className="vertical-space-60"></div>
      </div>
    </footer>
  )
}

export default Footer;