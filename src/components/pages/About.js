import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaCss3, FaGit, FaGithub, FaHtml5, FaJava, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import headshot from './images/headshot.jfif'
import '../styles/about.css'
import img0 from './images/hiking.jpeg'
import img1 from './images/biking.jpeg'
import img2 from './images/boarding.jpeg'

export default function About() {
    const imgArray = [img0, img1, img2]
    const [hobbyImage, setImage] = useState(2)

    return (
        <div className='about-container'>
            <div className='first-row-container'>
                <img className='headshot' style={{ width: '400px' }} src={headshot} ></img>
                <div className='blurb-container'>
                    <h3 className='about-me'>About Me</h3>
                    <p>Hi! I’m Kyle and this is my portfolio. A little bit about me: I graduated from Whitworth University in 2017 with a Bachelor's Degree in Marketing and followed in 2018 with earning my Master's Degree in Business Administration on an accelerated track. I achieved success in SaaS technology sales, but I realized that I prefer more collaborative, technical, and creative work. So I decided to learn how to code.
                        <br />
                        <br />
                        Although very challenging at first, I started to really enjoy coding. Being able to build something from nothing using equations and logic is both rewarding and fascinating. Compared to sales and marketing, coding is refreshing and engaging, and I am looking forward to a future in development as I look for the right opportunities.
                    </p>
                </div>
            </div>
            <br />
            <br />
            <div className='second-row-container'>
                <div className='skills-container'>
                    <div className='languages-container'>
                    <h3>Languages</h3>
                    <li>HTML <FaHtml5 /></li>
                    <li>CSS <FaCss3 /></li>
                    <li>JavaScript <FaJs /></li>
                    <li>Node.js <FaNodeJs /></li>
                    <li>Handlebars</li>
                    <li>React <FaReact /></li>
                    <li>Express</li>
                    <li>MySQL</li>
                    <li>MONGO</li>
                    </div>
                    <div className='concepts-container'>
                    <h3>Concepts</h3>
                    <li>API</li>
                    <li>DOM</li>
                    </div>
                    <div className='tech-container'>
                    <h3>Tech</h3>
                    <li>GitHub <FaGithub /></li>
                    <li>Heroku</li>
                    <li>Sequelize</li>
                    <li>Socket io</li>
                    </div>
                </div>
                <div className='hobby-image-container'>
                    <button className='left-about-btn' onClick={() => setImage(hobbyImage == 0 ? 2 : hobbyImage - 1)}><FaArrowLeft /></button>
                    <img style={{ width: '400px', margin: '20px' }} src={imgArray[hobbyImage]} className='hobbyImage'></img>
                    <button className='right-about-btn' onClick={() => setImage(hobbyImage == imgArray.length - 1 ? 0 : hobbyImage + 1)}><FaArrowRight /></button>
                </div>
            </div>
        </div>
    )
}