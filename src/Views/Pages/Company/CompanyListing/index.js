import React from "react";
import {Link } from "react-router-dom"



export default function index() {
  return (
    <React.Fragment>
      <section className="companies-info">
        <div className="container">
          <div className="company-title">
            <h3>All Companies</h3>
          </div>
          <div className="companies-list">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="company_profile_info">
                  <div className="company-up-info">
                    <img src="assets/images/resources/cmp-icon.png" alt="" />
                    <h3>Facebook Inc.</h3>
                    <h4>Establish Feb, 2004</h4>
                    <ul>
                      <li>
                        <Link to="#" title="" className="follow">
                          Follow
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="" className="message-us">
                          <i className="fa fa-envelope"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <Link
                    to="/single-company"
                    title=""
                    className="view-more-pro"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="process-comm">
            <div className="spinner">
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div className="bounce3"></div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
