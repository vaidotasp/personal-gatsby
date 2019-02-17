import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styles from "./header.module.css";

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`
    }}
  >
    <div className={styles.container}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `purple`
          }}
        >
          VP
        </Link>
      </h1>
      <nav className={styles.navbar}>
        <li className={styles.list}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.list}>
          <Link to="/blog">Blog</Link>
        </li>
        <li className={styles.list}>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className={styles.list}>
          <Link to="/resume">About/Resume</Link>
        </li>
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
