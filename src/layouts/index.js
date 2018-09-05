import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import styles from './index.css';
import responsiveStyles from './index-responsive.css';

import icon from '../img/Icon2.png';
import iconSmall from '../img/Icon2Small.png';

const Layout = ({children, data}) => (
	<div>
		<Helmet>
			<html lang="en"/>
			<title>{data.site.siteMetadata.title}</title>
			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous"/>
			<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet"/>
		</Helmet>
		<nav className="nav">
			<input type="checkbox" className="nav__checkbox" id="navi-toggle" />
			<label htmlFor="navi-toggle" className="nav__button">
				<i className="fas fa-bars fa-2x"></i>
			</label>
			<ul className="nav__list">
				<li className="nav__item-1"><Link to="/" className="nav__link">Home</Link></li>
				<li className="nav__item-2"><Link to="/about/" className="nav__link">About Me</Link></li>
				<li className="nav__item-3"><Link to="/portfolio/" className="nav__link">Portfolio</Link></li>
			</ul>
		</nav>
		<header className="header">
			<div className="header__logo-box">
				<img className="header__logo header__logo--1" src={icon} alt="Rogala Designs Logo" />
				<img className="header__logo header__logo--2" src="" alt="Rogala Designs Logo" />
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
		<footer>
			<p>Contact Me:</p>
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


