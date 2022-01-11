import React from 'react'
import { FaCss3, FaGit, FaGithub, FaHtml5, FaJava, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import headshot from './images/headshot.jfif'
import '../styles/about.css'


export default function About() {
    return (
        <div className='about-container'>
            <div className='first-row-container'>
            <img className='headshot' style={{width: '300px'}} src={headshot} ></img>
            <div className='blurb-container'>
                <h3>About Me</h3>
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
                <h3>Skills</h3>
                <li>HTML <FaHtml5 /></li>
                <li>CSS <FaCss3 /></li>
                <li>JavaScript <FaJs /></li>
                <li>API</li>
                <li>DOM</li>
                <li>Node.js <FaNodeJs /></li>
                <li>Express</li>
                <li>Handlebars</li>
                <li>MySQL</li>
                <li>MONGO</li>
                <li>React <FaReact /></li>
                <li>GitHub <FaGithub /></li>
                <li>Heroku</li>
                <li>Sequelize</li>
                <li>Socket io</li>
            </div>
            <button></button>
            <img></img>
            <button></button>
            </div>
        </div>
    )
}