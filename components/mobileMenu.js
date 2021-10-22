import React from "react";

export default function MobileMenu({ open, setOpen }) {
  return (
    <div>
      <nav className={open ? 'menu-mobile show' : 'menu-mobile'}>
        <ul className={open ? 'menu-mobile-nav show' : ''}>
          <div open={open} onClick={() => setOpen(!open) }className="menu-mobile-close-btn">
            <p>x</p>
          </div>
          <li className="nav-item current">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/portfolio" className="nav-link">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a href="/blog" className="nav-link">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div> 
  );
}
