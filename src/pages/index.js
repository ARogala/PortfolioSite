import React from 'react';
import styles from './index.css';
import responsiveStyles from './index-responsive.css';
import featuredWorkStyles from './featured-work.css';

import videoWEBM from '../img/Hello-World.webm';
import videoMP4 from '../img/Hello-World.mp4';
import project1Pic from '../img/YBArt.png';
import project2Pic from '../img/FavoritePlaces.png';
import project3Pic from '../img/MemoryGame.png';

export default () => (
	<main role="main">
		<section className="hero">
			<div className="bg-video">
				<video className="bg-video__content" autoPlay muted loop>
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
				<img src={project1Pic} alt="Yank and Brit Art" className="featured-work__img featured-work__img--1" />
			</div>
			<div className="featured-work__description-1">
				<h3 className="heading-tertiary3">Yank and Brit Art</h3>
				<a href="https://yankandbritart.com" className="featured-work__link">Check out my live site</a>
				<p className="featured-work__description-p">Yank and Brit Art is a custom designed art blog site;
				just established in 2018. This site was build on top of the WordPress content management system and
				the custom theme was developed with the help of Twitter Bootstrap. I developed this custom blog to help
				my wife, Katie, showcase her talented art work for her Etsy shop. We both enjoyed the design process and
				hope you enjoy browsing through the site. More content coming soon.</p>
			</div>

			<div className="featured-work__project-2">
				<img src={project2Pic} alt="Favorite Places Map" className="featured-work__img featured-work__img--1" />
			</div>
			<div className="featured-work__description-2">
				<h3 className="heading-tertiary3">Favorite Places Map</h3>
				<a href="https://arogala.github.io/FavoritePlacesMap/" className="featured-work__link">Check out my favorite places</a>
				<p className="featured-work__description-p">My Favorite Places Map was built for Udacity's Front End Nano-degree program.
				Of course I went above and beyond the original specifications.
				This app features a filterable list containing some of my favorite locations.
				Each location is displayed as a marker on a map, and clicking the marker displays an
				information window about the location. Each information window contains a link the locations foursquare page,
				a link to search the location on google maps, the locations address, and a street view of the location.
				<a href="https://github.com/ARogala/FavoritePlacesMap">Favorite Places github</a>
				</p>
			</div>

			<div className="featured-work__project-3">
				<img src={project3Pic} alt="Timer Project" className="featured-work__img featured-work__img--1" />
			</div>
			<div className="featured-work__description-3">
				<h3 className="heading-tertiary3">Memory Game</h3>
				<a href="https://andrewrogalamemorygame.surge.sh/" className="featured-work__link">Check out my game</a>
				<p className="featured-work__description-p">The memory game was built for Udacity's Front End Nano-degree program.
				I made sure to go beyond the basic requirements and added a settings page to change the tiles and color theme around.
				The game was fun to build and works well on both desktop and mobile devices. I play it from time to time myself and my
				nieces love it. Hope you enjoy it as well.
				<a href="https://github.com/ARogala/fend-project-memory-game">Memory Game github</a></p>
			</div>

		</section>
	</main>
);
