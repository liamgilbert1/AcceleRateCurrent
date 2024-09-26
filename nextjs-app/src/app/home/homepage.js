import React, { useState, useEffect } from 'react';
import './homepage.css';

function App() {
    const [scrollTop, setScrollTop] = useState(0);

    const handleScroll = (event) => {
        const homePage = event.target;
        const buffer = 50;
        const scottIndicator = document.getElementById('scott');

        if (homePage.scrollTop + homePage.clientHeight + buffer > homePage.scrollHeight) {
            scottIndicator.style.display = 'none';
        }
        else {
            scottIndicator.style.display = 'block'
        }
        setScrollTop(homePage.scrollTop)
    };

    useEffect(() => {
        const homePage = document.getElementById('home-page')
        homePage.addEventListener('scroll', handleScroll);

        return () => homePage.removeEventListener('scroll', handleScroll);
    }, [scrollTop]);

    return (
        <div>
            <Header />
            <div id="home-page">
                <Section id="about" className="white" />
                <Section className="green" />
                <Section className="white" />
                <Section className="green" />
                <Section className="white" />
                <Section id="pricing" className="green" />
                <Section id="contact" className="white" />
            </div>
            <Scott />
        </div>
    );
}

function Header() {
    return (
        <div id="header">
        <div id="branding">
          <div id="logo"></div>
        </div>
        <div id="nav">
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#pricing">Pricing</a>
          <a className="nav-link" href="#contact">Contact</a>
          <button className="action-button" id="login">Login</button>
        </div>
      </div>
    );
}

function Section({ id, className }) {
    return <div id={id} className={`section ${className}`}></div>;
  }
  
  function Scott() {
    return <div id="scott"></div>;
  }
  
  export default App;