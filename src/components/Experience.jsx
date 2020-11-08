import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return (
      <div className="my-5 text-center">
        <h1 className="my-3 h4">Experience</h1>
        <div>
          <h6>Company</h6>
          <p>{this.props.company}</p>
        </div>
        <div>
          <h6>Start Date - End Date</h6>
          <p>{this.props.startDate} - {this.props.endDate}</p>
        </div>
        <div>
          <h6>Position</h6>
          <p>{this.props.position}</p>
        </div>
        <div>
          <h6>Job Description</h6>
          <p>{this.props.jobDesc}</p>
        </div>
      </div>
    );
  }
}

export default Experience;
