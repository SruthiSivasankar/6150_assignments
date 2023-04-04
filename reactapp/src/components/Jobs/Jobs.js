import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function Jobs() {
  const Headers = {
    color: "#100F0F",
    backgroundColor: "#F7F7F7",
    padding: "30px",
    fontFamily: "Arial",
    textAlign: "center",
  };

  const jobcard = {
    padding: "20px",
    width: "76rem",
    margin: "10px",
  };
  const jobtitles = [
    "Budget-Friendly",
    "Travel guide",
    "Exoctic locations",
    "Elite Packages",
  ];
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          BOSTON TRAVELS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <Link to="/home">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {" "}
                    Home{" "}
                  </a>
                </li>
              </Link>
              <Link to="/about">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {" "}
                    About{" "}
                  </a>
                </li>
              </Link>
              <Link to="/jobs">
                <li className="nav-item">
                  <a className="nav-link active" href="#" aria-current="page">
                    {" "}
                    Packages{" "}
                  </a>
                </li>
              </Link>
              <Link to="/contact">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {" "}
                    Contact Us{" "}
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <h3 style={Headers}>Packages that are currently available!</h3>

      <div className="Jobopenings" style={jobcard}>
        <h3 style={jobcard}>Available Packages!</h3>
        {jobtitles.map((jobs) => (
          <h5 style={jobcard}> {jobs} </h5>
        ))}
      </div>
      <Card style={jobcard}>
        <Card.Body>
          <Card.Title>Budget-Friendly</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Explore budget-friendly options
          </Card.Subtitle>
          <Card.Text>
            Memorable experience within your budget.
          </Card.Text>
          <Card.Link href="#">Package Link</Card.Link>
        </Card.Body>
      </Card>
      <Card style={jobcard}>
        <Card.Body>
          <Card.Title>Travel Guide</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Make personalized experience
          </Card.Subtitle>
          <Card.Text>
            Hire a experienced travel guide to connect with the locals.
          </Card.Text>
          <Card.Link href="#">Package Link</Card.Link>
        </Card.Body>
      </Card>
      <Card style={jobcard}>
        <Card.Body>
          <Card.Title>Exotic locations</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Explore and discover new places
          </Card.Subtitle>
          <Card.Text>
            Travel to places where others haven't travelled.
          </Card.Text>
          <Card.Link href="#">Package Link</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default Jobs;
