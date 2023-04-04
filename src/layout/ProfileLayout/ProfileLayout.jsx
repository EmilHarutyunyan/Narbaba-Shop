import React from 'react'
import { Outlet } from 'react-router-dom'
import ProfileNav from '../../components/ProfileNav/'

const ProfileLayout = () => {
  return (
    <>
      <section className="userProfile-section">
        <div className="page-container">
          <div className="content">
              <ProfileNav />
              <Outlet />
          </div>
        </div>
      </section>

    </>
  );
}

export default ProfileLayout