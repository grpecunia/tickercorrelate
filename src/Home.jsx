/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import logo from "./logob.svg";


class Home extends Component {
  state = {
    options: [],
    selectedOptionTicker: null,
    filteredItems: [],
    search: ""
  };

  

  showTickerOptions = () => {
    console.log(this.props.tickers);
    let tickerOptions = { ...this.props.tickers };
    let tickerList = [];
    for (let i in tickerOptions) {
      tickerList.push({
        value: tickerOptions[i].symbol,
        label: tickerOptions[i].name
      });
    }
    // console.log(tickerList);
    return tickerList.slice(0, 1000);
  };


  filterStuff = e => {
    // console.log(this.props);
    let filteredItems = this.props.tickers.filter(symbol => {
      if (symbol.name) {
        return (
          symbol.name.toLowerCase().includes(e.target.value) ||
          symbol.symbol.toLowerCase().includes(e.target.value) ||
          symbol.symbol.includes(e.target.value)
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
    console.log(item);
    this.setState({
      searchTicker: item.symbol,
      searchName: item.name
    });
    this.filterStuff({ target: { value: item.name } });
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
      console.log("Nothing has been selected yet....");
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
      <div className="col-lg-10 col-md-10 col-sm-10 offset-1 home ease-in">
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
            Find correlations between more than 13,000+ publicly traded stocks,
            ETF's, Mutual Funds, Bonds and World traded commodities!
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
          <form className="mb-form">
            <input
              value={this.state.search}
              type="text"
              placeholder="Type the Company or ETF name..."
              className="form-scontrol home"
              onChange={this.filterStuff}
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
          </form>
        </div>

        <hr className="featurette-divider" style={{ paddingBottom: "20px" }} />

        <div className="row featurette" style={{ paddingBottom: "20px" }}>
          <div className="col-md-7" style={{ paddingTop: "10px" }}>
            <h2 className="featurette-heading">
              How to use the{" "}
              <span className="text-muted">TickerCorrelate App?</span>
            </h2>
            <p className="lead" id="howTo">
              Very simple! Search for the name or the ticker symbol of the
              company, ETF, Mutual Fund or Bond in the provided search bar
              above. Once you see your desired ticker, click your selection.
              Once the ticker name has been set, click:
            </p>
            <a href="/#">
              <button className="btn btn-success center">
                Let's Get Started!
              </button>
            </a>
            <br />
          </div>
          <div className="col-md-5" style={{ paddingTop: "10px" }}>
            <img
              className="featurette-image img-fluid mx-auto"
              src="https://wallpaperaccess.com/full/1393719.jpg"
              alt="Stock Market"
            />
          </div>
        </div>

        <hr className="featurette-divider" style={{ paddingBottom: "20px" }} />

        <div className="row">
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
              The application is backed by powerful API's with stock market data
              and commodity trading from across the world. View company/ticker
              information with access to download ready data.
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

        <hr className="featurette-divider" />

        <footer className="page-footer font-small blue pt-4">
          <div className="container-fluid text-center text-md-left">
            <div className="row" style={{ display: "align-space-evenly" }}>
              <div className="col-md-6 mt-md-0 mt-3">
                <h5>
                  About the {"  "}
                  <img
                    alt="TickerCorrelate"
                    src={logo}
                    width="25"
                    height="25"
                    className="d-inline-block align-top"
                  />{" "}
                  TickerCorrelate Application
                </h5>
                <p>
                  This application was intended as an educational tool for
                  programers that want to learn about how to manipulate API data
                  into datasets for building real world applications. It is also
                  intended as a tool for data analysts and/or novel curious
                  thinkers that want to dive into analysis of stock market
                  information.
                </p>
              </div>

              <hr
                className="clearfix w-100 d-md-none pb-3"
                style={{ paddingLeft: "10px" }}
              />

              <div className="col-md-3 mb-md-0 mb-3 home">
                <img
                  src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/4017/s300/logo-ironhack-blue.png"
                  alt="Ironhack"
                  width="120vw"
                  height="120vh"
                />
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
      </div>
      </React.Fragment>
    );
  }
}

export default Home;   