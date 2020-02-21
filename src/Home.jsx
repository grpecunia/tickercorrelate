import React, { Component } from 'react';
import { Form, Col } from "react-bootstrap";
import Select from "react-select";


class Home extends Component {
    
    state = {
        options: [],
        selectedOptionTicker: null
    };

  showTickerOptions = () => {
    console.log(this.props.tickers);
    let tickerOptions = { ...this.props.tickers };
    let tickerList = [];
    for (let i in tickerOptions) {
      tickerList.push(tickerOptions[i].name);
    }
    return tickerList;
  };

  handleChangeTicker = selectedOptionTicker => {
    this.setState({ selectedOptionTicker });
    console.log(`Ticker selected:`, selectedOptionTicker);
  };

  render() {
    const { selectedOptionTicker } = this.state;
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
            <Form.Group as={Col} controlId="tcformpicker">
              <Select
                value={selectedOptionTicker}
                onChange={e => this.handleChangeTicker(e)}
                options={this.showTickerOptions()}
              />
            </Form.Group>
            <br />
          </div>
        </div>
        <button type="submit" className="btn btn-success center">
          Let's Get Started!
        </button>
      </div>
    );
  }
}

export default Home;   