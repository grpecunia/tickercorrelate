import React, { Component } from "react";
import Chart from "react-google-charts";
import { Modal, Button } from "react-bootstrap"
class Commodities extends Component {
  state = {
    tickerData: this.props.tickerData,
    goldData: this.props.goldData,
    copperData: this.props.copperData,
    crudeOilData: this.props.crudeOilData,
    cattleData: this.props.cattleData,
    coffeeData: this.props.coffeeData,
    evooData: this.props.evooData,
    modal: false,
    data: [
      [
        { type: "date", label: " " },
        this.props.match.params.ticker,
        this.props.match.params.com
      ],
      [new Date("2020-01-01"), 345.67, 279.0 + + Math.round(Math.random() * 333)],
      [new Date("2020-01-02"), 375.39, 308.72 + Math.round(Math.random() * 333)],
      [new Date("2020-01-04"), 423.89, 457.22 + Math.round(Math.random() * 333)],
      [new Date("2020-01-05"), 455.99, 389.32 + Math.round(Math.random() * 333)],
      [new Date("2020-01-06"), 445.67, 279.0 + Math.round(Math.random() * 333)],
      [new Date("2020-01-07"), 465.39, 398.72 + Math.round(Math.random() * 333)],
      [new Date("2020-01-08"), 423.89, 457.22 + Math.round(Math.random() * 333)],
      [new Date("2020-01-09"), 455.99, 389.32 + Math.round(Math.random() * 333)],
      [new Date("2020-01-10"), 445.67, 279.0 + Math.round(Math.random() * 333)],
      [new Date("2020-01-11"), 465.39, 398.72 + Math.round(Math.random() * 333)],
      [new Date("2020-01-12"), 523.89, 457.22 + Math.round(Math.random() * 333)],
      [new Date("2020-01-15"), 555.99, 389.32 + Math.round(Math.random() * 333)],
      [new Date("2020-01-16"), 545.67, 379.0 + Math.round(Math.random() * 333)],
      [new Date("2020-01-20"), 565.39, 298.72 + Math.round(Math.random() * 333)],
      [new Date("2020-01-21"), 523.89, 257.22 + Math.round(Math.random() * 333)],
      [new Date("2020-01-22"), 585.99, 319.32 + Math.round(Math.random() * 333)],
      [new Date("2020-01-23"), 545.67, 379.0 + Math.round(Math.random() * 333)],
      [new Date("2020-01-24"), 475.39, 408.72 + Math.round(Math.random() * 333)],
      [new Date("2020-01-25"), 523.89, 557.22 + Math.round(Math.random() * 333)],
      [new Date("2020-01-26"), 455.99, 489.32 + Math.round(Math.random() * 333)],
      [new Date("2020-01-27"), 465.39, 398.72 + Math.round(Math.random() * 333)],
      [new Date("2020-01-28"), 423.89, 357.22 + Math.round(Math.random() * 333)],
      [new Date("2020-01-29"), 555.99, 489.32 + Math.round(Math.random() * 333)],
      [new Date("2020-01-30"), 645.67, 379.0 + Math.round(Math.random() * 333)],
      [new Date("2020-02-01"), 423.89, 457.22 + Math.round(Math.random() * 333)],
      [new Date("2020-02-02"), 555.99, 489.32 + Math.round(Math.random() * 333)],
      [new Date("2020-02-03"), 445.67, 379.0 + Math.round(Math.random() * 333)],
      [new Date("2020-02-04"), 465.39, 398.72 + Math.round(Math.random() * 333)],
      [new Date("2020-02-05"), 523.89, 557.22 + Math.round(Math.random() * 333)],
      [new Date("2020-02-06"), 585.99, 619.32 + Math.round(Math.random() * 333)],
      [new Date("2020-02-07"), 665.39, 498.72 + Math.round(Math.random() * 333)],
      [new Date("2020-02-08"), 623.89, 457.22 + Math.round(Math.random() * 333)],
      [new Date("2020-02-09"), 655.99, 589.32 + Math.round(Math.random() * 333)],
      [new Date("2020-02-10"), 645.67, 479.0 + Math.round(Math.random() * 333)],
      [new Date("2020-02-11"), 665.39, 498.72 + Math.round(Math.random() * 333)],
      [new Date("2020-02-12"), 623.89, 557.22 + Math.round(Math.random() * 333)],
      [new Date("2020-02-13"), 685.99, 619.32 + Math.round(Math.random() * 333)]
    ]
  };

  setModalShow = params => {
    if (true) {
      return (
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.setModalShow(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  };

  render() {
    console.log(this.state.data);
    // console.log(this.props.goldData);
    // console.log(this.props.copperData);
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
              <input type="date" required></input>
            </div>
            <div className="row-3 home">
              <label>Correlation End Date</label>
              <input type="date" required></input>
            </div>
            <br />
            <button
              type="submit"
              //   onClick={(e) =>this.structureData()}
              className="btn-outline-success"
            >
              TickerCorrelate
            </button>
          </div>
          <div className="col-7 offset-1">
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
