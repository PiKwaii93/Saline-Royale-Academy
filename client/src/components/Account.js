import React, { useState } from "react";
import { profilPictureUser } from '../features/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import axios from 'axios';


export default function Account() {

      const dispatch = useDispatch();
  
      const user = useSelector((state) => state.user);

      

      const [file, setFile] = useState(null);

      const handleFile =(event) => {
        setFile(event.target.files[0]);
      }

      const handleUpload=(event)=>{
        event.preventDefault();

        if (file) {
          const formData = new FormData();
          formData.append('image', file);
          dispatch(profilPictureUser(formData))
        }
      }

      return (
        <div className="profil-container-page">
          <div className="profil-title-container">
            <span className="profil-title">Profile</span>
          </div>
          <div className="profil-container-all">
            <div className="profil-container-tab">
              <div className="profil-container-information-all">
                <img className="profil-picture" src="/Profil_Picture.png" alt="Profil Picture" />
                <div className="profil-container-information-text-all">
                  <div className="profil-container-information-text">
                    <span className="profil-micro-information-text">{user.email}</span>
                    <span className="profil-information-text">{user.firstName} {user.lastName}</span>
                  </div>
                  <div>
                    <input type="file" onChange={handleFile}/>
                    <button onClick={handleUpload}>Upload</button>
                  </div>
                </div>
              </div>
              <div className="profil-container-menu-all">
                <div className="profil-container-menu-title">
                  <span className="profil-menu-title">Personal details</span>
                </div>
                <div className="profil-container-menu-tab">
                <div className="profil-container-menu">
                    <div className="profil-menu-text-container">
                      <span className="profil-menu-text">Account</span>
                      <span className="profil-menu-micro-text">Manage your name, email, password and subscription.</span>
                    </div>
                    <img className="profil-menu-picture" src="/Arrow_right2.svg" alt="Account" />
                  </div>
                  <span className="profil-divider"></span>
                  <div className="profil-container-menu">
                    <div className="profil-menu-text-container">
                      <span className="profil-menu-text">Certificate</span>
                    </div>
                    <img className="profil-menu-picture" src="/Arrow_right2.svg" alt="Certificate" />
                  </div>
                  <span className="profil-divider"></span>
                  <div className="profil-container-menu">
                    <div className="profil-menu-text-container">
                      <span className="profil-menu-text">My progress</span>
                    </div>
                    <img className="profil-menu-picture" src="/Arrow_right2.svg" alt="My progress" />
                  </div>
                  <span className="profil-divider"></span>
                  <div className="profil-container-menu">
                    <div className="profil-menu-text-container">
                      <span className="profil-menu-text">Planning</span>
                    </div>
                    <img className="profil-menu-picture" src="/Arrow_right2.svg" alt="Planning" />
                  </div>
                  <span className="profil-divider"></span>
                  <div className="profil-container-menu">
                    <div className="profil-menu-text-container">
                      <span className="profil-menu-text">Upcoming test</span>
                    </div>
                    <img className="profil-menu-picture" src="/Arrow_right2.svg" alt="Upcoming test" />
                  </div>
                  <span className="profil-divider"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
      
}
