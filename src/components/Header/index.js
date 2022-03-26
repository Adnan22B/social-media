import React from 'react';
import {Link} from "react-router-dom";


export default function Header() {
  return (
    <React.Fragment>
        <header>
<div className="container">
<div className="header-data">
<div className="logo">
<Link to="/" title=""><img src="assets/images/logo.png" alt=""/></Link>
</div>
<div className="search-bar">
<form>
<input type="text" name="search" placeholder="Search..."/>
<button type="submit"><i className="la la-search"></i></button>
</form>
</div>
<nav>
<ul>
<li>
<Link to="/" title="">
<span><img src="assets/images/icon1.png" alt=""/></span>
Home
</Link>
</li>
<li>
<Link to="/company" title="">
<span><img src="assets/images/icon2.png" alt=""/></span>
Companies
</Link> 
</li>
<li>
<Link to="/project" title="">
<span><img src="assets/images/icon3.png" alt=""/></span>
Projects
</Link>
</li> 
<li>
<Link to="/events-listing" title="">
<span><img src="assets/images/icon5.png" alt=""/></span>
Events
</Link>
</li>
<li>
<Link to="#" title="" className="not-box-openm">
<span><img src="assets/images/icon6.png" alt=""/></span>
Messages
</Link>
<div className="notification-box msg" id="message">
<div className="nt-title">
<h4>Setting</h4>
<Link to="#" title="">Clear all</Link>
</div>
<div className="nott-list">
<div className="notfication-details">
<div className="noty-user-img">
<img src="assets/images/resources/ny-img1.png" alt=""/>
</div>
<div className="notification-info">
<h3><Link to="messages.html" title="">Jassica William</Link> </h3>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</p>
<span>2 min ago</span>
</div>
</div>
<div className="notfication-details">
<div className="noty-user-img">
<img src="assets/images/resources/ny-img2.png" alt=""/>
</div>
<div className="notification-info">
<h3><Link to="messages.html" title="">Jassica William</Link></h3>
<p>Lorem ipsum dolor sit amet.</p>
<span>2 min ago</span>
</div>
</div>
<div className="notfication-details">
<div className="noty-user-img">
<img src="assets/images/resources/ny-img3.png" alt=""/>
</div>
<div className="notification-info">
<h3><Link to="messages.html" title="">Jassica William</Link></h3>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua.</p>
<span>2 min ago</span>
</div>
</div>
<div className="view-all-nots">
<Link to="messages.html" title="">View All Messsages</Link>
</div>
</div>
</div>
</li>
<li>
<Link to="#" title="" className="not-box-open">
<span><img src="assets/images/icon7.png" alt=""/></span>
Notification
</Link>
<div className="notification-box noti" id="notification">
<div className="nt-title">
<h4>Setting</h4>
<Link to="#" title="">Clear all</Link>
</div>
<div className="nott-list">
<div className="notfication-details">
<div className="noty-user-img">
<img src="assets/images/resources/ny-img1.png" alt=""/>
</div>
<div className="notification-info">
<h3><Link to="#" title="">Jassica William</Link> Comment on your project.</h3>
<span>2 min ago</span>
</div>
</div>
<div className="notfication-details">
<div className="noty-user-img">
<img src="assets/images/resources/ny-img2.png" alt=""/>
</div>
<div className="notification-info">
<h3><Link to="#" title="">Jassica William</Link> Comment on your project.</h3>
<span>2 min ago</span>
</div>
</div>
<div className="notfication-details">
<div className="noty-user-img">
<img src="assets/images/resources/ny-img3.png" alt=""/>
</div>
<div className="notification-info">
<h3><Link to="#" title="">Jassica William</Link> Comment on your project.</h3>
<span>2 min ago</span>
</div>
</div>
<div className="notfication-details">
<div className="noty-user-img">
<img src="assets/images/resources/ny-img2.png" alt=""/>
</div>
<div className="notification-info">
<h3><Link to="#" title="">Jassica William</Link> Comment on your project.</h3>
<span>2 min ago</span>
</div>
</div>
<div className="view-all-nots">
<Link to="#" title="">View All Notification</Link>
</div>
</div>
</div>
</li>
</ul>
</nav>
<div className="menu-btn">
<Link to="#" title=""><i className="fa fa-bars"></i></Link>
</div>
<div className="user-account">
<div className="user-info">
<img src="assets/images/resources/user.png" alt=""/>
<Link to="#" title="">John</Link>
<i className="la la-sort-down"></i>
</div>
<div className="user-account-settingss" id="users">
  
<h3>My Account</h3>
<ul className="us-links">
<li><Link to="profile-account-setting.html" title="">Account Setting</Link></li>
<li><Link to="#" title="">My Profile</Link></li> 
</ul>
<h3 className="tc"><Link to="sign-in.html" title="">Logout</Link></h3>
</div>
</div>

</div>
</div>
</header>
    </React.Fragment>
  )
}
