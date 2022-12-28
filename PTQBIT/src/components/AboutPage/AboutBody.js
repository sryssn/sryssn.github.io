import React from 'react';

function AboutBody() {
  return (
    <div className="about-body">
      <div className="about-robusta">
        <img src="AboutPage/title-above.png" alt="title above" loading="lazy" />
        <h2>ABOUT ROBUSTA</h2>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </h6>
      </div>
      <div className="about-robusta-details">
        <div className="about-robusta-image">
          <img src="AboutPage/about-robusta-1.jpg" alt="about robusta 1" loading="lazy" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod temporincidid unt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
          </p>
        </div>
        <div className="about-robusta-image">
          <img src="AboutPage/about-robusta-2.jpg" alt="about robusta 2" loading="lazy" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod temporincidid unt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutBody;
