import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Team from "./components/Team";
import Events from "./components/Events";
import Resources from "./components/Resources";
import Partners from "./components/Partners";
import GetInvolved from "./components/GetInvolved";
import Donate from "./components/Donate";

const App = () => {
	return (
		<BrowserRouter>
			<Header title="WISE.E" />
			<Switch>
				<Route exact path="/about" component={About} />
				<Route exact path="/team" component={Team} />
				<Route exact path="/events" component={Events} />
				<Route exact path="/resources" component={Resources} />
				<Route exact path="/partners" component={Partners} />
				<Route exact path="/get-involved" component={GetInvolved} />
				<Route exact path="/donate" component={Donate} />
				<Route exact path="/" component={Home} />
				<Redirect to="/" />
			</Switch>
			<Footer title="Footer" description="Placeholder text" />
		</BrowserRouter>
	);
}

export default App;
