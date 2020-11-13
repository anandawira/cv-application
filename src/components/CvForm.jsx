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
              defaultValue="Ananda Wiradharma"
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
              defaultValue="anandawira754@gmail.com"
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
              defaultValue="+6285156418321"
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
              defaultValue="Universitas Internasional Batam"
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
              defaultValue="Computer Science"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="classYear">Class</label>
            <input
              type="number"
              className="form-control"
              name="classYear"
              id="classYear"
              placeholder="2020"
              defaultValue="2020"
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
              defaultValue="PT SAT NUSAPERSADA Tbk"
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
                  defaultValue="2018-07-16"
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
                  defaultValue="2020-07-15"
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
              defaultValue="Production Planner"
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
              defaultValue="Preparing required raw material and making productuion schedule to fulfill received orders on time. "
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
