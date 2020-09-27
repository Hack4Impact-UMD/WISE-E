import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

const sections = [
  { title: "About", url: "#" },
  { title: "Our Team", url: "#" },
  { title: "Events", url: "#" },
  { title: "Contact Us", url: "#" },
  { title: "Resources", url: "#" },
];

function App() {
  return (
    <div className="App">
      <Header title="WISE-E" sections={sections} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            This is your home page. 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer title="Footer" description="Placeholder text" />
    </div>
  );
}

export default App;
