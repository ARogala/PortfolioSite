import React from 'react';
import styles from './index.css';

import videoWEBM from '../img/Hello-World.webm';
import videoMP4 from '../img/Hello-World.mp4';

export default () => (
	<main role="main">
		<section className="hero">
			<div className="bg-video">
				<video className="bg-video__content" autoplay muted loop>
					<source src={videoMP4} type="video/mp4" />
					<source src={videoWEBM} type="viedo/webm" />
				</video>
			</div>
			<div className="hero__text-box">
				<h3 className="heading-tertiary1">Responsive design since 2018</h3>
			</div>
		</section>
	</main>
);
