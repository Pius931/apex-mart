import React from "react";
import "./Navbar.css";
import { ShoppingCart, Search, User, Store } from "lucide-react";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">APEX MART</div>

          <div className="search-bar">
            <div className="search-input-wrapper">
              <Search className="search-icon" size={18} />
              <input
                type="text"
                placeholder="Search products..."
                name="search products"
              />
            </div>
          </div>

          <div className="nav-right">
            <ul className="nav-links">
              <li>Products</li>
              <li>Deals</li>
              <li>Support</li>
            </ul>

            <div className="divider"></div>

            <div className="icon cart">
              <ShoppingCart size={24} />
              <span className="cart-count">0</span>
            </div>

            <div className="icon profile">
              <User size={24} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
