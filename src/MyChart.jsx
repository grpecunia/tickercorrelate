import React, { Component } from 'react';
import Chart from "react-google-charts";

class MyChart extends Component {
    render() {
        console.log(this.props)
        return (
          <div>
            <Chart
              width={"500"}
              height={"300"}
              chartType="Line"
              loader={<div className="loading">Loading Chart...</div>}
              data={this.props.data}
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
        );
    }
}

export default MyChart;