import React from 'react';
import { RxAvatar } from 'react-icons/rx';

function Testimonial() {
  return (
    <div className="testimonial">
      <h2>TESTIMONIALS</h2>
      <img src="AboutPage/carousel-coffee-separator.png" alt="carousel separator" loading="lazy" />
      <div className="detail-testimonials">
        <div className="detail-testimonial">
          <RxAvatar className="avatar" />
          <p>
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
            Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
            Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
            sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
            Nam quam nunc, blandit vel

            <span>Jean Thompson</span>
          </p>
        </div>
        <div className="detail-testimonial">
          <RxAvatar className="avatar" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, squi officia

            <span>Danielle Jones</span>
          </p>
        </div>
        <div className="detail-testimonial">
          <RxAvatar className="avatar" />
          <p>
            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
            sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,
            luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
            Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
            Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Maecenas tempus, tellus eget

            <span>Margaret Wagner</span>
          </p>
        </div>
        <div className="detail-testimonial">
          <RxAvatar className="avatar" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, squi officia

            <span>David Ricardo</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
