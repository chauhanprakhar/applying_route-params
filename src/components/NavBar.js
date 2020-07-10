import React from 'react'
import {Link,withRouter} from 'react-router-dom'
function Navbar (props){
    return (
        
  <nav>
  <div class="nav-wrapper">
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><Link to="/">home</Link></li>
      <li><Link to="/about">about</Link></li>
      <li><Link to="/:profile_id">about</Link></li>
    </ul>
  </div>
</nav>
      
    )
}
export default withRouter(Navbar);