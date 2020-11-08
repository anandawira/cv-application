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
      class: '2018',
      company: 'PT Sat Nusapersada, Tbk',
      startDate: '2018/07/17',
      endDate: '2020/07/16',
      position: 'Production Planner',
      jobDesc:
        'Preparing required raw material and making productuion schedule to fulfill received orders on time.',
    };
  }

  render() {
    function submitHandler() {
      alert('good');
    }
    return (
      <div className="d-flex">
        <CvForm submitHandler={submitHandler} />
        <CV {...this.state} />
      </div>
    );
  }
}
