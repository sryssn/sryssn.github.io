import React from 'react';
import { BsInstagram, BsTwitter, BsFacebook } from 'react-icons/bs';
import { Button } from 'react-bootstrap';

function Footer() {
  return (
    <div className="footer">
      <div>
        <span>
          Coffee Bro
        </span>
      </div>
      <div className="copyright">
        <span>
          Suryo Sasono © 2022
        </span>
      </div>
      <div className="sosial-media-group">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <Button className="sosial-media" variant="dark" type="button">
            <BsInstagram />
          </Button>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <Button className="sosial-media" variant="dark" type="button">
            <BsTwitter />
          </Button>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <Button className="sosial-media" variant="dark" type="button">
            <BsFacebook />
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Footer;
