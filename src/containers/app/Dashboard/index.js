import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import useDashboardState from "./useDashboardState";

const Dashboard = (props) => {
  const { profile, count, onLogout } = useDashboardState();

  return (
    <Container fluid className="w-100 p-0">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/dashboard" className="text-light text-decoration-none">
              Outer App
            </Link>
          </Navbar.Brand>
          <Nav className="h-100 d-flex align-content-center">
            <Nav.Item className="text-light align-self-center text-decoration-none mx-5">
              Hi <span className="text-uppercase">{profile.username}</span>
            </Nav.Item>
            <Nav.Link
              className="text-light text-decoration-none"
              onClick={onLogout}
              data-testid="logout"
            >
              Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <div
          className={`border ${
            count % 2 === 0 ? "border-primary" : "border-danger"
          } mt-3`}
        >
          <iframe
            src="http://localhost:3001"
            height="500"
            width="1000"
            className="w-100 d-flex justify-content-center mt-3"
          ></iframe>
        </div>
      </Container>
    </Container>
  );
};

export default Dashboard;
