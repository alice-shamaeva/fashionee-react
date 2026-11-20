import logo from '../../assets/logo.svg';
import arrow from '../../assets/arrow.svg';
import arrowPink from '../../assets/arrow-pink.svg';
import search from '../../assets/search.svg';
import user from '../../assets/user.svg';
import heart from '../../assets/heart.svg';
import cart from '../../assets/cart.svg';
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="left-side">
                <div className="logo-container">
                    <div className="burger-menu">
                        <input type="checkbox" id="burger-checkbox" className="burger-checkbox"/>
                        <label className="burger" htmlFor="burger-checkbox"></label>
                    </div>
                    <div className="logo">
                        <img src={logo} alt="Fashionee"/>
                    </div>
                </div>
                <div className="menu">
                    <div className="menu-item">
                        <span>Home</span>
                    </div>
                    <div className="menu-item">
                        <span>Pages</span>
                        <img src={arrow} alt="" className="arrow-default"/>
                        <img src={arrowPink} alt="" className="arrow-hover"/>
                    </div>
                    <div className="menu-item active">
                        <span>Shop</span>
                        <img src={arrow} alt="" className="arrow-default"/>
                        <img src={arrowPink} alt="" className="arrow-hover"/>
                    </div>
                    <div className="menu-item">
                        <span>Blog</span>
                    </div>
                    <div className="menu-item">
                        <span>Contact</span>
                    </div>
                </div>
            </div>
            <div className="right-side">
                <div className="header-icon">
                    <img src={search} alt=""/>
                </div>
                <div className="header-icon">
                    <img src={user} alt=""/>
                </div>
                <div className="header-icon">
                    <img src={heart} alt=""/>
                    <div className="counter">1</div>
                </div>
                <div className="header-icon">
                    <img src={cart} alt=""/>
                    <div className="counter">2</div>
                </div>
            </div>
        </header>
    );
}

export default Header;
