import React from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import "./components/About/About.css" 

function About() {
  return (
    //Navbar
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            BOSTON TRAVELS
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <Link to="/home">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#"> Home </a>
                </li></Link>
              <Link to="/about">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#"> About </a>
                </li></Link>
              <Link to="/jobs">
                <li className="nav-item">
                  <a className="nav-link" href="#"> Packages </a>
                </li></Link>
              <Link to="/contact">
                <li className="nav-item">
                  <a className="nav-link" href="#"> Contact Us </a>
                </li></Link>
            </ul>
          </div>
        </div>
      </nav>

      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" style={{ height: "80vh" }} />
        <Card.Body>
          <Card.Text>
            Our organization has packages for over 100+ countries!
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Img variant="bottom" src="https://images.unsplash.com/photo-1504150558240-0b4fd8946624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" style={{ height: "90vh" }} />
        <Card.Body>
          <Card.Text>
          Our organization helped 2000+ travellers book seats in their comfortable means of transports!
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Img variant="bottom" src="https://mdbcdn.b-cdn.net/img/new/slides/038.webp" style={{ height: "90vh" }} />
        <Card.Body>
          <Card.Text>
            Our organization helped 1000+ travellers visit exotic locations!
          </Card.Text>
        </Card.Body>
      </Card>

    </>
    // <div><h1>About Page</h1></div>  
  );
}

export default About;
