import React, { Component } from 'react';
import { Form, Col } from 'react-bootstrap'
import Select from 'react-select'


class SideBar extends Component {
  state = {
    options: [],
    selectedOptionTicker: null
  };

  showTickerOptions = () => {
    console.log(this.props.tickers);
    let tickerOptions = { ...this.props.tickers };
    let tickerList = [];
    for (let i in tickerOptions) {
      tickerList.push(tickerOptions[i].symbol);
    }
    return tickerList
    
  };

  handleChangeTicker = selectedOptionTicker => {
    this.setState({ selectedOptionTicker });
    console.log(`Ticker selected:`, selectedOptionTicker);
  };

  showCommoditiesOptions = () => {
    console.log("show them commodities yo....");
  };

  render() {
    const { selectedOptionTicker } = this.state;
    return (
      <div
        className="col-2 container sidebar"
        style={{ paddingTop: "20px", margin: "auto" }}
      >
          <Form.Group as={Col} controlId="tcformpicker">
            <Form.Label>Start Date</Form.Label>
            <br />
            <input
              className="date-control"
              onChange={e => this.handleChange(e)}
              name="dateFrom"
              placeholder="Start"
              type="date"
            ></input>
            <br />
            <br />
            <Form.Label>End Date</Form.Label>
            <br />
            <input
              className="date-control"
              onChange={e => this.handleChange(e)}
              name="dateTo"
              placeholder="End"
              type="date"
            ></input>
            <br />
            <br />

            <Select
              value={selectedOptionTicker}
              onChange={e => this.handleChangeTicker(e)}
              options={this.showTickerOptions()}
              style={{color:'black'}}
            />

            {/* <Form.Label>Select Ticker</Form.Label>
          <Form.Control
            onChange={e => this.handleChange(e)}
            name="ticker"
            placeholder="Ticker Symbol"
            as="select"
          >
            <option className="selected">Ticker Symbols...</option>
            {this.showTickerOptions()}
          </Form.Control> */}
            <br />
            <Form.Label>Select Commodity</Form.Label>
            <Form.Control
              onChange={e => this.handleChange(e)}
              name="commodity"
              placeholder="Commodity"
              as="select"
            >
              <option className="selected">Commodities...</option>
              {this.showCommoditiesOptions()}
            </Form.Control>
            <br />
          </Form.Group>
      </div>
    );
  }
}

export default SideBar;