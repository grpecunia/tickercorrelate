import React, { Component } from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import "./App.css";
import { NavDropdown } from 'react-bootstrap';
import Home from './Home'


class App extends Component {
  state = {
    tickers: {}
  };

  componentDidMount() {
    axios
      .get(`https://financialmodelingprep.com/api/v3/company/stock/list`)
      .then(res => {
        //This takes some time by the time it gets back
        this.setState({
          tickers: res.data.symbolsList
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          style={{ backgroundColor: "#82A0BC", zIndex: '100' }}
        >
          <Navbar.Brand href="/">
            <img
              alt="TickerCorrelate"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            TickerCorrelate
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/#">Commodities</Nav.Link>
              <NavDropdown title="About" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/#">TickerCorrelate</NavDropdown.Item>
                <NavDropdown.Item href="/#">API's</NavDropdown.Item>
                <NavDropdown.Item href="https://github.com/grpecunia/tickercorrelate">
                  Github
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://riverapecunia.com">
                  GRP (Developer)
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="row">
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Home tickers={this.state.tickers} {...props} />}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
