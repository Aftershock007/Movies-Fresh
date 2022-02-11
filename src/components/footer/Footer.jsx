import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">Movies Fresh</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <a href="/">Home</a>
                        <Link to="/">Contact us</Link>
                        <Link to="/">About us</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Live</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Privacy policy</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Must watch</Link>
                        <Link to="/">Recent release</Link>
                        <a href="https://www.imdb.com/chart/top/" rel="noreferrer" target= "_blank">Top IMDB</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
