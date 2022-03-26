import React from 'react'
import {Link} from "react-router-dom"

export default function index() {
  return (
<React.Fragment>
<footer>
<div className="footy-sec mn no-margin">
<div className="container">
<ul>
<li><Link to="help-center.html" title="">Help Center</Link></li>
<li><Link to="about.html" title="">About</Link></li>
<li><Link to="#" title="">Privacy Policy</Link></li>
<li><Link to="#" title="">Community Guidelines</Link></li>
<li><Link to="#" title="">Cookies Policy</Link></li>
<li><Link to="#" title="">Career</Link></li>
<li><Link to="forum.html" title="">Forum</Link></li>
<li><Link to="#" title="">Language</Link></li>
<li><Link to="#" title="">Copyright Policy</Link></li>
</ul>
<p><img src="assets/images/copy-icon2.png" alt="" />Copyright 2019</p>
<img className="fl-rgt" src="assets/images/logo2.png" alt="" />
</div>
</div>
</footer>
</React.Fragment>  )
}
