import React, { Component } from 'react';

class General extends Component {
  render() {
    return (
      <div className="my-5 text-center">
        <h1 className="my-3 display-4">{this.props.name}</h1>
        <div>
          <h6>Email</h6>
          <p>{this.props.email}</p>
        </div>
        <div>
          <h6>Phone</h6>
          <p>{this.props.phone}</p>
        </div>
      </div>
    );
  }
}

export default General;
