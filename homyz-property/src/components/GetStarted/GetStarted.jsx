import React from 'react';
import './GetStarted.css';

export const GetStarted = () => {
  return (
    <section className="g-wrapper" id="getstarted">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className="primaryText">Get Started with Homyz</span>
                <span className="secondaryText">
                    Subscribe and find super attractive price quotes from us.
                    <br />
                    Find your residence soon!
                </span>
                <button className="button">
                    <a href="mailto:suryo.ssn11@gmail.com">Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
}
