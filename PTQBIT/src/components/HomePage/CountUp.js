import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

function CountUpSection() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      <div className="countUp-wrapper">
        {
          counterOn
          && (
          <>
            <div className="countUp">
              <span>
                <CountUp start={0} end={250} duration={2} delay={0} />
              </span>
              <h5>VARIETIES OF COFFEE</h5>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean</p>
            </div>
            <div className="countUp">
              <span><CountUp start={0} end={123} duration={2} delay={0} /></span>
              <h5>HOURS OF TESTING</h5>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean</p>
            </div>
            <div className="countUp">
              <span><CountUp start={0} end={321} duration={2} delay={0} /></span>
              <h5>COFFEE MARKETS</h5>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean</p>
            </div>
            <div className="countUp">
              <span><CountUp start={0} end={220} duration={2} delay={0} /></span>
              <h5>COFFEE BRANDS</h5>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean</p>
            </div>
          </>
          )
        }
      </div>
    </ScrollTrigger>
  );
}

export default CountUpSection;
