import React from 'react'
// Styles
import {Wrapper} from "./ProfileNotifications.styles"
import { Link } from 'react-router-dom';
const ProfileNotifications = () => {
  return (
    <Wrapper className="right-side  notifications">
      <div>
        <div className="notification-heading">
          <h1 className="title">Notifications</h1>
          <Link to={""} className="mark-all-read">
            Mark all as read
          </Link>
        </div>
        <div className="notifications-list">
          <div className="notifications-item unread">
            <div className="notification-title">
              <b>The main title of notification</b>
            </div>
            <div className="notification-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </div>
            <div className="notification-date">02 March 2023</div>
          </div>
          <div className="notifications-item unread">
            <div className="notification-title">
              <b>The main title of notification</b>
            </div>
            <div className="notification-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
            <div className="notification-date">02 March 2023</div>
          </div>
          <div className="notifications-item">
            <div className="notification-title">
              <b>The main title of notification</b>
            </div>
            <div className="notification-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </div>
            <div className="notification-date">02 March 2023</div>
          </div>
          <div className="notifications-item">
            <div className="notification-title">
              <b>The main title of notification</b>
            </div>
            <div className="notification-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
            <div className="notification-date">02 March 2023</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ProfileNotifications