/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Rabia Usman",
  title: "Web Developer & Content Creator",
  email: "rabiausmann1@gmail.com",
  gitHub: "https://github.com/Rabia-Usman",
  instagram: "https://instagram.com/twilightingthelife?igshid=ZDdkNTZiNTM=",
  linkedIn: "https://www.linkedin.com/in/rabia-usman-b6594622a/",
  medium: "https://medium.com/@rabiausmann1",
  twitter: "https://twitter.com/RabiaUsmann?t=Z8VENqkQc9V0UnKkgYMSrA&s=09",
  youTube: "https://www.youtube.com/channel/UCRH3bzZDBqs8KhiAqVCgajg",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
