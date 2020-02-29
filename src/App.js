import React, { Component } from "react";
import logo from "./logo.svg";
import logob from "./logob.svg";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, Modal, Button } from "react-bootstrap";
import { Route, Switch, Link } from "react-router-dom";
import axios from "axios";
import { NavDropdown } from "react-bootstrap";
import Home from "./Home";
import Details from "./Details";
import Footer from "./Footer";
import Commodities from "./Commodities";
import APIs from "./APIs";
import Guide from "./Guide";
import CorrelationsJS from "./CorrelationsJS";
import Roadmap from "./Roadmap";
import "./App.css";
import MetaTags from "react-meta-tags";

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
    everythingLoaded: false
  };

  async componentDidMount() {
    let promises = [];
    promises.push(
      // This GET is to get the 13k+ Ticker and Name List from the API // **** xssHys1jzi6-XeerUyrZ (gm) or 46YBY8Uy2_gZFR_EFD_F (pg)(apiKey) ****
      axios
        .get(`https://financialmodelingprep.com/api/v3/company/stock/list`)
        .then(res => {
          //this.setState({
          return { tickers: res.data.symbolsList };
          //});
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        }),

      axios
        .get(`https://financialmodelingprep.com/api/v3/majors-indexes`)
        .then(res => {
          //this.setState({
          return { liveTickerInfo: res.data.majorIndexesList };
          //});
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        }),

      // This GET is to get the Gold Data from the API
      await axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://www.quandl.com/api/v3/datasets/WGC/GOLD_DAILY_USD/data.json?api_key=xssHys1jzi6-XeerUyrZ`
        )
        .then(res => {
          let goldData = res.data.dataset_data.data;

          //this.setState({
          return { goldData };
          //});
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        }),

      // This GET is to get the Copper Data from the API
      await axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://www.quandl.com/api/v3/datasets/ODA/PCOPP_USD/data.json?api_key=xssHys1jzi6-XeerUyrZ`
        )
        .then(res => {
          let copperData = res.data.dataset_data.data;

          //this.setState({
          return { copperData };
          //});
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        }),

      // This GET is to get the Crude Oil Data from the API
      await axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://www.quandl.com/api/v3/datasets/ODA/POILWTI_USD/data.json?api_key=xssHys1jzi6-XeerUyrZ`
        )
        .then(res => {
          let crudeOilData = res.data.dataset_data.data;

          //this.setState({
          return { crudeOilData };
          //});
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        }),

      // This GET is to get the Cattle Data from the API
      await axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://www.quandl.com/api/v3/datasets/ODA/PBEEF_USD/data.json?api_key=xssHys1jzi6-XeerUyrZ`
        )
        .then(res => {
          let cattleData = res.data.dataset_data.data;

          //this.setState({
          return { cattleData };
          //});
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        }),

      // This GET is to get the Arabica Coffee Data from the API
      await axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://www.quandl.com/api/v3/datasets/ODA/PCOFFOTM_USD/data.json?api_key=xssHys1jzi6-XeerUyrZ`
        )
        .then(res => {
          let coffeeData = res.data.dataset_data.data;

          //this.setState({
          return { coffeeData };
          // });
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        }),

      // This GET is to get the Poultry Data from the API
      await axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://www.quandl.com/api/v3/datasets/ODA/POLVOIL_USD/data.json?api_key=xssHys1jzi6-XeerUyrZ`
        )
        .then(res => {
          let evooData = res.data.dataset_data.data;

          //this.setState({
          return { evooData };
          //});
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
    );
    // console.log(promises);
    this.everythingLoaded(promises);
  }

  everythingLoaded = promises => {
    Promise.all(promises)
      .then(val => {
        // console.log("Everything has Loaded....", val);
        let obj = { everythingLoaded: true };

        val.forEach(v => {
          // console.log(Object.keys(v)[0], Object.values(v)[0]);
          obj[Object.keys(v)[0]] = Object.values(v)[0];
        });
        this.setState(obj);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  pullToParent = data => {
    this.setState({
      tickerData: data
    });
  };

  render() {
    // console.log(this.state.goldData);
    return (
      <div className="App">
        <MetaTags>
          <title>TickerCorrelate App</title>
          <meta
            property="og:url"
            content="https://tickercorrelate.com"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="TickerCorrelate" />
          <meta
            property="og:description"
            content="Correlate Stock Market information with commodity prices"
          />
          <meta
            property="og:image"
            content="https://wallpaperaccess.com/full/1393719.jpg"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:site"
            content="https://tickercorrelate.com"
          />
          <meta name="twitter:creator" content="Gustavo Rivera Pecunia" />
          <meta name="twitter:title" content="TickerCorrelate" />
          <meta
            name="twitter:description"
            content="Correlate Stock Market information with commodity prices"
          />
          <meta
            name="twitter:image"
            content="https://wallpaperaccess.com/full/1393719.jpg"
          />
        </MetaTags>
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          style={{ backgroundColor: "#56728c", zIndex: "100" }}
          className="nav"
        >
          <Navbar.Brand as={Link} to="/">
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
                <NavDropdown.Item as={Link} to="/APIs">
                  API's
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="https://github.com/grpecunia/tickercorrelate"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="https://riverapecunia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GRP (Developer)
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={this.showModal}>
                  TickerCorrelate
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/Guide">
                Statistical Guide
              </Nav.Link>
              <Nav.Link as={Link} to="/CorrelationsJS">
                Correlations w/ JavaScript
              </Nav.Link>
              <Nav.Link as={Link} to="/Roadmap">
                Roadmap
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.show}
        >
          <Modal.Header>
            <Modal.Title
              id="contained-modal-title-vcenter"
              style={{ textAlign: "center" }}
            >
              <img alt="TickerCorrelate" src={logob} width="30" height="30" />{" "}
              TickerCorrelate App
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3 className="home">
              <b>About the TickerCorrelate Project</b>
            </h3>
            <p style={{ paddingLeft: "10%", paddingRight: "10%" }}>
              This project was intended as an educational tool for programers
              that want to learn about how to manipulate API data into datasets
              for building real world applications. It is also intended as a
              tool for data analyst or novel curious thinkers that want to dive
              into correlating analysis for stock market information.
            </p>
            <br />
            <br />
            For more information email us at:{" "}
            <a href="mailto:tickercorrelate@gmail.com">
              tickercorrelate@gmail.com
            </a>
            <hr />
            <h4 className="home" style={{ color: "red" }}>
              <b>Application Information Disclaimer</b>
            </h4>
            <p style={{ paddingLeft: "10%", paddingRight: "10%" }}>
              The correlation analysis gathered from this application are by no
              means meant as equity or commodity trading advice. Please contact
              your financial advisor before making any desicions with the
              provided information. The sole purpose of this application is to
              determine if and when ticker value prices and commodities have a
              correlation which in fact may help narrow down the real of
              possibilities of their day to day behavior.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideModal}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home
                tickers={this.state.tickers}
                pullToParent={this.pullToParent}
                everythingLoaded={this.everythingLoaded}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/Details/:ticker"
            render={props => (
              <Details
                tickers={this.state.tickers}
                tickerData={this.state.tickerData}
                pullToParent={this.pullToParent}
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
                everythingLoaded={this.state.everythingLoaded}
                pullToParent={this.pullToParent}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/APIs"
            render={props => <APIs {...props} />}
          />
          <Route exact path="/Guide" render={props => <Guide {...props} />} />
          <Route
            exact
            path="/CorrelationsJS"
            render={props => <CorrelationsJS {...props} />}
          />
          <Route
            exact
            path="/Roadmap"
            render={props => <Roadmap {...props} />}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
