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
    return this.state.filteredItems.slice(0, 5).map((eachItem, i) => {
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

  showDetails = () => {
    console.log("oh yeah... we went there....");
    console.log(this.state.searchTicker);
     this.setState({ selectedOptionTicker: this.state.search.symbol },
      ()=>{
          this.props.history.push(`/Details/${this.state.searchTicker}`);
      });

  };

  render() {
    return (
      <div className="col home ease-in">
        <div className="col-12 home">
          <h1>Welcome to TickerCorrelate</h1>
          <div className="row">
            <div className="col-8 offset-2 home-text">
              <p>
                <b>
                  Find correlations between more than 13k+ publicly traded
                  stocks and commodities!
                </b>
                <br />
                <br />
                Start by selecting a company to view it's profile and then
                proceed to correlate it's stock's close price with different
                commodities throughout a selected timeframe.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-6 offset-3">
            <div className="md-form">
              <input
                value={this.state.search}
                type="text"
                placeholder="Type the Company or ETF name..."
                className="form-scontrol"
                onChange={this.filterStuff}
              />
              {this.showOptions()}
            </div>
            <br />
          </div>
        </div>
        <button
          type="submit"
          onClick={() => this.showDetails(this.state.search)}
          className="btn btn-success center"
        >
          Let's Get Started!
        </button>
      </div>
    );
  }
}

export default Home;   