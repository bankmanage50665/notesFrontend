import React from 'react';
import { NavLink } from 'react-router-dom';
import homeIcon from './path/to/home-icon.png'; // Replace with your image path
import categoryIcon from './path/to/category-icon.png';
import wishlistIcon from './path/to/wishlist-icon.png';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white absolute bottom-0 left-0 right-0">
      <div className="container mx-auto py-4 flex justify-center gap-4">
        <NavLink to="/" className={({ isActive }) =>
          isActive
            ? 'flex flex-col items-center text-blue-500'
            : 'flex flex-col items-center hover:text-blue-500'
        }>
          <img src={homeIcon} alt="Home" className="w-6 h-6" />
          <span>Home</span>
        </NavLink>
        <NavLink to="/categories" className={({ isActive }) =>
          isActive
            ? 'flex flex-col items-center text-blue-500'
            : 'flex flex-col items-center hover:text-blue-500'
        }>
          <img src={categoryIcon} alt="Categories" className="w-6 h-6" />
          <span>Categories</span>
        </NavLink>
        <NavLink to="/wishlist" className={({ isActive }) =>
          isActive
            ? 'flex flex-col items-center text-blue-500'
            : 'flex flex-col items-center hover:text-blue-500'
        }>
          <img src={wishlistIcon} alt="Wishlist" className="w-6 h-6" />
          <span>Wishlist</span>
        </NavLink>
      </div>
    </footer>
  );
}

export default Footer;
