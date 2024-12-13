import React from 'react';
import './ProfileUpdate.css';
import assets from '../../assets/assets'

const ProfileUpdate = () => {
  return (
    <div className="profile-page">
      <div className="profile-form">
        <h3>Profile Details</h3>
        
        {/* Profile Picture Upload */}
        <div className="profile-pic-container">
          <label htmlFor="profile-pic" className="profile-pic-label">
            <img
              src={assets.profile_img} // Your default profile image here
              alt="Upload profile"
              className="profile-pic"
            />
            <input type="file" id="profile-pic" />
          </label>
          <p>upload profile image</p>
        </div>

        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>

        {/* Bio Field */}
        <div className="form-group">
          <label htmlFor="bio">Write profile bio</label>
          <textarea id="bio" placeholder="Tell us about yourself"></textarea>
        </div>

        {/* Save Button */}
        <button>Save</button>
      </div>
    </div>
  );
};

export default ProfileUpdate;
