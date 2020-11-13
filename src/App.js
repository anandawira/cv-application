import React, { Component } from 'react';
import CV from './components/CV';
import CvForm from './components/CvForm';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Ananda Wiradharma',
      email: 'anandawira754@gmail.com',
      phone: '+6285156418321',
      school: 'Universitas Internasional Batam',
      titleOfStudy: 'Computer Science',
      classYear: '2018',
      company: 'PT Sat Nusapersada, Tbk',
      startDate: '2018/07/17',
      endDate: '2020/07/16',
      position: 'Production Planner',
      jobDesc:
        'Preparing required raw material and making productuion schedule to fulfill received orders on time.',
    };

    this.submitHandler = this.submitHandler.bind(this);
  }
  submitHandler(e) {
    e.preventDefault();
    this.setState({
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      school: document.getElementById('school').value,
      titleOfStudy: document.getElementById('titleOfStudy').value,
      classYear: document.getElementById('classYear').value,
      company: document.getElementById('company').value,
      startDate: document.getElementById('startDate').value,
      endDate: document.getElementById('endDate').value,
      position: document.getElementById('position').value,
      jobDesc: document.getElementById('jobDesc').value,
    });
  }

  render() {
    return (
      <div className="d-flex">
        <CvForm submitHandler={this.submitHandler} />
        <CV {...this.state} />
      </div>
    );
  }
}
