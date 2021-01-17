import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Team from "./components/Team";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Resources from "./components/Resources";
import GetInvolved from "./components/GetInvolved";

const App = () => {
	return (
		<BrowserRouter>
			<Header title="WISE.E" />
			<Switch>
				<Route exact path="/about" component={About} />
				<Route exact path="/team" component={Team} />
				<Route exact path="/events" component={Events} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/resources" component={Resources} />
				<Route exact path="/get-involved" component={GetInvolved} />
				<Route exact path="/" component={Home} />
				<Redirect to="/" />
			</Switch>
			<Footer title="Footer" description="Placeholder text" />
		</BrowserRouter>
	);
}

export default App;
