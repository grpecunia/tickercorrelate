/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import logo from "./logob.svg";
import logo2 from "./logo.svg"


class Home extends Component {
  state = {
    options: [],
    selectedOptionTicker: null,
    filteredItems: [],
    search: "",
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  // showTickerOptions = () => {
  //   // console.log(this.props.tickers);
  //   let tickerOptions = { ...this.props.tickers };
  //   let tickerList = [];
  //   tickerOptions.map(ticker => {
  //     tickerList.push({
  //       value: ticker.symbol,
  //       label: ticker.name
  //     });
  //   })
  //   return tickerList.slice(0, 1000);
  // };


  filterStuff = e => {
    // console.log(this.props);
    let filteredItems = this.props.tickers.filter(symbol => {
      if (symbol.name) {
        return (
          symbol.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          symbol.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          symbol.symbol.toLowerCase().includes(e.target.value.toLowerCase()) ||
          symbol.symbol.toLowerCase().includes(e.target.value.toLowerCase())
        );
      }
    });
    this.setState({
      filteredItems,
      search: e.target.value
    });
    // console.log(filteredItems, filteredItems.length);
  };

  showOptions = e => {
    return this.state.filteredItems.slice(0, 10).map((eachItem, i) => {
      return (
        <li
          key={i}
          className="tickerOptions"
          name={eachItem.name}
          onClick={() => this.selectItem(eachItem)}
        >
          <span>
            {" "}
            <b>{eachItem.symbol}</b> - {eachItem.name}{" "}
          </span>
        </li>
      );
    });
  };

  selectItem = item => {
    // console.log(item);
    this.setState({
      searchTicker: item.symbol,
      searchName: item.name
    });
    this.filterStuff({ target: { value: item.name } });
    this.setState({
      filteredItems : []
    })
  };

  _showDetails = (e, i) => {
    if (this.state.searchTicker) {
      // console.log("oh yeah... we went there....");
      // console.log(this.state.searchTicker);
      this.setState({ selectedOptionTicker: this.state.search.symbol }, () => {
        this.props.history.push(`/Details/${this.state.searchTicker}`);
      });
    }
    else {
      e.preventDefault();
      // console.log("Nothing has been selected yet....");
    }
  };
  get showDetails() {
    return this._showDetails;
  }
  set showDetails(value) {
    this._showDetails = value;
  }

  render() {
    return (
      <React.Fragment>
        <div
          className="col-lg-10 col-md-10 col-sm-10 offset-1 home ease-in"
          id="top"
        >
          <div className="jumbotron">
            <h1 className="display-4">
              <img
                alt="TickerCorrelate"
                src={logo}
                width="60"
                height="60"
                className="d-inline-block align-top"
              />{" "}
              TickerCorrelate
            </h1>
            <p
              className="lead"
              style={{ paddingLeft: "10%", paddingRight: "10%" }}
            >
              Find correlations between more than 13,000+ publicly traded
              stocks, ETF's, Mutual Funds, Bonds and World traded commodities!
            </p>
            <hr className="my-4" />
            <p style={{ paddingLeft: "10%", paddingRight: "10%" }}>
              A DataScience and Computer Programming Educational Tool
            </p>
          </div>
          <div
            className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-8 offset-sm-1"
            style={{ paddingBottom: "100px" }}
          >
            <form className="mb-form" onChange={this.filterStuff}>
              {this.props.tickers.length >= 1 ? (
                <React.Fragment>
                  <input
                    value={this.state.search}
                    type="text"
                    placeholder="Type the Company or ETF name..."
                    className="form-scontrol home"
                  />
                  {this.showOptions()}

                  <br />

                  <button
                    type="submit"
                    onClick={e => this.showDetails(e, this.state.search)}
                    className="btn btn-success center"
                    style={{ marginTop: "10px" }}
                  >
                    Let's Get Started!
                  </button>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <p className="loading">
                    <img
                      alt="TickerCorrelate"
                      src={logo}
                      width="25"
                      height="25"
                      className="d-inline-block align-top loading"
                    />{" "}
                    Loading data...{" "}
                  </p>
                  <br />
                  <img
                    src="https://s3.us-east-1.amazonaws.com/guspecunia.com/assets/img/ezgif.com-resize.gif"
                    alt="loading"
                  />
                </React.Fragment>
              )}
            </form>
            <br />
            <a href="/#howTo">
              <img
                src="https://cdn4.iconfinder.com/data/icons/basics-set-2/100/Question-512.png"
                alt="Help"
                height="50"
                width="50"
              />
            </a>
          </div>

          <hr
            className="featurette-divider"
            style={{ paddingBottom: "20px" }}
          />
          <h2> The TickerCorrelate Project </h2>
          <br />
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vR5wEMAmCn1bPhefMtGpsOu2pPA3wWAEIno4xVetivOlZLapgcSRaTO7PpY_MkBJYzSw1o2QtBHoG58/embed?start=false&loop=false&delayms=3000"
            frameBorder="0"
            width="100%"
            height="400px"
            allowFullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            title="TC Presentation"
            style={{ paddingBottom: "20px" }}
          ></iframe>
          <br />
          <br />
          <hr
            className="featurette-divider"
            style={{ paddingBottom: "40px" }}
            id="howTo"
          />

          <div
            className="row featurette"
            style={{ paddingBottom: "50px" }}
            id="howTo"
          >
            <div
              className="col-md-7"
              style={{ paddingTop: "40px", paddingBottom: "40px" }}
            >
              <br />
              <h2 className="featurette-heading">
                How to use the{" "}
                <span className="text-muted">TickerCorrelate App?</span>
              </h2>
              <p className="lead">
                Very simple! Search for the name or the ticker symbol of the
                company, ETF, Mutual Fund or Bond in the provided search bar
                above. Once you see your desired ticker, click your selection.
                Once the ticker name has been set, click:
              </p>
              <a href="/#top">
                <button className="btn btn-success center">
                  Let's Get Started!
                </button>
              </a>
              <br />
            </div>
            <div
              className="col-md-5"
              style={{ paddingTop: "40px", paddingBottom: "40px" }}
            >
              <img
                className="featurette-image img-fluid mx-auto"
                src="https://wallpaperaccess.com/full/1393719.jpg"
                alt="Stock Market"
              />
            </div>
          </div>

          <hr
            className="featurette-divider"
            style={{ paddingTop: "40px", paddingBottom: "40px" }}
          />

          <div
            className="row"
            style={{ paddingTop: "40px", paddingBottom: "60px" }}
          >
            <div className="col-lg-4">
              <img
                className="rounded-circle"
                src="https://media.giphy.com/media/JtBZm3Getg3dqxK0zP/giphy.gif"
                alt=""
                width="140"
                height="140"
              />
              <h2>Market Data</h2>
              <p>
                The application is backed by powerful API's with stock market
                data and commodity trading from across the world. View
                company/ticker information with access to download ready data.
              </p>
            </div>
            <div className="col-lg-4">
              <img
                className="rounded-circle"
                src="https://media.giphy.com/media/ZMOQDnLAY2hOM/giphy.gif"
                alt="Commodities"
                width="140"
                height="140"
              />
              <h2>Compare</h2>
              <img
                src="https://image.flaticon.com/icons/svg/2506/2506011.svg"
                alt="gold"
                width="50px"
                height="50px"
              />

              <p>
                <br />
                Compare over 13,000+ ticker symbols with different commodities!
              </p>
            </div>
            <div className="col-lg-4">
              <img
                className="rounded-circle"
                src="https://media.giphy.com/media/11Br38TUpXchNK/giphy.gif"
                alt="Analysis"
                width="140"
                height="140"
              />
              <h2>Analyze</h2>
              <p>
                Generate a correlation/regression analysis for a range of time
                between your selected ticker symbol and commodity returning you
                with a Pearson's Correlation and R² values for your analysis.
              </p>
            </div>
          </div>
        </div>
        <footer
          className="page-footer font-small blue pt-4"
          style={{
            backgroundColor: "#305373",
            paddingTop: "40px",
            paddingBottom: "40px",
            color: "white",
            textDecoration: "none"
          }}
        >
          <div
            className="container-fluid text-center text-md-left container"
            style={{ paddingTop: "40px" }}
          >
            <div className="row" style={{ display: "align-space-evenly" }}>
              <div className="col-md-6 mt-md-0 mt-3">
                <h5>
                  About the {"  "}
                  <img
                    alt="TickerCorrelate"
                    src={logo2}
                    width="25"
                    height="25"
                    className="d-inline-block align-top"
                  />{" "}
                  TickerCorrelate Application Project
                </h5>
                <p>
                  This is an open source application intended as an educational tool for
                  programmers that want to learn about how to manipulate API
                  data into datasets for building real world applications. It is
                  also intended as a tool for data analysts and/or novel curious
                  thinkers that want to dive into analysis of stock market
                  information. <br />
                  <br />
                  For more information about the project email us at:{" "}
                  <a href="mailto:tickercorrelate@gmail.com">
                    tickercorrelate@gmail.com
                  </a>
                </p>
              </div>

              <hr
                className="clearfix w-100 d-md-none pb-3"
                style={{ paddingLeft: "10px" }}
              />

              <div
                className="col-md-3 mb-md-0 mb-3"
                style={{ textAlign: "center" }}
              >
                <h5 className="text-uppercase">Proudly Originated at</h5>
                <br />
                <a
                  href="https://www.ironhack.com/en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/4017/s300/logo-ironhack-blue.png"
                    alt="Ironhack"
                    width="120vw"
                    height="120vh"
                  />
                </a>
                <br />
                <br />
              </div>

              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase" style={{ textAlign: "center" }}>
                  Documentation
                </h5>

                <ul className="list-unstyled" style={{ textAlign: "center" }}>
                  <li>
                    <a
                      href="https://financialmodelingprep.com/developer/docs/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Financial Modeling Prep
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.quandl.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quandl
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://react-google-charts.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      React Google Charts
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.npmjs.com/package/axios"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Axios
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Home;   