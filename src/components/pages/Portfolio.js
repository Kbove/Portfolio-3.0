import React, { useState } from 'react'
import '../styles/portfolio.css'
import quizIMG  from './images/quiz.JPG'
import weatherIMG from './images/weather.JPG'
import rmgIMG from './images/rmg.JPG'
import emsIMG from './images/ems.JPG'
import chessIMG from './images/chess.png'
import blogIMG from './images/blog.JPG'

export default function Portfolio() {
    const frontendArray = [
        {
            id: 1, 
            app: 'Weather Dashboard', 
            image: weatherIMG, 
            description: 'A frontend application that uses an open API to fetch and display weather conditions via a search query, as well as display your search history.', 
            tech: 'HTML, CSS, JavaScript, openweathermap.org/api', 
            link: 'https://kbove.github.io/Weather-Dashboard/'
        }, 
        {
            id: 2, 
            app: 'Quiz App',  
            image: quizIMG, 
            description: 'A timed quiz with various trivia questions. Each question is presented with four multiple choice answers. Each correct answer grants the user a point, and each incorrect answer shaves 10 seconds off the time. Scores are saved in local storage and rendered to the page in descending order along with user initials.', 
            tech: 'HTML, CSS, JavaScript', 
            link: 'https://kbove.github.io/Quiz-App/'
        }
    ]
    const backendArray = [
        {
            id: 1, 
            app: 'README Generator', 
            image: rmgIMG, 
            description: 'A command line application that takes in user input in order to generate formatted readme files', 
            tech: 'JavaScript, Node.js, NPM Inquirer',
            link: 'https://github.com/Kbove/README-Generator'
        }, 
        {
            id: 2, 
            app: 'Employee Management Database', 
            image: emsIMG, 
            description: 'A DataBase for employees utilizing MySQL, node js, and inquirer. Allows you to view departments, roles, and employees in formatted tables within the terminal', 
            tech: 'MySQL, Node.js, NPM Inquirer',
            link: 'https://github.com/Kbove/Employee-Management-Database-working-'
        }
    ]
    const fullStackArray = [
        {
            id: 1, 
            app: "Let's Play Chess", 
            image: chessIMG, 
            description: 'Play chess with friends! We built this project so that you can play live chess with the people you want', 
            tech: 'Handlebars, Express.js, Node.js, Socket.io, MySQL, Sequelize, bcrypt, dotenv',
            link: 'https://letsplaychessproj2.herokuapp.com/'
        }, 
        {
            id: 2, 
            app: 'Handlebars Tech Blog/Message Board', 
            image: blogIMG, 
            description: "This is a full stack web application that uses handlebars, JavaScript, Express, Node, and MySQL. It's a simple mblog website where users can create an account, write blog posts, and interact with others via a comment board", 
            tech: 'Handlebars, Express.js, Node.js, ',
            link: 'https://tech-blog-redux.herokuapp.com/homepage'
        }
    ]



    return (
        <div className='porfolio-container'>

        </div>
    )
}