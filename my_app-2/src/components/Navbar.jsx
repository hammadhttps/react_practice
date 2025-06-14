import "./style.css";
import logo from "../assets/logo.png"; // Ensure the path is correct


const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='container' >
            <a href="#" className='logo-link'>
                <img className='logo' src={logo} alt="Gym Rock logo" height={"80"} />
            </a>
            <button className='menu-toggle' aria-label='Toggle-navigation'>
                <span className='hamburger'></span>
            </button>
            <ul className='nav-links'>
               <li><a href="#" className='nav-link'>Home</a></li>
               <li><a href="#" className='nav-link'>Links</a></li>
               <li><a href="#" className='nav-link'>About</a></li>
               <li><a href="#" className='nav-link'>Contact</a></li>
            </ul>
        </div>
    </nav>
    
  )
}

export default Navbar