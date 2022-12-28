import React from 'react';

function OurSweetGallery() {
  return (
    <>
      <div className="our-sweet-gallery">
        <h2>
          OUR SWEET GALLERY
        </h2>
        <img src="HomePage/title-separator.png" alt="title separator" />
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore
        </h6>
      </div>
      <div className="sweet-gallery">
        <img src="HomePage/gallery-1.jpg" alt="gallery 1" loading="lazy" />
        <img src="HomePage/gallery-2.jpg" alt="gallery 2" loading="lazy" />
        <img src="HomePage/gallery-3.jpg" alt="gallery 3" loading="lazy" />
        <img src="HomePage/gallery-4.jpg" alt="gallery 4" loading="lazy" />
        <img src="HomePage/gallery-5.jpg" alt="gallery 5" loading="lazy" />
        <img src="HomePage/gallery-6.jpg" alt="gallery 6" loading="lazy" />
        <img src="HomePage/gallery-7.jpg" alt="gallery 7" loading="lazy" />
        <img src="HomePage/gallery-8.jpg" alt="gallery 8" loading="lazy" />
      </div>
    </>
  );
}

export default OurSweetGallery;
