import "./header.css";
import { Link } from "react-router";
//using link instead of anchor tag to avoid page reload and to navigate between pages in react-router-dom
export function Header() {
  return (
    <>
      <div className="header">
        <div className="left-section">
          <Link to="/" className="header-link">
            <img className="logo" src="images/logo-white.png" />
            <img className="mobile-logo" src="images/mobile-logo-white.png" />
          </Link>
        </div>

        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" />

          <button className="search-button">
            <img
              className="search-icon"
              src="images/icons/search-icon.png"
              width="20"
              height="20"
            />
          </button>
        </div>

        <div className="right-section">
          <Link to="/orders" className="orders-link header-link">
            <span className="orders-text">Orders</span>
          </Link>

          <Link to="/checkout" className="cart-link header-link ">
            <img className="cart-icon" src="images/icons/cart-icon.png" />
            <div className="cart-quantity">3</div>
            <div className="cart-text">Cart</div>
          </Link>
        </div>
      </div>
    </>
  );
}
