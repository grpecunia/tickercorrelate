import React, { Component } from 'react';
import Chart from "react-google-charts";

class MyChart extends Component {
    render() {
        console.log(this.props)
        return (
          <div>
            <Chart
              width={"100%"}
              height={"100%"}
              chartType="Line"
              loader={<div className="loading">Loading Chart...</div>}
              data={this.props.data}
              options={{
                // colors: ["#e7711b", "#f1ca3a"],
                chart: {
                  title: `${this.props.match.params.com +
                    " Price Mapped with the Price of " +
                    this.props.match.params.ticker +
                    " at Market Close Price"}`
                },
                width: "100%",
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
              chartPackages={["corechart", "controls"]}
              controls={[
                {
                  controlType: "ChartRangeFilter",
                  options: {
                    filterColumnIndex: 0,
                    ui: {
                      chartType: "LineChart",
                      chartOptions: {
                        chartArea: { width: "75%", height: "45%"},
                        hAxis: { baselineColor: "none" }
                      }
                    }
                  },
                  controlPosition: "bottom",
                  controlWrapperParams: {
                    state: {
                      range: {
                        start: new Date(1970, 0, 0),
                        end: new Date(2050, 0, 0)
                      }
                    }
                  }
                }
              ]}
            />
          </div>
        );
    }
}

export default MyChart;