import React, { Component } from "react";
import "./App.css";
import "react-notifications/lib/notifications.css";

import Bounce from "react-reveal/Bounce";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

import { NotificationContainer } from "react-notifications";
class App extends Component {
	render() {
		return (
			<div className="App">
				<div>
					<Bounce top>
						<h1>TechQuest - HackIT</h1>
					</Bounce>
					<Bounce top delay="200">
						<h2 className="Heading">Round 1</h2>
					</Bounce>
					<Bounce top delay="600">
						<Content />
					</Bounce>
				</div>
				<br/>
				<br/>
				<Bounce bottom>
					<Footer />
				</Bounce>

				<NotificationContainer />
			</div>
		);
	}
}

export default App;
