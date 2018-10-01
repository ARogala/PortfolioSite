import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import styles from './index.css';
import responsiveStyles from './index-responsive.css';

import icon from '../img/Icon.png';
import iconSmall from '../img/IconSmall.png';
import gitIcon from '../img/github.png';
import linkedinIcon from '../img/linkedin.png';
import tabIcon from '../img/tabIcon.png';

function hideNav() {
	document.getElementById('navi-toggle').checked = false;
}

const Layout = ({children, data}) => (
	<div>
		<Helmet>
			<html lang="en"/>
			<title>{data.site.siteMetadata.title}</title>
			<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet"/>
			<link rel="icon" href={tabIcon} />
			<meta name="description" content="Portfolio site for web developer Andrew Rogala" />
		</Helmet>
		<nav className="nav">
			<input type="checkbox" className="nav__checkbox" id="navi-toggle" />
			<label htmlFor="navi-toggle" className="nav__button">
				<span className="nav__icon">&nbsp;</span>
			</label>
			<ul className="nav__list">
				<li className="nav__item-1"><Link to="/" className="nav__link" onClick={() => hideNav()}>Home</Link></li>
				<li className="nav__item-2"><Link to="/portfolio/" className="nav__link" onClick={() => hideNav()}>Portfolio</Link></li>
				<li className="nav__item-3"><Link to="/about/" className="nav__link" onClick={() => hideNav()}>About Me</Link></li>
			</ul>
		</nav>
		<header className="header">
			<div className="header__logo-box">
				<img className="header__logo header__logo--1" src={icon} alt="Rogala Designs Logo" />
				<img className="header__logo header__logo--2" src={iconSmall} alt="Rogala Designs Logo" />
			</div>
			<div className="header__text-box">
				<h1 className="header__title">
					Andrew Rogala
				</h1>
				<h2 className="header__tagline">
					Web Developer
				</h2>
			</div>
		</header>
		{children()}
		<footer className="footer">
			<div className="footer__links-box">
				<p>Find me on:</p>
				<a href="https://github.com/ARogala" target="_blank" rel="noopener"><img src={gitIcon} alt="GitHub" className="footer__link-logo" width="40" height="40"/></a>
				<a href="https://www.linkedin.com/in/andrew-rogala" target="_blank" rel="noopener"><img src={linkedinIcon} alt="LinkedIn" className="footer__link-logo" width="40" height="40"/></a>
			</div>
		</footer>
	</div>

);


Layout.propTypes = {
	children: PropTypes.func,
}

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`


