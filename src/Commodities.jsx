import React, { Component } from "react";
import Chart from "react-google-charts";

class Commodities extends Component {
  state = {
    tickerData: this.props.tickerData,
    goldData: this.props.goldData,
    copperData: this.props.copperData,
    crudeOilData: this.props.crudeOilData,
    cattleData: this.props.cattleData,
    coffeeData: this.props.coffeeData,
    evooData: this.props.evooData
  };

  render() {
    console.log(this.props.goldData);
    console.log(this.props.copperData);
    return (
      <div className="container home">
        <h1>Commodity Analysis </h1>
        <h3>
          Correlation between for {this.props.match.params.com}
          {" & "}
          {this.props.match.params.ticker}
        </h3>
        <br />
        <br />
        <div className="container row">
          <div className="col-3 offset-1">
            <div className="row-3 home">
              <label>Correlation Start Date</label>
              <input type="date"></input>
            </div>
            <div className="row-3 home">
              <label>Correlation End Date</label>
              <input type="date"></input>
            </div>
            <br/>
            <button type="submit" className="btn-outline-success">
              TickerCorrelate
            </button>
          </div>
          <div className="col-7 offset-1">
            <Chart
              width={"500"}
              height={"300"}
              chartType="Line"
              loader={<div className="loading">Loading Chart...</div>}
              data={[
                [
                  { type: "date", label: "price" },
                  this.props.match.params.ticker,
                  this.props.match.params.com
                ],

                [new Date("2020-02-14"), 134, 1581.4],
                [new Date("2020-02-13"), 167, 1575.05],
                [new Date("2020-02-12"), 178, 1563.7],
                [new Date("2020-02-11"), 278, 1570.5],
                [new Date("2020-02-10"), 145, 1573.2],
                [new Date("2020-02-07"), 356, 1572.65],
                [new Date("2020-02-06"), 789, 1563.3],
                [new Date("2020-02-05"), 345, 1553.3],
                [new Date("2020-02-04"), 400, 1558.35],
                [new Date("2020-02-03"), 567, 1574.75],
                [new Date("2020-01-31"), 600, 1584.2],
                [new Date("2020-01-30"), 699, 1578.25]
              ]}
              options={{
                chart: {
                  title: `${this.props.match.params.com +
                    " Price Mapped with the Price of " +
                    this.props.match.params.ticker +
                    " at Market Close Price"}`
                },
                width: "600",
                height: "350",
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
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Commodities;
