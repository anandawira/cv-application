import React, { Component } from 'react';

class General extends Component {
  render() {
    return (
      <div className="my-5 text-center">
        <h1 className="my-3 h4">Experience</h1>
        <div>
          <h6>Company</h6>
          <p>PT Sat Nusapersada, Tbk</p>
        </div>
        <div>
          <h6>Start Date - End Date</h6>
          <p>07/2018 - 07/2020</p>
        </div>
        <div>
          <h6>Position</h6>
          <p>Production Planner</p>
        </div>
        <div>
          <h6>Job Description</h6>
          <p>
            Preparing required raw material and making productuion schedule to
            fulfill received orders on time.
          </p>
        </div>
      </div>
    );
  }
}

export default General;
