import React from "react";

export default function index() {
  return (
    <React.Fragment>
      <div className="post-bar">
        <div className="post_topbar">
          <div className="usy-dt">
            <img src="assets/images/resources/us-pic.png" alt="" />
            <div className="usy-name">
              <h3>John Doe</h3>
              <span>
                <img src="assets/images/clock.png" alt="" />3 min ago
              </span>
            </div>
          </div>
          <div className="ed-opts">
            <a href="#" title="" className="ed-opts-open">
              <i className="la la-ellipsis-v"></i>
            </a>
            <ul className="ed-options">
              <li>
                <a href="#" title="">
                  Edit Post
                </a>
              </li>
              <li>
                <a href="#" title="">
                  Unsaved
                </a>
              </li>
              <li>
                <a href="#" title="">
                  Unbid
                </a>
              </li>
              <li>
                <a href="#" title="">
                  Close
                </a>
              </li>
              <li>
                <a href="#" title="">
                  Hide
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="epi-sec">
          <ul className="descp">
            <li>
              <img src="assets/images/icon8.png" alt="" />
              <span>Epic Coder</span>
            </li>
            <li>
              <img src="assets/images/icon9.png" alt="" />
              <span>India</span>
            </li>
          </ul>
          <ul className="bk-links">
            <li>
              <a href="#" title="">
                <i className="la la-bookmark"></i>
              </a>
            </li>
            <li>
              <a href="#" title="">
                <i className="la la-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="job_descp">
          <h3>Senior Wordpress Developer</h3>
          <ul className="job-dt">
            <li>
              <a href="#" title="">
                Full Time
              </a>
            </li>
            <li>
              <span>$30 / hr</span>
            </li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id
            magna sit amet...{" "}
            <a href="#" title="">
              view more
            </a>
          </p>
          <ul className="skill-tags">
            <li>
              <a href="#" title="">
                HTML
              </a>
            </li>
            <li>
              <a href="#" title="">
                PHP
              </a>
            </li>
            <li>
              <a href="#" title="">
                CSS
              </a>
            </li>
            <li>
              <a href="#" title="">
                Javascript
              </a>
            </li>
            <li>
              <a href="#" title="">
                Wordpress
              </a>
            </li>
          </ul>
        </div>
        <div className="job-status-bar">
          <ul className="like-com">
            <li>
              <a href="#">
                <i className="fas fa-heart"></i> Like
              </a>
              <img src="assets/images/liked-img.png" alt="" />
              <span>25</span>
            </li>
            <li>
              <a href="#" className="com">
                <i className="fas fa-comment-alt"></i> Comment 15
              </a>
            </li>
          </ul>
          <a href="#">
            <i className="fas fa-eye"></i>Views 50
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
