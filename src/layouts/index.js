import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

function Layout(props) {
	return (
		<div>
			<Helmet>
				<title>Andrew's Portfolio</title>
				<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet"/>
			</Helmet>
			<nav>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about/">About Me</Link></li>
					<li><Link to="/portfolio/">Portfolio</Link></li>
				</ul>
			</nav>
			<header>
				<h1>Andrew Rogala:</h1>
				<h2>Web Developer</h2>
			</header>
			{props.children()}
			<footer>
				<p>Contact Me:</p>
			</footer>
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.func,
}

export default Layout;