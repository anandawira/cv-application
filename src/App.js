import React from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  return (
    <div className="">
      <div id="cv" className="col-12 col-sm-8 col-md-6 col-lg-5 mx-auto border">
        <General />
        <Education />
        <Experience />
      </div>
    </div>
  );
}

export default App;
