import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

const sections = [
	{ title: "About", url: "#" },
	{ title: "Our Team", url: "#" },
	{ title: "Events", url: "#" },
	{ title: "Contact Us", url: "#" },
	{ title: "Resources", url: "#" },
];

const App = () => {
	return (
		<div className="App">
			<Header title="WISE-E" sections={sections} />
			<BrowserRouter>
				<Route exact path="/about" component={Home} />
				<Route exact path="/team" component={Home} />
				<Route exact path="/events" component={Home} />
				<Route exact path="/resources" component={Home} />
				<Route exact path="/get-involved" component={Home} />
				<Route path="/" component={Home} />
			</BrowserRouter>
			<Footer title="Footer" description="Placeholder text" />
		</div >
	);
}

export default App;
