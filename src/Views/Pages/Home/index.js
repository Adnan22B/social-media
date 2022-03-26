import React from "react";
import UserProfile from "./UserProfile";
import TopCompanies from "./TopCompanies";
import UserPosts from "./UserPosts";
import UserPostProjects from "./UserPostProjects";

export default function index() {
  return (
    <main>
      <div className="main-section">
        <div className="container-fluid">
          <div className="main-section-data">
            <div className="row">
              <div className="col-lg-3 col-md-4 pd-left-none no-pd">
                <div className="main-left-sidebar no-margin">
                  {/* LEFT BAR USER PROFILE TAGS  */}
                  <UserProfile />
                  {/* LEFT BAR USER PROFILE TAGS  */}
                </div>
              </div>
              <div className="col-lg-6 col-md-8 no-pd">
                <div className="main-ws-sec">
                  {/* Post to show user  */}
                  <UserPostProjects />

                  {/* Post to show user  */}
                  <div className="posts-section">
                    {/* POst to show user  */}
                    <UserPosts />

                    {/* Posts to show user  */}

                    <div className="process-comm">
                      <div className="spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 pd-right-none no-pd">
                {/* Top Companies Component */}
                <TopCompanies />
                {/* Top Companies components */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
