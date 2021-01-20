import React from 'react'
import "./landing.css";
import video from "../../resources/videotrial.mp4";
import "./landing.css";
import facebook from "../../resources/facebook.png";
import instagram from "../../resources/instagram.png";
import twitter from "../../resources/twitter.png";

export default function landing() {
    const menuActive = () => { 
        const menuToggle = document.querySelector('.toggle');
        const showcase = document.querySelector('.showcase');
        menuToggle.classList.toggle('active');
        showcase.classList.toggle('active');
    }
    return (
        <div>
            <section className="showcase">
                <header>
                    <h2 className="logo">Travel</h2>
                    <div className="toggle" onClick={menuActive}></div>
                </header>
                <video autoPlay="autoplay" muted loop>
                    <source src={video} type="video/mp4"></source>
                </video>
                <div className="overlay"></div>
                <div className="text">
                    <h2>Never Stop</h2>
                    <h3>Exploring the World!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras fermentum odio eu feugiat pretium nibh ipsum.</p>
                    <a href="#">Explore</a>
                </div>
                <ul className="social">
                    <li><a href="#"><img width="30px" src={facebook} alt="Facebook"></img></a></li>
                    <li><a href="#"><img width="30px" src={twitter} alt="Twitter"></img></a></li>
                    <li><a href="#"><img width="30px" src={instagram} alt="Instagram"></img></a></li>
                </ul>
            </section>
            <div className="menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Destination</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}
