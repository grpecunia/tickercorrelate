/* eslint-disable array-callback-return */
import React, { Component } from 'react';


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

  // handleChangeTicker = selectedOptionTicker => {
  //   console.log(selectedOptionTicker);

  //   this.setState({ selectedOptionTicker });
  //   // this.setState({ test: selectedOptionTicker.target.value });
  //   console.log(`Ticker selected:`, selectedOptionTicker);
  // };

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
    return this.state.filteredItems.slice(0, 3).map((eachItem, i) => {
      return (
        <li
          key={eachItem.symbol}
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

  showDetails = (e, i) => {
    if (this.state.searchTicker) {
      // console.log("oh yeah... we went there....");
      // console.log(this.state.searchTicker);
      this.setState({ selectedOptionTicker: this.state.search.symbol }, () => {
        this.props.history.push(`/Details/${this.state.searchTicker}`);
      });
    } else {
      e.preventDefault();
      console.log("Nothing has been selected yet....");
    }
  };

  render() {
    return (
      <div className="col-lg-10 col-md-10 col-sm-10 offset-1 home ease-in">
        <div className="jumbotron">
          <h1 className="display-4">
            <span className="icon" role="img" aria-label="Graph">
              📊
            </span>{" "}
            TickerCorrelate{" "}
            <span className="icon" role="img" aria-label="World">
              🚀
            </span>
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
            Search for the name of the company, ETF, Mutual Fund or Bond in the
            provided input below and then click on the button to proceed the
            respective company profiles in order to correlate its market close
            price with different commodities. To learn more about this project
            or the application, please check out the About section on the top
            navigation.
          </p>
        </div>
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-8 offset-sm-1">
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
      </div>
    );
  }
}

export default Home;   