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
				<p className="featured-work__description-p">Zombie Squash was originally coded for Udacity's
				Front End Nano-degree program. It demonstrates use of object-oriented programming in JavaScript.
				I had a lot of fun building this game and, in the process, even learned a bit about basic game engine design.<br/><br/>
				In order to sharpen my skills and make the project uniquely mine, I added lots of addition features
				that were not part of the original specification.
				Some of the extra features include: multiple types of enemies, sound effects, music, and a bigger tile board!!<br/><br/>
				Use the arrow or wasd keys to move your player safely across the board and eat some brains!!
				Sorry NO mobile phone support for this game.
				The code and full list of game play rules are available on GitHub.<br/>
				<a href="https://github.com/ARogala/Frogger">View Frogger Clone on GitHub</a></p>
			</div>

			<div className="featured-work__project-2">
				<img src={project2Pic} alt="Home Page Project" className="featured-work__img featured-work__img--1" />
			</div>
			<div className="featured-work__description-2">
				<h3 className="heading-tertiary3">Custom Home Page</h3>
				<a href="https://github.com/ARogala/PersonalHomePage" className="featured-work__link">Check out my project on GitHub</a>
				<p className="featured-work__description-p">The Custom Home Page program was written in JavaScript, HTML, and CSS.
				The idea was to have a custom home page for any internet browser on the computer.
				It was designed for desktop and laptop computers specifically.<br/><br/>
				Features include: three search bars, personalized slide show, a custom clock with date,
				and popular icon links. Check it out and feel free to use and modify to your liking.
				The program does require some basic knowledge to set up.<br/><br/>
				This was the first piece of code I posted on GitHub and I have learned a lot since then.
				I admit it needs some work, but I still use the program every day and like the concept. Updates coming soon.
				</p>
			</div>

			<div className="featured-work__project-3">
				<img src={project3Pic} alt="Timer Project" className="featured-work__img featured-work__img--1" />
			</div>
			<div className="featured-work__description-3">
				<h3 className="heading-tertiary3">JavaScript Timer</h3>
				<a href="https://arogalatimer.surge.sh/" className="featured-work__link">Check out my timer</a>
				<p className="featured-work__description-p">I wrote this timer to demonstrate knowledge of the JavaScript language.
				Specifically, this timer has been coded with the modular design pattern and makes use of DOM manipulation
				in vanilla JavaScript. The algorithm was interesting and fun to figure out.
				This little app works well on desktop and mobile. Tested on Android Chrome and Firefox only.<br/>
				<a href="https://github.com/ARogala/Timer">View Timer on GitHub</a></p>
			</div>

			<div className="featured-work__description-4">
				<h3 className="heading-tertiary3">JavaScript Stop Watch</h3>
				<a href="https://codepen.io/Drew7865/pen/jvGVdg" className="featured-work__link">Check out my stop watch on CodePen</a>
				<p className="featured-work__description-p">I wrote this stop watch to demonstrate knowledge
				of the JavaScript language. This stop watch has been coded with the modular design pattern
				and makes use of DOM manipulation in vanilla JavaScript.
				I spent a fair about of time on this code and tried my best to make the code clean and well commented.
				I have integrated this code into both of my games and hope you can make use of it too.
				Similar to the timer the algorithm was challenging, interesting, and fun.
				I may rewrite both of these as React components.<br/>
				<a href="https://github.com/ARogala/StopWatch">View Stop Watch on GitHub</a></p>
			</div>

			<div className="featured-work__description-5">
				<h3 className="heading-tertiary3">Feed Reader</h3>
				<a href="https://github.com/ARogala/ClientSideFeedReader" className="featured-work__link">Check out my feed reader on GitHub</a>
				<p className="featured-work__description-p">I developed Client Side Feed Reader (CSFeedy)
				as a fun and productive way to learn about AJAX in native JavaScript.
				It utilizes <a href="https://rss2json.com/">rss2json.com</a> API for converting the RSS and Atom feeds to usable JSON objects.
				Everything is coded with JavaScript, CSS, and HTML (BEM naming convention is used).<br/><br/>
				All the feeds (and API Key) input get stored in the web browsers local storage.
				The feeds can be backed up and restored in order to keep the data persistent in the event of clearing browser data.
				This app only works in Chrome and Firefox.<br/><br/>
				I admit this project still need a lot of UI and UX work,
				as well as obvious error handling, and an upgrade to the fetch API.
				However, there is still some good reusable code in there and I really like the concept of the app.
				I actually plan to rewrite this in React, completely remove the rss2json dependency,
				hopefully make it mobile friendly, and host it with <a href="https://surge.sh/">surge.sh</a></p>
			</div>

		</section>
	</main>
);
