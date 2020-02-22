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
    console.log(tickerList);
    return tickerList.slice(0, 1000);
  };

  // handleChangeTicker = selectedOptionTicker => {
  //   console.log(selectedOptionTicker);

  //   this.setState({ selectedOptionTicker });
  //   // this.setState({ test: selectedOptionTicker.target.value });
  //   console.log(`Ticker selected:`, selectedOptionTicker);
  // };

  filterStuff = e => {
    console.log(this.props);
    let filteredItems = this.props.tickers.filter(symbol => {
      if (symbol.name) {
        return symbol.name.toLowerCase().includes(e.target.value);
      }
    });
    this.setState({
      filteredItems,
      search: e.target.value
    });
    console.log(filteredItems, filteredItems.length);
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
          {eachItem.name}
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
      console.log("oh yeah... we went there....");
      console.log(this.state.searchTicker);
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
      <div className="col-10 offset-1 home ease-in">
        <div class="jumbotron">
          <h1 class="display-4">Welcome to TickerCorrelate</h1>
          <p class="lead">
            Find correlations between more than 13,000+ publicly traded stocks,
            ETF's, Mutual Funds, Bonds and World traded commodities!
          </p>
          <hr class="my-4" />
          <p style={{ paddingLeft: "20%", paddingRight: "20%" }}>
            Search for the name of the company, ETF, Mutual Fund or Bond in the
            provided input below and then click on the button to proceed the
            respective company profiles in order to correlate it's market close
            price with different commodities. To learn more about this project
            or the application, please check out the About section on the top
            navigation bar.
          </p>
        </div>
        <div className="col-6 offset-3">
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