import "./style.css";
import Navbar from './Navbar'

const Header = () => {
  return (
       <header className='hero'>
        <Navbar></Navbar>
        <div className='hero-content container'>
            <div className='hero-text'>
                <h1 className='hero-title'>GYM <span>ROCK</span></h1>
                <p className='hero-tagline'>No Pain No Gain</p>
            </div>
        </div>

        <div className='search-container'>
            <form role='search'>
                <input type="search" placeholder='Search workouts, nutrition...' aria-label='Search'/>
                <button type='submit' aria-label='Search'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg> 
                </button>
            </form>
        </div>

        <div className='hero-cta'>
            <a href="#videos" className='btn btn-primary' >Watch Videos</a>
            <a href="#about" className='btn btn-secondary'>Learn More</a>
        </div>

       </header>
  )
}

export default Header