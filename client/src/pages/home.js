// home.js

import React, { useEffect, useState } from 'react';
import '../css/home.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import promotion1 from '../Images/mighty.jpg'; // Import the images
import promotion2 from '../Images/mighty.jpg';
import promotion3 from '../Images/mighty.jpg';
import { useTranslation } from 'react-i18next';

function HomePage() {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const switchLanguage = () => {
        const newLanguage = i18n.language === 'en' ? 'ar' : 'en'; // Toggle between 'en' and 'ar'
        i18n.changeLanguage(newLanguage);
        console.log('Switched to language:', newLanguage);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                document.body.classList.add('scrolled');
            } else {
                document.body.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };

    return (
        <div className="home-page">
            <header>
                <div className="menu-left">
                    <ul className={isMenuOpen ? "menu-active" : ""}>
                        <li><a href="#home">{t('translation.home')}</a></li>
                        <li><a href="#menu">{t('translation.menu')}</a></li>
                        <li><a href="#contact">{t('translation.contact')}</a></li>
                    </ul>
                    {isMobile && (
                        <button className="menu-toggle" onClick={toggleMenu}>
                            {isMenuOpen ? "Close Menu" : "Open Menu"}
                        </button>
                    )}
                </div>
                <div className="logo">
                    {/* Logo image goes here */}
                </div>
                <div className="menu-right">
                    <button onClick={() => switchLanguage('ar')}>
                        {t('translation.switchToArabic')}
                    </button>
                    <button>{t('translation.login')}</button>
                </div>
            </header>

            {/* Slider */}
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <img src={promotion1} alt="Promotion 1"/>
                    </div>
                    <div>
                        <img src={promotion2} alt="Promotion 2"/>
                    </div>
                    <div>
                        <img src={promotion3} alt="Promotion 3"/>
                    </div>
                </Slider>
            </div>

            {/* Hero Section */}
            <section className="hero">
                <h2>Welcome to Restaurant Name</h2>
                <p>Delicious meals served fresh daily!</p>
                <button>Order Now</button>
            </section>

            {/* Featured Products */}
            <section className="featured-products">
                <h2>Featured Products</h2>
                {/* Product cards go here */}
            </section>

            {/* Menu */}
            <section className="menu">
                <h2>Menu</h2>
                {/* Menu items go here */}
            </section>

            {/* Contact */}
            <section className="contact">
                <h2>Contact</h2>
                {/* Contact information and form go here */}
            </section>

            {/* Footer */}
            <footer>
                <p>&copy; 2024 Restaurant Name. All Rights Reserved.</p>
                {/* Additional links and information */}
            </footer>
        </div>
    );
}

export default HomePage;
