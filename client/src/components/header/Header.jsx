import './header.css'
import logoImage from './../../fashion_images/Logo.svg'
import logoSearch from './../../fashion_images/Header search icon.svg'
import logoProfile from './../../fashion_images/Header profile icon.svg'
import logoFav from './../../fashion_images/Header favorite icon.svg'
import logoBag from './../../fashion_images/Header bag icon.svg'

function Header(){
    return(
        <header className="header">
            <div className='header_zagolovok'>
                <p>
                    Enjoy Free Shipping On All Orders
                </p>
            </div>
            <div className="container">
                <div className="header_row">
                    <div className="header_logo">
                        <img src={logoImage} alt='Logo'></img>
                    </div>
                    <nav className="header_cat">
                        <ul>
                            <li><button href="#!">Collection</button></li>
                            <li><button href="#!">Modiweek</button></li>
                            <li><button href="#!">Plus Size</button></li>
                            <li><button href="#!">Sustainability</button></li>
                        </ul>
                    </nav>
                    <nav className="header_nav">
                        <ul>
                            <button className='nav_item'><img src={logoSearch} alt="nav_search"></img></button>
                            <button className='nav_item'><img src={logoProfile} alt="nav_profile" className='nav_item'></img></button>
                            <button className='nav_item'><img src={logoFav} alt="nav_fav" className='nav_item'></img></button>
                            <button className='nav_item'><img src={logoBag} alt="nav_bag" className='nav_item'></img></button>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;