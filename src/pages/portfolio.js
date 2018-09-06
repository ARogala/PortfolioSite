import React from "react";

import project1Pic from '../img/frogger2Small.png';
import project2Pic from '../img/CustomHomePageSmall.png';
import project3Pic from '../img/timerSmall.jpg';

export default () => (
	<section className="featured-work">

		<div className="featured-work__heading-box">
			<h3 className="heading-tertiary2">Portfolio</h3>
		</div>

		<div className="featured-work__project-1">
			<img src={project1Pic} alt="Frogger" className="featured-work__img featured-work__img--1" />
		</div>
		<div className="featured-work__description-1">
			<h3 className="heading-tertiary3">Frogger Clone</h3>
			<a href="https://andrewrogalafrogger.surge.sh/" className="featured-work__link">Check out my game</a>
			<p className="featured-work__description-p"></p>
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
			<h3 className="heading-tertiary3">JavaScript Timer</h3>
			<a href="https://codepen.io/Drew7865/pen/EErMvL" className="featured-work__link">Check out my timer on Code Pen</a>
			<p className="featured-work__description-p">Check out my JavaScript timer on CodePen.
			I wrote this timer to demonstrate knowledge of the JavaScript language.
			Specifically, this timer has been coded with the modular design pattern and makes use of
			DOM manipulation in vanilla JavaScript. I plan to add this to my home page project as well as
			updating some of the timer’s CSS.</p>
		</div>

		<div className="featured-work__description-4">
			<h3 className="heading-tertiary3">JavaScript Stop Watch</h3>
			<a href="" className="featured-work__link">Check out my stop watch on Code Pen</a>
			<p className="featured-work__description-p">Check out my JavaScript stop watch on CodePen.
			I wrote this stop watch to demonstrate knowledge of the JavaScript language.
			This stop watch has been coded with the modular design pattern and makes use of
			DOM manipulation in vanilla JavaScript.</p>
		</div>

		<div className="featured-work__description-5">
			<h3 className="heading-tertiary3">Feed Reader</h3>
			<a href="" className="featured-work__link">Check out my feed reader on github</a>
			<p className="featured-work__description-p">Check out my feed reader on github.</p>
		</div>

	</section>
);
