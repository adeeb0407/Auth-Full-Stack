import React from 'react'
import './styles/home.css'

function ProfileCard({user}) {
    const userData = user.response
    return (
        <figure className="snip1336">
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample87" />
  <figcaption>
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg" alt="profile-sample4" className="profile" />
    <h2>{userData.firstName} {userData.lastName}<span>{userData.email}</span></h2>
    <p>I'm looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...? </p>
  </figcaption>
</figure>
    )
}

export default ProfileCard;
