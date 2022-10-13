import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <h1>This Is Home Page</h1>
      </section>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <h1>This Is About Page</h1>
      </section>
    </>
  );
};

const Product = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <h1>This is Product Page</h1>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <h1>This Is Contact Page</h1>
      </section>
    </>
  );
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/Product">
        <Product />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
};

export default App;
