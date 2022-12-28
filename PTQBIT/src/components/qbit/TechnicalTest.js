import React, { useEffect } from 'react';
import SoalNo1 from './SoalNo1';
import SoalNo2 from './SoalNo2';
import SoalNo3 from './SoalNo3';
import SoalNo4 from './SoalNo4';
import SoalNo5 from './SoalNo5';

function TechnicalTest() {
  useEffect(() => {
    document.title = 'QBIT';
  });

  return (
    <div className="technical-test">
      <div>
        <h1>Junior Fullstack - Technical Test</h1>
        <SoalNo1 />
        <SoalNo2 />
        <SoalNo3 />
        <SoalNo4 />
        <SoalNo5 />
      </div>
    </div>
  );
}

export default TechnicalTest;
