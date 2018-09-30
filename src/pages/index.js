import React from 'react';
import objectFitPolyfill from 'objectFitPolyfill';

import styles from './index.css';
import featuredWorkStyles from './featured-work.css';
import responsiveStyles from './index-responsive.css';
import featuredWorkStylesResponsive from './featured-work-responsive.css';

import videoWEBM from '../img/Hello-World.webm';
import videoMP4 from '../img/Hello-World.mp4';

import project1Pic from '../img/csfeedy.png';
import project2Pic from '../img/FavoritePlaces.png';
import project3Pic from '../img/YBArt.png';

export default () => (
	<main role="main">
		<section className="hero">
			<div className="bg-video">
				<video className="bg-video__content" data-object-fit="cover" autoPlay muted loop>
					<source src={videoMP4} type="video/mp4" />
					<source src={videoWEBM} type="viedo/webm" />
				</video>
			</div>
			<div className="hero__text-box">
				<h3 className="heading-tertiary1">Responsive design since 2018</h3>
			</div>
		</section>

		<section className="featured-work">

			<div className="featured-work__heading-box">
				<h3 className="heading-tertiary2">Featured Work</h3>
			</div>

			<div className="featured-work__project-1">
				<img src={project1Pic} alt="CSFeedy" className="featured-work__img featured-work__img--1" />
			</div>
			<div className="featured-work__description-1">
				<h3 className="heading-tertiary3">CSFeedy</h3>
				<a href="https://csfeedy.surge.sh" className="featured-work__link">Check out my Feed Reader App</a>
				<p className="featured-work__description-p">For those who aren’t sure, a feed reader is simply a program that allows
				users to gather and display content from numerous web sites all in one location.
				You can store hundreds of feeds in CSFeedy and see content from each web site without having to navigate
				to the sites individually. Check out this <a href="https://www.lifewire.com/what-is-rss-2483592">article</a> for some more information.<br/><br/>
				CSFeedy (Client-Side Feed Reader) is a single page web application built with <a href="https://reactjs.org/">React</a> JavaScript.
				Some major dependencies are <a href="https://www.npmjs.com/package/rss-parser">rss-parser</a> to parse the
				feed on the client’s machine and <a href="https://github.com/Rob--W/cors-anywhere">CORS Anywhere</a> proxy server
				which allows feeds to be loaded in the browser. Many thanks to the maintainers of these
				projects without whom this application wouldn’t be possible.<br/><br/>
				This project was fun and challenging to develop. I hope you enjoy using this application; I use it every day.
				You can read more about the development of CSFeedy on the apps about page.
				Also, feel free to check out the code for this application on its GitHub page.<br/>
				<a href="https://github.com/ARogala/cs-feedy">View CSFeedy on GitHub</a>
				</p>
			</div>

			<div className="featured-work__project-2">
				<img src={project2Pic} alt="Favorite Places Map" className="featured-work__img featured-work__img--1" />
			</div>
			<div className="featured-work__description-2">
				<h3 className="heading-tertiary3">Favorite Places Map</h3>
				<a href="https://arogala.github.io/FavoritePlacesMap/" className="featured-work__link">Check out my favorite places</a>
				<p className="featured-work__description-p">My Favorite Places Map was built for Udacity's Front End Nano-degree program.
				Of course, I went above and beyond the original specifications.
				This project was built with React, Google Maps JavaScript API, and the Foursquare Places API.<br/><br/>
				This app features a filterable list containing some of my favorite locations.
				Each location is displayed as a marker on the map, and clicking the marker displays an information window
				about the location. Each information window contains a link to the locations Foursquare page,
				a link to search the location on Google Maps, the locations address, and a street view of the location.<br/><br/>
				I hope you enjoy this app as much as I enjoyed making it. In the future I plan to make this a map share
				application where you can share your favorite places with friends and family.<br/>
				<a href="https://github.com/ARogala/FavoritePlacesMap">View Favorite Places on GitHub</a>
				</p>
			</div>

			<div className="featured-work__project-3">
				<img src={project3Pic} alt="Yank and Brit Art" className="featured-work__img featured-work__img--1" />
			</div>
			<div className="featured-work__description-3">
				<h3 className="heading-tertiary3">Yank and Brit Art</h3>
				<a href="https://yankandbritart.com" className="featured-work__link">Check out this site</a>
				<p className="featured-work__description-p">Yank and Brit Art is a custom designed art blog site;
				just established in 2018. This site was build on top of the WordPress content management system and
				the custom theme was developed with the help of Twitter Bootstrap. I developed this custom blog to help
				my wife, Katie, showcase her talented art work for her Etsy shop. We both enjoyed the design process and
				hope you enjoy browsing through the site. More content coming soon.</p>
			</div>



		</section>
	</main>
);
