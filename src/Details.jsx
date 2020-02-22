import React, { Component } from "react";
import axios from "axios";
// import Select from "react-select";
// import {Card, ListGroup, ListGroupItem } from 'react-bootstrap'
// import Chart from "react-google-charts";

class Details extends Component {
  state = {
    tickerData: [],
    historicalClosePrices: [],
    commodityHistoricalPrices: []
  };

  objectify = array => {
    return array.reduce((date, price) => {
      date[price[0]] = price[1];
      return date;
    }, {});
  };

  componentDidMount() {
    axios
      .get(`https://www.quandl.com/api/v3/datasets/WGC/GOLD_DAILY_USD`)
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
        let newObj = this.objectify(data.dataset.data);

        this.setState({
          commodityHistoricalPrices: newObj
        });
      });

    axios
      .get(
        `https://financialmodelingprep.com/api/v3/historical-price-full/${this.props.match.params.ticker}?serietype=line`
      )
      .then(res => {
        //This takes some time by the time it gets back
        this.setState({
          historicalClosePrices: res.data.historical
        });
        // console.log(this.state.tickerData)
      });

    axios
      .get(
        `https://financialmodelingprep.com/api/v3/company/profile/${this.props.match.params.ticker}`
      )
      .then(res => {
        //This takes some time by the time it gets back
        this.setState({
          tickerData: res.data.profile
        });
        // console.log(this.state.tickerData)
      });
  }

  setGraphValues = () => {
    console.log(this.state.commodityHistoricalPrices);
  };

  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    console.log(this.state.tickerData);
    // console.log(this.state.commodityHistoricalPrices);
    // console.log(this.state.historicalClosePrices);
    // console.log(this.state.commodityHistoricalPrices);
    // console.log('this state >>>',this.state)
    // console.log("this props >>>", this.props);

    return (
      <div className="container">
        <div className="card mb-1" style={{ marginTop: "10px" }}>
          <div className="row no-gutters">
            <div className="col-md-2">
              <img
                src={this.state.tickerData.image}
                className="card-img  ab"
                alt={this.props.match.params.ticker}
                style={{}}
              />
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title">
                  {this.state.tickerData.companyName}
                </h5>
                <p className="card-text">{this.state.tickerData.description}</p>
                <p className="card-text">
                  <small className="text-muted">
                    Ticker Symbol - {this.props.match.params.ticker} @{" "}
                    {this.state.tickerData.exchange}
                    <br />
                    Web:{" "}
                    <a href={this.state.tickerData.website} target="_blank">
                      {this.state.tickerData.website}
                    </a>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row"
          style={{ paddingTop: "10px", paddingLeft: "15px" }}
        >
          <ul className="list-group col-6">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Industry
              <span className="badge badge-primary badge-pill">
                {this.state.tickerData.industry}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Sector
              <span className="badge badge-warning badge-pill">
                {this.state.tickerData.sector}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              CEO
              <span className="badge badge-secondary badge-pill">
                {this.state.tickerData.ceo}
              </span>
            </li>
          </ul>
          <ul className="list-group col-6">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Price
              <span className="badge badge-success badge-pill">
                ${Number(this.state.tickerData.price).toFixed(2)}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Vol Ave
              <span className="badge badge-warning badge-pill">
                {this.numberWithCommas(Number(this.state.tickerData.volAvg))}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Beta
              <span className="badge badge-danger badge-pill">
                {Number(this.state.tickerData.beta).toFixed(2)}
              </span>
            </li>
          </ul>
        </div>
        <br />
        <br />
        {/* <Chart
          width={"50%"}
          height={"50vh"}
          chartType="Line"
          loader={<div className="loading">Loading Chart...</div>}
          data={[
            [
              { type: "date", label: "price" },
              this.props.match.params.ticker,
              "Commodity"
            ],

            [new Date("2020-02-14"), -0.5, 1581.4],
            [new Date("2020-02-13"), 0.4, 1575.05],
            [new Date("2020-02-12"), 0.5, 1563.7],
            [new Date("2020-02-11"), 2.9, 1570.5],
            [new Date("2020-02-10"), 6.3, 1573.2],
            [new Date("2020-02-07"), 9, 1572.65],
            [new Date("2020-02-06"), 10.6, 1563.3],
            [new Date("2020-02-05"), 10.3, 1553.3],
            [new Date("2020-02-04"), 7.4, 1558.35],
            [new Date("2020-02-03"), 4.4, 1574.75],
            [new Date("2020-01-31"), 1.1, 1584.2],
            [new Date("2020-01-30"), -0.2, 1578.25]
          ]}
          options={{
            chart: {
              title: this.state.tickerData.companyName
            },
            width: "900",
            height: "30vh",
            series: {
              // Gives each series an axis name that matches the Y-axis below.
              0: { axis: this.props.match.params.ticker },
              1: { axis: "Commodity Price" }
            },
            axes: {
              // Adds labels to each axis; they don't have to match the axis names.
              y: {
                Ticker: { label: this.props.match.params.ticker },
                Comodity: { label: "Comodity" }
              }
            }
          }}
          rootProps={{ "data-testid": "4" }}
        /> */}

        <h5 className="home">
          Select one of the options from the commodities below to start the
          Correlation analysis!
        </h5>
        <div className="row home">
          <div className="col-4">
            <div
              className="row-4"
              style={{
                backgroundColor: "gold"
              }}
            >
              Gold
            </div>
            <br />
            <div
              className="row-4"
              style={{
                backgroundColor: "silver"
              }}
            >
              Palladium
            </div>
          </div>
          <div className="col-4">
            <div
              className="row-4"
              style={{
                backgroundColor: "sandybrown"
              }}
            >
              Crude Oil
            </div>
            <br />
            <div
              className="row-4"
              style={{
                backgroundColor: "yellow"
              }}
            >
              Corn
            </div>
          </div>
          <div className="col-4">
            <div
              className="row-4"
              style={{
                backgroundColor: "lightgoldenrodyellow"
              }}
            >
              Dairy
            </div>
            <br />
            <div
              className="row-4"
              style={{
                backgroundColor: "red"
              }}
            >
              Poulty
            </div>
          </div>
        </div>
        {/* <div className="row row-bottom">
          <div className="col-4">
            <Select
              onChange={e => this.handleChange(e)}
              name="commodity"
              placeholder="Commodity"
              as="select"
            >
              <option className="selected">Commodities...</option>
              {/* {this.showCommoditiesOptions()} */}
        {/* </Select>
          </div>
          <div className="col-4">
            <input
              className="date-control"
              onChange={e => this.handleChange(e)}
              name="dateFrom"
              placeholder="Start"
              type="date"
            ></input>
          </div>
          <div className="col-4">
            <input
              className="date-control"
              onChange={e => this.handleChange(e)}
              name="dateTo"
              placeholder="End"
              type="date"
            ></input>
          </div> */}
        {/* </div> */}
      </div>
    );
  }
}

export default Details;
