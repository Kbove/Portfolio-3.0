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
                    <p>Hi! My name's Kyle and this is my portfolio. A little bit about me: I graduated from Whitworth
                        Univerity in 2017 with a Bachelor's in Marketing and went on to pursue my Master's in Business
                        Administration on an accelerated track in 2018. I found some success in tech sales, but I began
                        craving something more stable, technical, and creative. I decided to make the change and try to
                        learn how to code.
                        <br />
                        <br />
                        Although a daunting task at first, I started to really enjoy coding. Being able to build something from nothing but equations and logic is stimulating and engaging. Coming from a sales and marketing background, I find coding to be refreshing and engaging, and look forward to a future in web development as I look for opportunities.
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
                    <button className='left-btn' onClick={() => setImage(hobbyImage == 0 ? 2 : hobbyImage - 1)}><FaArrowLeft /></button>
                    <img style={{ width: '400px', margin: '20px' }} src={imgArray[hobbyImage]} className='hobbyImage'></img>
                    <button className='right-btn' onClick={() => setImage(hobbyImage == imgArray.length - 1 ? 0 : hobbyImage + 1)}><FaArrowRight /></button>
                </div>
            </div>
        </div>
    )
}