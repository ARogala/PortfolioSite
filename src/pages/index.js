import React from 'react';
import styles from './index.css';

import videoWEBM from '../img/Hello-World.webm';
import videoMP4 from '../img/Hello-World.mp4';
import project1Pic from '../img/YBArtSmall.png';
import project2Pic from '../img/CustomHomePageSmall.png';
import project3Pic from '../img/timerSmall.jpg';

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
				<img src={project2Pic} alt="Home Page Project" className="featured-work__img featured-work__img--1" />
			</div>
			<div className="featured-work__description-2">
				<h3 className="heading-tertiary3">Custom Home Page</h3>
				<a href="https://github.com/ARogala/PersonalHomePage" className="featured-work__link">Check out my github project</a>
				<p className="featured-work__description-p">The Custom Home Page program was written in JavaScript, HTML, and CSS.
				The idea was to have a custom home page for any internet browser on the computer.
				It was designed for desktop and laptop computers specifically. Features include:
				three search bars, personalized slide show, a custom clock with date, and popular icon links.
				Check it out and feel free to use and modify to your liking. Requires some basic knowledge to set up. Updates coming soon.
				</p>
			</div>

			<div className="featured-work__project-3">
				<img src={project3Pic} alt="Timer Project" className="featured-work__img featured-work__img--1" />
			</div>
			<div className="featured-work__description-3">
				<h3 className="heading-tertiary3">JS Timer</h3>
				<a href="https://codepen.io/Drew7865/pen/EErMvL" className="featured-work__link">Check out my timer on Code Pen</a>
				<p className="featured-work__description-p">Check out my JavaScript timer on CodePen.
				I wrote this timer to demonstrate knowledge of the JavaScript language.
				Specifically, this timer has been coded with the modular design pattern and makes use of
				DOM manipulation in vanilla JavaScript. I plan to add this to my home page project as well as
				updating some of the timer’s CSS.</p>
			</div>

		</section>
	</main>
);
