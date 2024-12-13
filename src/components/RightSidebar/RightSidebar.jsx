import React from 'react';
import './RightSidebar.css';
import assets from '../../assets/assets';

const RightSidebar = () => {
  return (
    <div className="rs">
      <div className="rs-profile">
        <img src={assets.profile_img} alt="User" className="rs-profile-img" />
        <h3 className="rs-profile-name">Nayana Pardeshi <img className="dot" src={assets.green_dot} alt=''/></h3>
        <p className="rs-profile-status">Online <br></br> +91 9876543210</p>
      </div>
      <div className="rs-media">
      <h5>Media</h5>
        <div>
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
          <img src={assets.pic3} alt="" />
          <img src={assets.pic4} alt="" />
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
        </div>
      </div>
      <div>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default RightSidebar;
