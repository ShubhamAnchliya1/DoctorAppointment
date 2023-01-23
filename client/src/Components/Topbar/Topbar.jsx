import React from "react";
import "./Topbar.css";
import {
  MailOutlined,
  MobileOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const Topbar = () => {
  return (
    <>
      {/* <div className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <a href="">
                <span className="mr-2 "></span>
                <span className="d-none d-md-inline-block">
                  info@yourdomain.com
                </span>
              </a>

            <span className="mx-md-2 d-inline-block"></span>

              <a href="">
              <span className="mr-2 "></span>
                <span className="d-none d-md-inline-block">
                1+ (234) 5678 9101
                </span>
              </a>

              <div className="float-right">
              <a href="">
              <span className="mr-2 "></span>
                <span className="d-none d-md-inline-block">
                Twitter
                </span>
              </a>
              <a href="">
              <span className="mr-2 "></span>
                <span className="d-none d-md-inline-block">
                Facebook
                </span>
              </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="topbar">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-9 d-md-flex">
              <h6 className="me-3">
                <span className="me-2">
                  <MobileOutlined />
                </span>
                call us now! +1 305 708 2563
              </h6>

              <h6 className="me-3">
                <span className="me-2">
                  <MailOutlined />
                </span>
                medical@example.com
              </h6>
            </div>

            <div className="col-lg-3 social-icon">
              <ul>
                <li>
                  <a href="#!">
                    <i
                    
                      style={{ fontSize: "16px" }}
                      aria-hidden="true"
                    >
                      <FacebookOutlined />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i
                
                      style={{ fontSize: "16px" }}
                      aria-hidden="true"
                    >
                      <InstagramOutlined />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i
                    
                      style={{ fontSize: "16px" }}
                      aria-hidden="true"
                    >
                      <TwitterOutlined />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
