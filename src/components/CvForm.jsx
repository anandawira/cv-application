import React, { Component } from 'react';

export default class CvForm extends Component {
  render() {
    return (
      <div className="col-12 col-sm-8 col-md-6 col-lg-4 mx-auto my-5 border">
        <form onSubmit={this.props.submitHandler}>
          <h3>General</h3>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="Your full name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Email address"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              id="phone"
              placeholder="Phone number"
              required
            />
          </div>
          <h3 className="mt-5">Education</h3>
          <div className="form-group">
            <label htmlFor="school">School</label>
            <input
              type="text"
              className="form-control"
              name="school"
              id="school"
              placeholder="School name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="titleOfStudy">Title of Study</label>
            <input
              type="text"
              className="form-control"
              name="titleOfStudy"
              id="titleOfStudy"
              placeholder="Ex: Computer science"
              required
            />
          </div>
          <h3 className="mt-5">Experience</h3>
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              className="form-control"
              name="company"
              id="company"
              placeholder="Company Name"
              required
            />
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="startDate">Start</label>
                <input
                  type="date"
                  className="form-control"
                  name="startDate"
                  id="startDate"
                  required
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="endDate">End</label>
                <input
                  type="date"
                  className="form-control"
                  name="endDate"
                  id="endDate"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              className="form-control"
              name="position"
              id="position"
              placeholder="Job Title"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="jobDesc">Job Description</label>
            <input
              type="text"
              className="form-control"
              name="jobDesc"
              id="jobDesc"
              placeholder="Job Description"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
