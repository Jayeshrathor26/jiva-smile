import React from "react";
import "../css/card.css";
import hospital from "./../images/hospital.jpg";

const Cards = () => {
  let percent = 65;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div
                className="card"
                style={{ backgroundImage: `url(${hospital})` }}
              >
                <p className="card-text text-content">Tax Benefits</p>
              </div>
              <div className="title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
              <div className="card-body card-item">
                <div className="row">
                  <div className="col-md-6">
                    <p>Raised</p>
                    <div>
                      <p className="card-text price">₹ 8,15,120</p>
                      <p className="text-alignment">Raise</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p>Created By</p>
                    <p className="card-text">Lorem Ipsum</p>
                    <p className="text-alignment">Doner</p>
                  </div>
                </div>
                <p>
                  <div class="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percent}%` }} //style="width: 25%;"
                      aria-valuenow="65"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="alignment">
                    {" "}
                    <p>{percent}% </p>
                  </div>
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <div
                className="card"
                style={{ backgroundImage: `url(${hospital})` }}
              >
                <p className="card-text text-content">Tax Benefits</p>
              </div>
              <div className="title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
              <div className="card-body card-item">
                <div className="row">
                  <div className="col-md-6">
                    <p>Raised</p>
                    <div>
                      <p className="card-text price">₹ 8,15,120</p>
                      <p className="text-alignment">Raise</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p>Created By</p>
                    <p className="card-text">Lorem Ipsum</p>
                    <p className="text-alignment">Doner</p>
                  </div>
                </div>
                <p>
                  <div class="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percent}%` }} //style="width: 25%;"
                      aria-valuenow="65"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="alignment">
                    {" "}
                    <p>{percent}% </p>
                  </div>
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <div
                className="card"
                style={{ backgroundImage: `url(${hospital})` }}
              >
                <p className="card-text text-content">Tax Benefits</p>
              </div>
              <div className="title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
              <div className="card-body card-item">
                <div className="row">
                  <div className="col-md-6">
                    <p>Raised</p>
                    <div>
                      <p className="card-text price">₹ 8,15,120</p>
                      <p className="text-alignment">Raise</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p>Created By</p>
                    <p className="card-text">Lorem Ipsum</p>
                    <p className="text-alignment">Doner</p>
                  </div>
                </div>
                <p>
                  <div class="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percent}%` }} //style="width: 25%;"
                      aria-valuenow="65"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="alignment">
                    {" "}
                    <p>{percent}% </p>
                  </div>
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4">
            <div class="card">
              <div
                className="card"
                style={{ backgroundImage: `url(${hospital})` }}
              >
                <p className="card-text text-content">Tax Benefits</p>
              </div>
              <div className="title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
              <div className="card-body card-item">
                <div className="row">
                  <div className="col-md-6">
                    <p>Raised</p>
                    <div>
                      <p className="card-text price">₹ 8,15,120</p>
                      <p className="text-alignment">Raise</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p>Created By</p>
                    <p className="card-text">Lorem Ipsum</p>
                    <p className="text-alignment">Doner</p>
                  </div>
                </div>
                <p>
                  <div class="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percent}%` }} //style="width: 25%;"
                      aria-valuenow="65"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="alignment">
                    {" "}
                    <p>{percent}% </p>
                  </div>
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <div
                className="card"
                style={{ backgroundImage: `url(${hospital})` }}
              >
                <p className="card-text text-content">Tax Benefits</p>
              </div>
              <div className="title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
              <div className="card-body card-item">
                <div className="row">
                  <div className="col-md-6">
                    <p>Raised</p>
                    <div>
                      <p className="card-text price">₹ 8,15,120</p>
                      <p className="text-alignment">Raise</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p>Created By</p>
                    <p className="card-text">Lorem Ipsum</p>
                    <p className="text-alignment">Doner</p>
                  </div>
                </div>
                <p>
                  <div class="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percent}%` }} //style="width: 25%;"
                      aria-valuenow="65"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="alignment">
                    {" "}
                    <p>{percent}% </p>
                  </div>
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <div
                className="card"
                style={{ backgroundImage: `url(${hospital})` }}
              >
                <p className="card-text text-content">Tax Benefits</p>
              </div>
              <div className="title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
              <div className="card-body card-item">
                <div className="row">
                  <div className="col-md-6">
                    <p>Raised</p>
                    <div>
                      <p className="card-text price">₹ 8,15,120</p>
                      <p className="text-alignment">Raise</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p>Created By</p>
                    <p className="card-text">Lorem Ipsum</p>
                    <p className="text-alignment">Doner</p>
                  </div>
                </div>
                <p>
                  <div class="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percent}%` }} //style="width: 25%;"
                      aria-valuenow="65"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="alignment">
                    {" "}
                    <p>{percent}% </p>
                  </div>
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
