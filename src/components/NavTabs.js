import React from 'react'
import './styles/navtabs.css'
import {FaLinkedin, FaGithub, FaNodeJs} from 'react-icons/fa'

function NavTabs ({ currentPage, handlePageChange}) {
    return (
        <body style={{backgroundColor: 'black'}}> 
            <header>
                <h1>Kyle Bove | <span style={{color: 'lightblue'}}>Full Stack Developer</span></h1>
                <ul style={{display: 'flex'}} className='socials'>
                    <li><a style={{fontSize: 'xx-large', margin: '10px'}} href='https://www.linkedin.com/in/kyle-bove-mba-004a96aa/'><FaLinkedin/></a></li>
                    <li><a style={{fontSize: 'xx-large'}} href='https://github.com/Kbove'><FaGithub/></a></li>
                </ul>
            </header>
            <div className='nav-container'>
                <h2 >
            <a style={{color: 'white'}} href='#about' onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                About
            </a></h2>
            <h2>
            <a style={{color: 'white'}} href='#portfolio' onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                Projects
            </a></h2>
            <h2>
            <a style={{color: 'white'}} href='#resume' onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                Resume
            </a></h2>
            </div>
        </body>
    )
}

export default NavTabs