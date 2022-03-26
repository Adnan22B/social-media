import React from "react";
import { Link } from "react-router-dom"

export default function index() {
  return (
    <React.Fragment>
      <div className="post-topbar">
        <div className="user-picy">
          <img src="assets/images/resources/user-pic.png" alt="" />
        </div>
        <div className="post-st">
          <ul>
            <li>
              <Link className="post_project" to="#" title="">
                Post a Project
              </Link>
            </li>
            <li>
              <Link className="post-jb active" to="#" title="">
                Ask a question
                  </Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
