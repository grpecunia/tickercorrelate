import React, { Component } from 'react';
import axios from "axios";
import Select from "react-select";

class Details extends Component {
  
    state = {
        tickerData : [],
        historicalClosePrices : []
        
    }

    componentDidMount() {

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
    .get(`https://financialmodelingprep.com/api/v3/company/profile/${this.props.match.params.ticker}`)
      .then(res => {
        //This takes some time by the time it gets back
        this.setState({
          tickerData : res.data.profile,
        });
        // console.log(this.state.tickerData)
      });
  }

  render() {
    console.log('this state >>>',this.state)
    console.log("this props >>>", this.props);

    return (
      <div className="container">
        <div className="row">
          <div className="col-1 profile">
            <img className="profile" src={this.state.tickerData.image} alt="" />
          </div>
          <div className="col-8 offset-2" style={{ paddingTop: "20px" }}>
            <h2>{this.state.tickerData.companyName}</h2>
            {this.props.match.params.ticker}
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="row row-bottom">
          <div className="col-4">
            <Select
              onChange={e => this.handleChange(e)}
              name="commodity"
              placeholder="Commodity"
              as="select"
            >
              <option className="selected">Commodities...</option>
              {/* {this.showCommoditiesOptions()} */}
            </Select>
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
          </div>
        </div>
      </div>
    );
  }
}

export default Details;