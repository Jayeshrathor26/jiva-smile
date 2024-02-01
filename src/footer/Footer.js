import React from "react";
import "./../css/footer.css";
import Navimage from "./../images/logo.png";
import groupimg from "./../images/group.png";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        <section className="">
          <div className="mx-0 row mt-3 text-size">
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto ">
              <p>
                {" "}
                <img
                  src={Navimage}
                  alt="logo"
                  height={"88px"}
                  width={"160.56px"}
                />
              </p>
              <p className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
                suscipit lorem. Sed sodales ligula quis risus scelerisque
                tristique. Quisque semper facilisis ante vel pellentesque.
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto ">
              <h6 className="fw-bold  text-color mb-4">Important Link</h6>
              <p>
                <a href="#!" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Donate
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  About
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Contact Us
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto ">
              <h6 className="fw-bold  text-color  mb-4">Contact Us</h6>
              <p className="font-weight">
                <i class="fa-brands fa-square-whatsapp text-color social-icons me-3 whatsapp"></i>
                +91-1236548
              </p>
              <p className="font-weight">
                <i className="fas fa-envelope me-3 text-color"></i>
                info@jivasmile.com
              </p>
              <p className="text-position">
                <i className="fas  fa-location-dot me-3 text-color"></i>
                Lorem Ipsum Dolor Sit Amet,Consectetur Adipiscing Elit.
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto footer-btn">
              <button type="button" className="btn btn-primary mt-2" id="btn1">
                Start A Fundraiser &nbsp;
                <i class="fa-solid fa-arrow-right"></i>
              </button>

              <p className="font-weight mt-2">Supported by</p>
              <img src={groupimg} alt="logo" height={"40px"} width={"200px"} />
            </div>

            <hr />

            <div className="col-md-4  col-xl-2 mx-auto footer-position-left">
              <p className="text-reset font-weight"> ©Copyrightjivasmile</p>
            </div>
            <div className="col-md-4  col-xl-2 mx-auto">
              <p className="font-weight">
                <a href="#!" className="text-reset">
                  Privacy Policy
                </a>
              </p>
            </div>
            <div className="col-md-4  col-xl-2 mx-auto footer-position-right">
              <a href="" className="me-4 text-reset">
                <i className="fab fa-facebook-f text-color text-size social-icons"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-instagram text-color social-icons"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i class="fa-brands fa-x-twitter text-color social-icons"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-linkedin text-color social-icons"></i>
              </a>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
