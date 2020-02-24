import React, { Component } from "react";
import Chart from "react-google-charts";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

class Commodities extends Component {
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
        this.structureData(this.props.match.params.com, res.data.historical);
        console.log(res.data.historical);
      });
  }

  // grabCommodity = (commodity) => {
  //   this.setState({
  //     dataSet : commodity
  //   })
  // }

  structureData = (dataSet, historicalClosePrices) => {
    console.log(this.props.match.params.com, 'dsdsadsadasdsa', this.props.goldData);
    console.log("Setting up dataSet...");
    switch (dataSet) {
      case "Gold":
        dataSet = this.props.goldData;

        break;

      case "Copper":
        dataSet = this.props.copperData;

        break;

      case "Crude Oil":
        dataSet = this.props.crudeOilData;

        break;

      case "Cattle":
        dataSet = this.props.cattleData;

        break;

      case "Coffee":
        dataSet = this.props.coffeeData;

        break;

      case "Olive Oil":
        dataSet = this.props.evooData;

        break;

      default:
        console.log("Error... @ dataSet Switch");
        break;
    }
    console.log("Passed the Switch.....", dataSet);
    console.log(this.props);
    console.log("Picking up my Ticker Prices >>", historicalClosePrices);
    console.log("Picking up my Commodity DS>>> ", dataSet);
    let final = [
      [
        {
          type: "date",
          label: "values"
        },
        this.props.match.params.ticker,
        this.props.match.params.com
      ]
    ];
    historicalClosePrices.map(
      // eslint-disable-next-line
      eachTick => {
        console.log("<< compiling the two DS >>");
        if (eachTick.date.includes(Object.keys(dataSet))) { // &&  Object.keys(dataSet) !== undefined)
          console.log(dataSet)
          final.push([
            new Date(eachTick.date),
            eachTick.close,
            dataSet
          ]);
          // console.log('Are we looping in here??');
        }
        // return final;
      }
    );
    console.log('Did we made this MFer to a DataSET??? >>>', final)
    this.setState({
      data: final
    });
  };

  state = {
    show: false,
    // data: [
    //   [
    //     { type: "date", label: "value" },
    //     this.props.match.params.ticker,
    //     this.props.match.params.com
    //   ],
    //   [
    //     new Date("2020-01-01"),
    //     345.67,
    //     279.0 + +Math.round(Math.random() * 333)
    //   ],
    //   [
    //     new Date("2020-01-02"),
    //     375.39,
    //     308.72 + Math.round(Math.random() * 333)
    //   ],
    //   [
    //     new Date("2020-01-04"),
    //     423.89,
    //     457.22 + Math.round(Math.random() * 333)
    //   ],
    //   [
    //     new Date("2020-01-05"),
    //     455.99,
    //     389.32 + Math.round(Math.random() * 333)
    //   ],
    //   [new Date("2020-01-06"), 445.67, 279.0 + Math.round(Math.random() * 333)],
    //   [
    //     new Date("2020-01-07"),
    //     465.39,
    //     398.72 + Math.round(Math.random() * 333)
    //   ],
    //   [
    //     new Date("2020-01-08"),
    //     423.89,
    //     457.22 + Math.round(Math.random() * 333)
    //   ],
    //   [
    //     new Date("2020-01-09"),
    //     455.99,
    //     389.32 + Math.round(Math.random() * 333)
    //   ],
    //   [new Date("2020-01-10"), 445.67, 279.0 + Math.round(Math.random() * 333)],
    //   [
    //     new Date("2020-01-11"),
    //     465.39,
    //     398.72 + Math.round(Math.random() * 333)
    //   ],
    //   [
    //     new Date("2020-01-12"),
    //     523.89,
    //     457.22 + Math.round(Math.random() * 333)
    //   ],
    //   [
    //     new Date("2020-01-15"),
    //     555.99,
    //     389.32 + Math.round(Math.random() * 333)
    //   ],
    //   [new Date("2020-01-16"), 545.67, 379.0 + Math.round(Math.random() * 333)],
    //   [
    //     new Date("2020-01-20"),
    //     565.39,
    //     298.72 + Math.round(Math.random() * 333)
    //   ],
    //   [
    //     new Date("2020-01-21"),
    //     523.89,
    //     257.22 + Math.round(Math.random() * 333)
    //   ],
    //   [
    //     new Date("2020-01-22"),
    //     585.99,
    //     319.32 + Math.round(Math.random() * 333)
    //   ],
    //   [new Date("2020-01-23"), 545.67, 379.0 + Math.round(Math.random() * 333)],
    //   [
    //     new Date("2020-01-24"),
    //     475.39,
    //     408.72 + Math.round(Math.random() * 333)
    //   ],
    //   [
    //     new Date("2020-01-25"),
    //     523.89,
    //     557.22 + Math.round(Math.random() * 333)
    //   ],
    //   [
    //     new Date("2020-01-26"),
    //     455.99,
    //     489.32 + Math.round(Math.random() * 333)
    //   ],
    //   [
    //     new Date("2020-01-27"),
    //     465.39,
    //     398.72 + Math.round(Math.random() * 333)
    //   ],
    //   [
    //     new Date("2020-01-28"),
    //     423.89,
    //     357.22 + Math.round(Math.random() * 333)
    //   ],
    //   [
    //     new Date("2020-01-29"),
    //     555.99,
    //     489.32 + Math.round(Math.random() * 333)
    //   ],
    //   [new Date("2020-01-30"), 645.67, 379.0 + Math.round(Math.random() * 333)],
    //   [
    //     new Date("2020-02-01"),
    //     423.89,
    //     457.22 + Math.round(Math.random() * 333)
    //   ],
    //   [
    //     new Date("2020-02-02"),
    //     555.99,
    //     489.32 + Math.round(Math.random() * 333)
    //   ],
    //   [new Date("2020-02-03"), 445.67, 379.0 + Math.round(Math.random() * 333)],
    //   [
    //     new Date("2020-02-04"),
    //     465.39,
    //     398.72 + Math.round(Math.random() * 333)
    //   ],
    //   [
    //     new Date("2020-02-05"),
    //     523.89,
    //     557.22 + Math.round(Math.random() * 333)
    //   ],
    //   [
    //     new Date("2020-02-06"),
    //     585.99,
    //     619.32 + Math.round(Math.random() * 333)
    //   ],
    //   [
    //     new Date("2020-02-07"),
    //     665.39,
    //     498.72 + Math.round(Math.random() * 333)
    //   ],
    //   [
    //     new Date("2020-02-08"),
    //     623.89,
    //     457.22 + Math.round(Math.random() * 333)
    //   ],
    //   [
    //     new Date("2020-02-09"),
    //     655.99,
    //     589.32 + Math.round(Math.random() * 333)
    //   ],
    //   [new Date("2020-02-10"), 645.67, 479.0 + Math.round(Math.random() * 333)],
    //   [
    //     new Date("2020-02-11"),
    //     665.39,
    //     498.72 + Math.round(Math.random() * 333)
    //   ],
    //   [
    //     new Date("2020-02-12"),
    //     623.89,
    //     557.22 + Math.round(Math.random() * 333)
    //   ],
    //   [new Date("2020-02-13"), 685.99, 619.32 + Math.round(Math.random() * 333)]
    // ]
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    console.log(this.state.data);
    // console.log(this.state.data);
    // console.log(this.props);
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
          <div
            className="col-lg-3 offset-1 col-md-12 col-sm-12"
            style={{ paddingBottom: "40px" }}
          >
            <div className="row-3 home">
              <label>Correlation Start Date</label>
              <input type="date" required></input>
            </div>
            <div className="row-3 home">
              <label>Correlation End Date</label>
              <input type="date" required></input>
            </div>
            <br />
            <Modal
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              show={this.state.show}
            >
              <Modal.Header>
                <Modal.Title
                  id="contained-modal-title-vcenter"
                  style={{ textAlign: "center" }}
                >
                  <b>
                    {" "}
                    Correlation Results [ {this.props.match.params.ticker}
                    {" & "}
                    {this.props.match.params.com} ]
                  </b>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>Centered Modal</h4>
                <div className="row">
                  <div className="col-6">
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </div>
                  <div className="col-6">
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.hideModal}>Close</Button>
              </Modal.Footer>
            </Modal>
            <button
              onClick={this.showModal}
              className="btn-outline-success"
            >
              TickerCorrelate
            </button>
          </div>
          <div className="col-lg-7 offset-1 col-md-12 col-sm-12">
            <Chart
              width={"500"}
              height={"300"}
              chartType="Line"
              loader={<div className="loading">Loading Chart...</div>}
              data={this.state.data}
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
