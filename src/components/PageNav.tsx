import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";

function PageNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.nav}>
      <Logo />
      
      <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle menu">
        <span className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}></span>
      </button>

      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        <li>
          <NavLink to="/pricing" onClick={() => setIsOpen(false)}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product" onClick={() => setIsOpen(false)}>Product</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink} onClick={() => setIsOpen(false)}>
            Get Started
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
