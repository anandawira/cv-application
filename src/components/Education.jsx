import React, { Component } from 'react';

class Education extends Component {
  render() {
    return (
      <div className="my-5 text-center">
        <h1 className="my-3 h4">Education</h1>
        <div>
          <h6>School</h6>
          <p>{this.props.school}</p>
        </div>
        <div>
          <h6>Title of Study</h6>
          <p>{this.props.titleOfStudy}</p>
        </div>
        <div>
          <h6>Class</h6>
          <p>{this.props.class}</p>
        </div>
      </div>
    );
  }
}

export default Education;
