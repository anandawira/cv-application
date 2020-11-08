import React, { Component } from 'react';
import General from './General';
import Education from './Education';
import Experience from './Experience';

class CV extends Component {
  render() {
    console.log(this.props);
    return (
      <div
        id="cv"
        className="col-12 col-sm-8 col-md-6 col-lg-5 mx-auto my-5 border"
      >
        <General {...this.props} />
        <Education {...this.props} />
        <Experience {...this.props} />
      </div>
    );
  }
}

export default CV;
