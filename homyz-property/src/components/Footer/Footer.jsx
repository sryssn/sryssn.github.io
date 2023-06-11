import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import './Footer.css';

export const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth f-container">
            <div className="flexCenter">
                <div className="flexColStart f-left">
                    <img src="./logo2.png" alt="logo2" width={120} loading="lazy" />
                    <span className="secondaryText">
                        Our vision is to make all people
                        <br />
                        the best place to live for them.
                    </span>
                </div>
                <div className="flexColStart f-right">
                    <span className="primaryText">Information</span>
                    <span className="secondaryText">Jl. R. Soeprapto, Grobogan, Jawa Tengah</span>
                </div>
            </div>
            <div className="flexCenter made">
                <span className="secondaryText">Made with <AiFillHeart /> by Suryo Sasono</span>
            </div>
        </div>
    </section>
  )
}
