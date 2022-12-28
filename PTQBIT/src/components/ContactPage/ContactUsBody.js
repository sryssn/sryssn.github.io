import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { BsInstagram, BsTwitter, BsFacebook } from 'react-icons/bs';

function ContactUsBody() {
  return (
    <div className="contact-us-body">
      <div className="get-in-touch">
        <h3>GET IN TOUCH</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
        </p>
        <ul>
          <li>Duis aute irure dolor</li>
          <li>In reprehenderit in</li>
          <li>Voluptate velit esse</li>
          <li>Illum dolore eu fugiat nulla pariatur.</li>
        </ul>
        <div className="contact-us-sosial-media-group">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <Button className="contact-us-sosial-media" variant="light" type="button">
              <BsInstagram />
            </Button>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <Button className="contact-us-sosial-media" variant="light" type="button">
              <BsTwitter />
            </Button>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <Button className="contact-us-sosial-media" variant="light" type="button">
              <BsFacebook />
            </Button>
          </a>
        </div>
      </div>
      <div className="contact-form">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Subject" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} placeholder="Message here..." />
          </Form.Group>
          <Button className="button-form" variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default ContactUsBody;
