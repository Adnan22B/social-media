import React from "react";
import TopCompanies from "../../Home/TopCompanies";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <React.Fragment>
      <section class="cover-sec">
        <img src="assets/images/resources/company-cover.jpg" alt="" />
      </section>
      <main>
        <div class="main-section">
          <div class="container">
            <div class="main-section-data">
              <div class="row">
                <div class="col-lg-3">
                  <div class="main-left-sidebar">
                    <div class="user_profile">
                      <div class="user-pro-img">
                        <img
                          src="assets/images/resources/company-profile.png"
                          alt=""
                        />
                      </div>
                      <div class="user_pro_status">
                        <ul class="flw-hr">
                          <li>
                            <Link to="#" title="" class="flww">
                              <i class="la la-plus"></i> Follow
                            </Link>
                          </li>
                        </ul>
                        <ul class="flw-status">
                          <li>
                            <span>Following</span>
                            <b>34</b>
                          </li>
                          <li>
                            <span>Followers</span>
                            <b>155</b>
                          </li>
                        </ul>
                      </div>
                      <ul class="social_links">
                        <li>
                          <Link to="#" title="">
                            <i class="la la-globe"></i> www.example.com
                          </Link>
                        </li>
                        <li>
                          <Link to="#" title="">
                            <i class="fa fa-facebook-square"></i>{" "}
                            Http://www.facebook.com/john...
                          </Link>
                        </li>
                        <li>
                          <Link to="#" title="">
                            <i class="fa fa-twitter"></i>{" "}
                            Http://www.Twitter.com/john...
                          </Link>
                        </li>
                        <li>
                          <Link to="#" title="">
                            <i class="fa fa-google-plus-square"></i>{" "}
                            Http://www.googleplus.com/john...
                          </Link>
                        </li>
                        <li>
                          <Link to="#" title="">
                            <i class="fa fa-behance-square"></i>{" "}
                            Http://www.behance.com/john...
                          </Link>
                        </li>
                        <li>
                          <Link to="#" title="">
                            <i class="fa fa-pinterest"></i>{" "}
                            Http://www.pinterest.com/john...
                          </Link>
                        </li>
                        <li>
                          <Link to="#" title="">
                            <i class="fa fa-instagram"></i>{" "}
                            Http://www.instagram.com/john...
                          </Link>
                        </li>
                        <li>
                          <Link to="#" title="">
                            <i class="fa fa-youtube"></i>{" "}
                            Http://www.youtube.com/john...
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="main-ws-sec">
                    <div class="user-tab-sec">
                      <h3>Facebook Inc.</h3>
                      <div class="star-descp">
                        <span>Established Since 2009</span>
                        <ul>
                          <li>
                            <i class="fa fa-star"></i>
                          </li>
                          <li>
                            <i class="fa fa-star"></i>
                          </li>
                          <li>
                            <i class="fa fa-star"></i>
                          </li>
                          <li>
                            <i class="fa fa-star"></i>
                          </li>
                          <li>
                            <i class="fa fa-star-half-o"></i>
                          </li>
                        </ul>
                      </div>
                      <div class="tab-feed">
                        <ul>
                          <li data-tab="feed-dd" class="active">
                            <Link to="#" title="">
                              <img src="assets/images/ic1.png" alt="" />
                              <span>Feed</span>
                            </Link>
                          </li>
                          <li data-tab="info-dd">
                            <Link to="#" title="">
                              <img src="assets/images/ic2.png" alt="" />
                              <span>Info</span>
                            </Link>
                          </li>
                          <li data-tab="portfolio-dd">
                            <Link to="#" title="">
                              <img src="assets/images/ic3.png" alt="" />
                              <span>Projects</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="product-feed-tab current" id="feed-dd">
                      <div class="posts-section">
                        <div class="post-bar">
                          <div class="post_topbar">
                            <div class="usy-dt">
                              <img
                                src="assets/images/resources/company-pic.png"
                                alt=""
                              />
                              <div class="usy-name">
                                <h3>Facebook Inc.</h3>
                                <span>
                                  <img src="assets/images/clock.png" alt="" />3
                                  min ago
                                </span>
                              </div>
                            </div>
                            <div class="ed-opts">
                              <Link to="#" title="" class="ed-opts-open">
                                <i class="la la-ellipsis-v"></i>
                              </Link>
                              <ul class="ed-options">
                                <li>
                                  <Link to="#" title="">
                                    Edit Post
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#" title="">
                                    Unsaved
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#" title="">
                                    Unbid
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#" title="">
                                    Close
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#" title="">
                                    Hide
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="epi-sec">
                            <ul class="descp">
                              <li>
                                <img src="assets/images/icon8.png" alt="" />
                                <span>Epic Coder</span>
                              </li>
                              <li>
                                <img src="assets/images/icon9.png" alt="" />
                                <span>India</span>
                              </li>
                            </ul>
                          </div>
                          <div class="job_descp">
                            <h3>Senior PHP Developer</h3>
                            <ul class="job-dt">
                              <li>
                                <Link to="#" title="">
                                  Full Time
                                </Link>
                              </li>
                              <li>
                                <span>$30 / hr</span>
                              </li>
                            </ul>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Aliquam luctus hendrerit metus, ut
                              ullamcorper quam finibus at. Etiam id magna sit
                              amet...{" "}
                              <Link to="#" title="">
                                view more
                              </Link>
                            </p>
                            <ul class="skill-tags">
                              <li>
                                <Link to="#" title="">
                                  HTML
                                </Link>
                              </li>
                              <li>
                                <Link to="#" title="">
                                  PHP
                                </Link>
                              </li>
                              <li>
                                <Link to="#" title="">
                                  CSS
                                </Link>
                              </li>
                              <li>
                                <Link to="#" title="">
                                  Javascript
                                </Link>
                              </li>
                              <li>
                                <Link to="#" title="">
                                  Wordpress
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div class="job-status-bar">
                            <ul class="like-com">
                              <li>
                                <Link to="#" class="active">
                                  <i class="fas fa-heart"></i> Like
                                </Link>
                                <img src="assets/images/liked-img.png" alt="" />
                                <span>25</span>
                              </li>
                              <li>
                                <Link to="#" class="com">
                                  <i class="fas fa-comment-alt"></i> Comments 15
                                </Link>
                              </li>
                            </ul>
                            <Link to="#">
                              <i class="fas fa-eye"></i>Views 50
                            </Link>
                          </div>
                        </div>
                        <div class="process-comm">
                          <div class="spinner">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="product-feed-tab" id="info-dd">
                      <div class="user-profile-ov">
                        <h3>
                          <Link to="#" title="" class="overview-open">
                            Overview
                          </Link>{" "}
                          <Link to="#" title="" class="overview-open">
                            <i class="fa fa-pencil"></i>
                          </Link>
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque tempor aliquam felis, nec condimentum
                          ipsum commodo id. Vivamus sit amet augue nec urna
                          efficitur tincidunt. Vivamus consectetur aliquam
                          lectus commodo viverra. Nunc eu augue nec arcu
                          efficitur faucibus. Aliquam accumsan ac magna
                          convallis bibendum. Quisque laoreet augue eget augue
                          fermentum scelerisque. Vivamus dignissim mollis est
                          dictum blandit. Nam porta auctor neque sed congue.
                          Nullam rutrum eget ex at maximus. Lorem ipsum dolor
                          sit amet, consectetur adipiscing elit. Donec eget
                          vestibulum lorem.
                        </p>
                      </div>
                      <div class="user-profile-ov st2">
                        <h3>
                          <Link to="#" title="" class="esp-bx-open">
                            Establish Since{" "}
                          </Link>
                          <Link to="#" title="" class="esp-bx-open">
                            <i class="fa fa-pencil"></i>
                          </Link>{" "}
                          <Link to="#" title="" class="esp-bx-open">
                            <i class="fa fa-plus-square"></i>
                          </Link>
                        </h3>
                        <span>February 2004</span>
                      </div>
                      <div class="user-profile-ov">
                        <h3>
                          <Link to="#" title="" class="emp-open">
                            Total Employees
                          </Link>{" "}
                          <Link to="#" title="" class="emp-open">
                            <i class="fa fa-pencil"></i>
                          </Link>{" "}
                          <Link to="#" title="" class="emp-open">
                            <i class="fa fa-plus-square"></i>
                          </Link>
                        </h3>
                        <span>17,048</span>
                      </div>
                      <div class="user-profile-ov">
                        <h3>
                          <Link to="#" title="" class="lct-box-open">
                            Location
                          </Link>{" "}
                          <Link to="#" title="" class="lct-box-open">
                            <i class="fa fa-pencil"></i>
                          </Link>{" "}
                          <Link to="#" title="" class="lct-box-open">
                            <i class="fa fa-plus-square"></i>
                          </Link>
                        </h3>
                        <h4>USA</h4>
                        <p> Menlo Park, California, United States</p>
                      </div>
                    </div>
                    <div class="product-feed-tab" id="portfolio-dd">
                      <div class="portfolio-gallery-sec">
                        <h3>Portfolio</h3>
                        <div class="gallery_pf">
                          <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-6">
                              <div class="gallery_pt">
                                <img
                                  src="assets/images/resources/pf-img1.jpg"
                                  alt=""
                                />
                                <Link to="#" title="">
                                  <img src="assets/images/all-out.png" alt="" />
                                </Link>
                              </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-6">
                              <div class="gallery_pt">
                                <img
                                  src="assets/images/resources/pf-img2.jpg"
                                  alt=""
                                />
                                <Link to="#" title="">
                                  <img src="assets/images/all-out.png" alt="" />
                                </Link>
                              </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-6">
                              <div class="gallery_pt">
                                <img
                                  src="assets/images/resources/pf-img3.jpg"
                                  alt=""
                                />
                                <Link to="#" title="">
                                  <img src="assets/images/all-out.png" alt="" />
                                </Link>
                              </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-6">
                              <div class="gallery_pt">
                                <img
                                  src="assets/images/resources/pf-img4.jpg"
                                  alt=""
                                />
                                <Link to="#" title="">
                                  <img src="assets/images/all-out.png" alt="" />
                                </Link>
                              </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-6">
                              <div class="gallery_pt">
                                <img
                                  src="assets/images/resources/pf-img5.jpg"
                                  alt=""
                                />
                                <Link to="#" title="">
                                  <img src="assets/images/all-out.png" alt="" />
                                </Link>
                              </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-6">
                              <div class="gallery_pt">
                                <img
                                  src="assets/images/resources/pf-img6.jpg"
                                  alt=""
                                />
                                <Link to="#" title="">
                                  <img src="assets/images/all-out.png" alt="" />
                                </Link>
                              </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-6">
                              <div class="gallery_pt">
                                <img
                                  src="assets/images/resources/pf-img7.jpg"
                                  alt=""
                                />
                                <Link to="#" title="">
                                  <img src="assets/images/all-out.png" alt="" />
                                </Link>
                              </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-6">
                              <div class="gallery_pt">
                                <img
                                  src="assets/images/resources/pf-img8.jpg"
                                  alt=""
                                />
                                <Link to="#" title="">
                                  <img src="assets/images/all-out.png" alt="" />
                                </Link>
                              </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-6">
                              <div class="gallery_pt">
                                <img
                                  src="assets/images/resources/pf-img9.jpg"
                                  alt=""
                                />
                                <Link to="#" title="">
                                  <img src="assets/images/all-out.png" alt="" />
                                </Link>
                              </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-6">
                              <div class="gallery_pt">
                                <img
                                  src="assets/images/resources/pf-img10.jpg"
                                  alt=""
                                />
                                <Link to="#" title="">
                                  <img src="assets/images/all-out.png" alt="" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="right-sidebar">
                    <TopCompanies />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
