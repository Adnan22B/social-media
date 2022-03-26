import React from 'react'
import {Link } from "react-router-dom"
import myimg from "../../../../project.jpg"

export default function index () {
  return (
    <div id="events">
      <section className="project-info" id="projects">
        <div className="container">
          <div className="company-title">
            <h3>All Projects</h3>
          </div>
          <div className="companies-list mt-1 mb-1">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="company_profile_info">
                  <div className="company-up-info">
                    <img src={myimg} alt="" />
                    <h3>Events Title Lorem i[sum dolro sit amet ajnf ln</h3> 
                    <p>Event Location</p>
                  </div>
                  <Link
                    to="/single-project"
                    title=""
                    className="view-more-pro"
                  >
                    View Event
                  </Link>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </section>
    </div>
  )
}
