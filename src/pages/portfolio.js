import React from "react";

import project1Pic from '../img/Frogger.png';
import project2Pic from '../img/CustomHomePage.png';
import project3Pic from '../img/Timer.jpg';

export default () => (
	<main role="main">
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
				<p className="featured-work__description-p">Zombie Squash was originally coded for Udacity's Front End Nandodegree program.
				It demonstrates use of objcet oriented programming in JavaScript. I had a lot of fun building this game and even learned a bit
				about basic game engine design in the process. I added lots of addition feateures that were not part of the original
				specification in order to sharpen my skills and make the project uniquely mine.
				Some of the extra features inclue: multiple types of eniemies, sound effects, music, and a bigger tile board!! Use the arrow or wasd
				keys to move your player safely accross the board and eat some brains!! Sorry NO mobile phone support on this game.
				The code and full list of game play rules are on github:
				<a href="https://github.com/ARogala/Frogger"> Frogger Clone</a></p>
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
				Check it out and feel free to use and modify to your liking. Requires some basic knowledge to set up. This was my first
				github project and as such I have learned a lot since then. I will admit it needs some work but I still use the
				program eveyday and like the concept. Updates coming soon.
				</p>
			</div>

			<div className="featured-work__project-3">
				<img src={project3Pic} alt="Timer Project" className="featured-work__img featured-work__img--1" />
			</div>
			<div className="featured-work__description-3">
				<h3 className="heading-tertiary3">JavaScript Timer</h3>
				<a href="https://codepen.io/Drew7865/pen/EErMvL" className="featured-work__link">Check out my timer on Code Pen</a>
				<p className="featured-work__description-p">I wrote this timer to demonstrate knowledge of the JavaScript language.
				Specifically, this timer has been coded with the modular design pattern and makes use of
				DOM manipulation in vanilla JavaScript. I plan to add this to my home page project as well as
				updating some of the timer’s CSS.</p>
			</div>

			<div className="featured-work__description-4">
				<h3 className="heading-tertiary3">JavaScript Stop Watch</h3>
				<a href="https://codepen.io/Drew7865/pen/jvGVdg" className="featured-work__link">Check out my stop watch on Code Pen</a>
				<p className="featured-work__description-p">I wrote this stop watch to demonstrate knowledge of the JavaScript language.
				This stop watch has been coded with the modular design pattern and makes use of
				DOM manipulation in vanilla JavaScript. I spent a fair about of time on this code and tried my best to make the code clean
				and well commented. I have integrated this code into both of my games and hope you can make use of it too. I built this before I was
				useing git but I will post this on github as well. I may rewrite this in React.</p>
			</div>

			<div className="featured-work__description-5">
				<h3 className="heading-tertiary3">Feed Reader</h3>
				<a href="https://github.com/ARogala/ClientSideFeedReader" className="featured-work__link">Check out my feed reader on github</a>
				<p className="featured-work__description-p">I developed Client Side Feed Reader (CSFeedy) as a fun and productive way
				to learn about AJAX in native JavaScript. Despite its name this single page web app isn’t 100% Client Side as it utilizes
				rss2json.com API for converting the RSS and Atom feeds to usable JSON objects.
				Everything else is handled on the client side with JavaScript, CSS, and HTML (BEM naming convention is used).
				All the feeds (and API Key) input get stored in the web browsers local storage.
				The feeds can be backed up and restored in order to keep the data persistent in the event of clearing browser data.
				This app only works in Chrome and Firefox. I will admit this project still need a lot of UI UX work as well as
				obvious error handleing and an upgrade to the fetch api. However, there is still some good reusable code in there and I
				really like the concept of the app. Who wants to sign up for yet another service just to get some RSS feeds??
				I actually plan to rewrite this in React, competely remove
				the rss2json dependency, hopefully make it mobile frendly, and host in with Surge.</p>
			</div>

		</section>
	</main>
);
