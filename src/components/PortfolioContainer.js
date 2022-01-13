import React, {useState} from 'react'
import NavTabs from './NavTabs'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import background from './pages/images/Snowboard.jpg'


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About')

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }
        return <Resume />
    }

    const handlePageChange = (page) => setCurrentPage(page)

    return (
        <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <footer style={{paddingTop: '30px'}}>
                <p style={{textAlign: 'center', marginTop: '20px', color: 'white', backgroundColor: 'black', margin: 'auto'}}>Made with love by Kyle using React.js. Please contact me at <a style={{fontWeight: 'bold', color: 'white'}}href="mailto:kbove94@gmail.com">kbove94@gmail.com</a></p>
            </footer>
        </div>
    )
}