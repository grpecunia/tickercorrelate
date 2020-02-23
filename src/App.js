import React, { Component } from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import { NavDropdown } from 'react-bootstrap';
import Home from './Home'
import Details from './Details'
import Commodities from './Commodities'
import "./App.css";



class App extends Component {
  state = {
    tickers: [],
    tickerData: [],
    goldData: [],
    copperData: [],
    crudeOilData: [],
    cattleData: [],
    coffeeData: [],
    evooData: [],
    data: []
  };

  objectify = array => {
    return array.reduce((date, price) => {
      date[price[0]] = price[1];
      return date;
    }, {});
  };

  // structureComData = dataset => {
  //   let data = [{ type: "date", label: " " }, "Ticker", "Commodity"];
  //   for (let i in dataset) {
  //     data.push(
  //       '[new Date("' +
  //         i +
  //         '"), ' +
  //         this.state.dataset[i] +
  //         ", " +
  //         this.state.dataset[i] +
  //         "]"
  //     );
  //     console.log(data);
  //     return data;
  //   }
  // };

  componentDidMount() {
    // This GET is to get the 13k+ Ticker and Name List from the API
    axios
      .get(`https://financialmodelingprep.com/api/v3/company/stock/list`)
      .then(res => {
        this.setState({
          tickers: res.data.symbolsList
        });
      });

    // This GET is to get the Gold Data from the API
    axios
      .get(`https://www.quandl.com/api/v3/datasets/WGC/GOLD_DAILY_USD`)
      .then(res => {
        let data = JSON.parse(
          "{" +
            res.data.slice(
              res.data.indexOf('"dataset":'),
              res.data.indexOf("</code>")
            )
        );
        // console.log(data.dataset.data);
        let goldData = this.objectify(data.dataset.data);
        // this.structureComData(goldData);
        this.setState({
          goldData
        });
      });

    // This GET is to get the Copper Data from the API
    axios
      .get(`https://www.quandl.com/api/v3/datasets/ODA/PCOPP_USD`)
      .then(res => {
        let data = JSON.parse(
          "{" +
            res.data.slice(
              res.data.indexOf('"dataset":'),
              res.data.indexOf("</code>")
            )
        );
        // console.log(data.dataset.data);
        let copperData = this.objectify(data.dataset.data);

        this.setState({
          copperData
        });
      });

    // This GET is to get the Crude Oil Data from the API
    axios
      .get(`https://www.quandl.com/api/v3/datasets/ODA/POILWTI_USD`)
      .then(res => {
        //This takes some time by the time it gets back
        let data = JSON.parse(
          "{" +
            res.data.slice(
              res.data.indexOf('"dataset":'),
              res.data.indexOf("</code>")
            )
        );
        // console.log(data.dataset.data);
        let crudeOilData = this.objectify(data.dataset.data);

        this.setState({
          crudeOilData
        });
      });

    // This GET is to get the Cattle Data from the API
    axios
      .get(`https://www.quandl.com/api/v3/datasets/ODA/PBEEF_USD`)
      .then(res => {
        //This takes some time by the time it gets back
        let data = JSON.parse(
          "{" +
            res.data.slice(
              res.data.indexOf('"dataset":'),
              res.data.indexOf("</code>")
            )
        );
        // console.log(data.dataset.data);
        let cattleData = this.objectify(data.dataset.data);

        this.setState({
          cattleData
        });
      });

    // This GET is to get the Arabica Coffee Data from the API
    axios
      .get(`https://www.quandl.com/api/v3/datasets/ODA/PCOFFOTM_USD`)
      .then(res => {
        //This takes some time by the time it gets back
        let data = JSON.parse(
          "{" +
            res.data.slice(
              res.data.indexOf('"dataset":'),
              res.data.indexOf("</code>")
            )
        );
        // console.log(data.dataset.data);
        let coffeeData = this.objectify(data.dataset.data);

        this.setState({
          coffeeData
        });
      });

    // This GET is to get the Poultry Data from the API
    axios
      .get(`https://www.quandl.com/api/v3/datasets/ODA/POLVOIL_USD`)
      .then(res => {
        //This takes some time by the time it gets back
        let data = JSON.parse(
          "{" +
            res.data.slice(
              res.data.indexOf('"dataset":'),
              res.data.indexOf("</code>")
            )
        );
        // console.log(data.dataset.data);
        let evooData = this.objectify(data.dataset.data);

        this.setState({
          evooData
        });
      });
  }

  render() {
    console.log(this.state.goldData);
    return (
      <div className="App">
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          style={{ backgroundColor: "#56728c", zIndex: "100" }}
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
              <NavDropdown title="About" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/">TickerCorrelate</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://riverapecunia.com">
                  GRP (Developer)
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="https://github.com/grpecunia/tickercorrelate">
                Github
              </Nav.Link>
              <Nav.Link href="https://github.com/grpecunia/tickercorrelate">
                API's
              </Nav.Link>
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
            <Route
              exact
              path="/Details/:ticker"
              render={props => (
                <Details
                  tickers={this.state.tickers}
                  tickerData={this.state.tickerData}
                  {...props}
                />
              )}
            />
            <Route
              path="/Commodities/:com/:ticker"
              render={props => (
                <Commodities
                  tickers={this.state.tickers}
                  tickerData={this.state.tickerData}
                  goldData={this.state.goldData}
                  copperData={this.state.copperData}
                  crudeOilData={this.state.crudeOilData}
                  cattleData={this.state.cattleData}
                  coffeeData={this.state.coffeeData}
                  evooData={this.state.evooData}
                  data={this.state.data}
                  // structureData={this.structureData()}
                  {...props}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
