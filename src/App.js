import React, { Component } from 'react';

import 'assets/utils/normalize.css';
import 'assets/globalStyles.scss';

class App extends Component {
	render() {
		return (
			<div>
				<h1>Heading 1</h1>
				<h2>Heading 1</h2>
				<h3>Heading 1</h3>
				<h4>Heading 1</h4>
				<h5>Heading 1</h5>
				<h6>Heading 1</h6>

				<h4>Lorem Heading 1</h4>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
					when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
					has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
				</p>

				<ul>
					<li>Lorem Ipsum has been the industry's standard dummy text</li>
					<li>Lorem Ipsum has been the industry's standard dummy text</li>
					<li>Lorem Ipsum has been the industry's standard dummy text</li>
				</ul>
				<a href="https://www.gitman.com/#0">Wiki</a>

			</div>
		);
	}
}

export default App;
