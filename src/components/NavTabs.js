import React from 'react'
import './styles/navtabs.css'

function NavTabs ({ currentPage, handlePageChange}) {
    return (
        <body>
            <header>
                <h1>Kyle Bove: Full Stack Developer</h1> 
                <ul className='socials'>
                    <li>Linkedin Placeholder</li>
                    <li>Github Placeholder</li>
                    <li>Email Placeholder</li>
                </ul>
            </header>
            <div className='nav-container'>
                <h2>
            <a href='#about' onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                About Me
            </a></h2>
            <h2>
            <a href='#portfolio' onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                My Projects
            </a></h2>
            <h2>
            <a href='#resume' onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                Resume
            </a></h2>
            </div>
        </body>
    )
}

export default NavTabs