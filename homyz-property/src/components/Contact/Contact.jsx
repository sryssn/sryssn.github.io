import React from 'react';
import './Contact.css';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill, BsFillCameraVideoFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

export const Contact = () => {
  return (
    <section className="c-wrapper" id="contact">
        <div className="paddings innerWidth flexCenter c-container">
            <div className="flexColStart c-left">
                <span className="orangeText">Our Contacts</span>
                <span className="primaryText">Easy to Contact us</span>
                <span className="secondaryText">
                    We always ready to help by providing the best services for you. We belive a good blace to live can make your life better.
                </span>
                <div className="flexColStart contactModes">
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart innerWidth">
                                <div className="flexCenter icon">
                                    <MdCall size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Call</span>
                                    <span className="sedondaryText">082243393113</span>
                                </div>
                            </div>
                            <a className="flexCenter innerWidth button" href="tel:082243393113">Call Now</a>
                        </div>
                        <div className="flexColCenter mode">
                            <div className="flexStart innerWidth">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Chat</span>
                                    <span className="sedondaryText">082243393113</span>
                                </div>
                            </div>
                            <a className="flexCenter innerWidth button" href="https://api.whatsapp.com/send/?phone=6282243393113">Chat Now</a>
                        </div>
                    </div>
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart innerWidth">
                                <div className="flexCenter icon">
                                    <BsFillCameraVideoFill size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Video Call</span>
                                    <span className="sedondaryText">082243393113</span>
                                </div>
                            </div>
                            <a className="flexCenter innerWidth button" href="https://api.whatsapp.com/send/?phone=6282243393113">Video Call Now</a>
                        </div>
                        <div className="flexColCenter mode">
                            <div className="flexStart innerWidth">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Message</span>
                                    <span className="sedondaryText">082243393113</span>
                                </div>
                            </div>
                            <a className="flexCenter innerWidth button" href="sms:082243393113">Message Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="innerWidth flexEnd c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="contact" loading="lazy" />
                </div>
            </div>
        </div>
    </section>
  )
}
