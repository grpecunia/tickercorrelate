import React, { Component } from "react";
import axios from "axios";

class Details extends Component {
  state = {
    tickerData: [],
    historicalClosePrices: [],
    commodityHistoricalPrices: [],
    tickerRating: [],
    tickerMetrics : [],
  };

  componentDidMount() {
    axios
      .get(
        `https://financialmodelingprep.com/api/v3/historical-price-full/${this.props.match.params.ticker}?serietype=line`
      )
      .then(res => {
        // console.log(res.data.historical);
        this.setState({
          historicalClosePrices: res.data.historical
        });
      });

    axios
      .get(
        `https://financialmodelingprep.com/api/v3/company-key-metrics/${this.props.match.params.ticker}`
      )
      .then(res => {
        this.setState({
          tickerMetrics: res.data.metrics[0]
        });
        // console.log(this.state.tickerData)
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })


    axios
      .get(
        `https://financialmodelingprep.com/api/v3/company/rating/${this.props.match.params.ticker}`
      )
      .then(res => {
        // console.log(res.data.rating);

        this.setState({
          tickerRating: res.data.rating
        });
        // console.log(this.state.tickerData)
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })

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
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
  }

  setGraphValues = () => {
    console.log(this.state.commodityHistoricalPrices);
  };

  numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  pushToCommodity = e => {
    console.log(e.target.innerText, this.props);
    this.props.history.push(
      `/Commodities/${e.target.innerText}/${this.props.match.params.ticker}/`
    );
  };

  render() {
    // console.log(this.state.historicalClosePrices);
    console.log(this.props);
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
              />
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h2 className="card-title">
                  <b>{this.state.tickerData.companyName}</b>
                </h2>
                <p className="card-text">{this.state.tickerData.description}</p>
                <p className="card-text">
                  <small className="text-muted">
                    <b>
                      Ticker Symbol {" - "}
                      {this.props.match.params.ticker} @{" "}
                      {this.state.tickerData.exchange}
                    </b>
                    <br />
                    <b>Web:</b>{" "}
                    <a
                      href={this.state.tickerData.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
          <ul className="list-group col-lg-4 col-md-4 col-sm-12">
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
              <span className="badge badge-info badge-pill">
                {this.state.tickerData.ceo}
              </span>
            </li>
          </ul>
          <ul className="list-group col-lg-4 col-md-4 col-sm-12">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Price
              <span className="badge badge-success badge-pill">
                $ {Number(this.state.tickerData.price).toFixed(2)}
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
                {Number(this.state.tickerData.beta).toFixed(2) !== undefined
                  ? Number(this.state.tickerData.beta).toFixed(2)
                  : `N/A`}
              </span>
            </li>
          </ul>
          <ul className="list-group col-lg-4 col-md-4 col-sm-12">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Market Cap
              <span className="badge badge-info badge-pill">
                {`$ ` +
                  this.numberWithCommas(Number(this.state.tickerData.mktCap))}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              52wk Range
              <span className="badge badge-success badge-pill">
                {`$ ` + this.state.tickerData.range}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Last Change
              <span className="badge badge-warning badge-pill">
                {`$ ` + Number(this.state.tickerData.changes).toFixed(2) + "          "}
                <span className="badge badge-light">
                  {this.state.tickerData.changesPercentage}
                </span>
              </span>
            </li>
          </ul>
        </div>

        <h5 className="home">
          <b>Select an Options for Commodity Correlations</b>
        </h5>
        <div className="container row home">
          <div
            onClick={e => this.pushToCommodity(e)}
            className="col-lg-2 col-md-4 col-sm-12"
          >
            <div
              className="row-8"
              style={{
                backgroundColor: "#6f89a1"
              }}
            >
              Gold
            </div>
          </div>
          <div
            onClick={e => this.pushToCommodity(e)}
            className="col-lg-2 col-md-4 col-sm-12"
          >
            <div
              className="row-8"
              style={{
                backgroundColor: "#6f89a1"
              }}
            >
              Copper
            </div>
          </div>
          <div
            onClick={e => this.pushToCommodity(e)}
            className="col-lg-2 col-md-4 col-sm-12"
          >
            <div
              className="row-8"
              style={{
                backgroundColor: "#6f89a1"
              }}
            >
              Crude Oil
            </div>
          </div>
          <div
            onClick={e => this.pushToCommodity(e)}
            className="col-lg-2 col-md-4 col-sm-12"
          >
            <div
              className="row-8"
              style={{
                backgroundColor: "#6f89a1"
              }}
            >
              Cattle
            </div>
          </div>
          <div
            onClick={e => this.pushToCommodity(e)}
            className="col-lg-2 col-md-4 col-sm-12"
          >
            <div
              className="row-8"
              style={{
                backgroundColor: "#6f89a1"
              }}
            >
              Coffee
            </div>
          </div>
          <div
            onClick={e => this.pushToCommodity(e)}
            className="col-lg-2 col-md-4 col-sm-12"
          >
            <div
              className="row-8"
              style={{
                backgroundColor: "#6f89a1"
              }}
            >
              Olive Oil
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
