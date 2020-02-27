import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import MyChart from "./MyChart";
import Chart from "react-google-charts";


class Commodities extends Component {
  componentDidMount() {
    // Axios GET for Ticker Historical Prices @ Market Close Info
    axios
      .get(
        `https://financialmodelingprep.com/api/v3/historical-price-full/${this.props.match.params.ticker}?serietype=line`
      )
      .then(res => {
        // console.log(res.data.historical);
        this.setState({
          tickerData: res.data.historical
        });
        this.props.pullToParent(res.data.historical);
        this.structureData(this.props.match.params.com, res.data.historical);
        console.log(res.data.historical);
      });
  }

  // Functionality that structures the dataSet needed to populate the ticker/commodity line graph
  structureData = (dataSet, historicalClosePrices) => {
    console.log(this.props.goldData);
    console.log("Setting up dataSet...", dataSet, historicalClosePrices);
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
    let corrDS = [];
    let final = [
      [
        {
          type: "date",
          label: "Timeline Scoping Tool"
        },
        this.props.match.params.ticker,
        this.props.match.params.com
      ]
    ];

    historicalClosePrices.map(
      // eslint-disable-next-line
      eachTick => {
        // console.log(
        //   "<< compiling the two DS >>",
        //   Object.keys(dataSet).includes(eachTick.date),
        //   dataSet,
        //   eachTick
        // );
        //if (Object.keys(dataSet).includes(eachTick.date) ) { // &&  Object.keys(dataSet) !== undefined)
        // eslint-disable-next-line
        dataSet.map(eachData => {
          if (eachData.includes(eachTick.date)) {
            final.push([new Date(eachTick.date), eachTick.close, eachData[1]]);
            corrDS.push([new Date(eachTick.date), eachTick.close, eachData[1]]);
          }
        });

        // console.log('Are we looping in here??');
        //}
        // return final;
      }
    );
    this.createCorrDataSet(corrDS);
    this.setScatterPlotData(corrDS);
    console.log("Did we made this MFer to a DataSET??? >>>", final);
    this.setState({
      data: final,
      corrDS
    });
  };

  // Functionality to create the Correlation Coefficient dataSet needed to run the Pearson Correlation
  createCorrDataSet = arr => {
    console.log("start generating corr DS>>> ", arr);
    let ticketArr = [];
    let commoArr = [];
    // let r, r2;
    arr.forEach(row => {
      ticketArr.push(row[1]);
      commoArr.push(row[2]);
    });
    console.log(ticketArr, commoArr);
    let r = this.getPearsonCorrelation(ticketArr, commoArr);
    let rSquared = r * r;
    console.log(r, rSquared);
    this.setState({
      r,
      rSquared
    });
  };

  setScatterPlotData = arr => {
    let scatterArr = [
      [`${this.props.match.params.ticker}`, `${this.props.match.params.ticker}`]
    ];
    arr.forEach(row => {
      scatterArr.push([row[1], row[2]]);
    });
    console.log(scatterArr);
    this.setState({
      dataSP: scatterArr
    });
  };

  // This is STATE of Commodities
  state = {
    show: false,
    data: [],
    r: 0,
    rSquared: 0,
    dataSP: [],
    corrDS : []
  };

  getPearsonCorrelation = (x, y) => {
    let shortestArrayLength = 0;

    if (x.length === y.length) {
      shortestArrayLength = x.length;
    } else if (x.length > y.length) {
      shortestArrayLength = y.length;
      console.error(
        "x has more items in it, the last " +
          (x.length - shortestArrayLength) +
          " item(s) will be ignored"
      );
    } else {
      shortestArrayLength = x.length;
      console.error(
        "y has more items in it, the last " +
          (y.length - shortestArrayLength) +
          " item(s) will be ignored"
      );
    }

    let xy = [];
    let x2 = [];
    let y2 = [];

    for (let i = 0; i < shortestArrayLength; i++) {
      xy.push(x[i] * y[i]);
      x2.push(x[i] * x[i]);
      y2.push(y[i] * y[i]);
    }

    let sum_x = 0;
    let sum_y = 0;
    let sum_xy = 0;
    let sum_x2 = 0;
    let sum_y2 = 0;

    for (let i = 0; i < shortestArrayLength; i++) {
      sum_x += x[i];
      sum_y += y[i];
      sum_xy += xy[i];
      sum_x2 += x2[i];
      sum_y2 += y2[i];
    }

    var step1 = shortestArrayLength * sum_xy - sum_x * sum_y;
    var step2 = shortestArrayLength * sum_x2 - sum_x * sum_x;
    var step3 = shortestArrayLength * sum_y2 - sum_y * sum_y;
    var step4 = Math.sqrt(step2 * step3);
    var answer = step1 / step4;

    return answer;
  };

  // Functionality to Show the Correlation Results Modal
  showModal = () => {
    this.setState({ show: true });
  };
  // Functionality to Hide the Correlation Results Modal
  hideModal = () => {
    this.setState({ show: false });
  };

  handleStartDateChange = (e) => {
    console.log(e.target.name ,  e.target.value);
  };

  handleEndDateChange = (e) => {
    console.log(e.target.name, e.target.value);
  };

  sliceCorrDS = (arr, startDate, endDate) => {
    console.log('consoling myself....')
    arr.slice(arr.findIndex(row => row.includes(startDate)), 
              arr.findIndex(row => row.includes(endDate)))
  }

  render() {
    console.log(this.state.data);
    // console.log(this.state.data);
    // console.log(this.props);
    return (
      <div className="container home">
        <h1>
          Correlation Analysis for {this.props.match.params.com}
          {" & "}
          {this.props.match.params.ticker}{" "}
        </h1>
        <br />
        <br />
        <div className="container row">
          <div className="col-lg-7 col-md-12 col-sm-12">
            {this.props.everythingLoaded ? (
              <MyChart
                data={this.state.data}
                everythingLoaded={this.state.everythingLoaded}
                tickerData={this.props.tickerData}
                {...this.props}
              />
            ) : (
              <div className="loading">Loading Chart...</div>
            )}
          </div>
          <div
            className="col-lg-4 offset-lg-1 col-md-12 col-sm-12"
            style={{ paddingBottom: "40px" }}
          >
            <div className="row-3 home">
              <label>Correlation Start Date</label>
              <input
                type="date"
                name="startDate"
                required
                onChange={e => this.handleStartDateChange(e)}
              ></input>
            </div>
            <div className="row-3 home">
              <label>Correlation End Date</label>
              <input
                type="date"
                name="endDate"
                required
                onChange={e => this.handleEndDateChange(e)}
                // onSubmit={e => this.sliceCorrDS(e)}
              />
            </div>
            <br />
            <Modal
              size="xl"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              height="50%"
              show={this.state.show}
            >
              <Modal.Header>
                <Modal.Title
                  id="contained-modal-title-vcenter"
                  style={{ textAlign: "center" }}
                >
                  <b>
                    <h3 className="home">
                      <span role="img" aria-label="Graph">
                        📊
                      </span>{" "}
                      Pearson Correlation Results for{" "}
                      {this.props.match.params.ticker}
                      {" + "}
                      {this.props.match.params.com}
                    </h3>
                  </b>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="row" style={{ paddingLeft: "20px" }}>
                  <div className="col-lg-4 col-sm-10 offset-1">
                    <h4 className="home">
                      {"r = "}
                      {this.state.r.toFixed(3)}
                    </h4>
                    <table className="table table-sm table-striped">
                      <tbody>
                        <tr>
                          <th scope="col">r Value</th>
                          <th scope="col">Correlation Strength</th>
                        </tr>
                        <tr className="table-success">
                          <td>{"±0.75 to ±1"}</td>
                          <td>Very Strong</td>
                        </tr>
                        <tr className="table-warning">
                          <td>{"±0.5 to ±0.75"}</td>
                          <td>Moderate</td>
                        </tr>
                        <tr className="table-danger">
                          <td>{"±0.25 to ±0.5"}</td>
                          <td>Weak</td>
                        </tr>
                        <tr className="table-info">
                          <td>{"0 to ±0.25"}</td>
                          <td>Negligible</td>
                        </tr>
                      </tbody>
                    </table>
                    <br />
                    <h4 className="home">
                      {"r² = "}
                      {this.state.rSquared.toFixed(3)}
                    </h4>
                    <table className="table table-sm table-striped">
                      <tbody>
                        <tr>
                          <th scope="col">r² Value</th>
                          <th scope="col">Determination Strength</th>
                        </tr>
                        <tr className="table-success">
                          <td>{"0.7 < r² < 1.0"}</td>
                          <td>Strong</td>
                        </tr>
                        <tr className="table-warning">
                          <td>{"0.4 < r² < 0.7"}</td>
                          <td>Medium</td>
                        </tr>
                        <tr className="table-danger">
                          <td>{"0.2 < r² < 0.4"}</td>
                          <td>Small</td>
                        </tr>
                        <tr className="table-info">
                          <td>{"r² < 0.2"}</td>
                          <td>None</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-lg-6 col-sm-10 offset-1">
                    <Chart
                      width={"100%"}
                      height={"100%"}
                      chartType="ScatterChart"
                      loader={
                        <div className="loading">
                          Loading ScaterPlot Chart...
                        </div>
                      }
                      data={this.state.dataSP}
                      options={{
                        title: `${this.props.match.params.com} vs. ${this.props.match.params.ticker} ScatterPlot Graph`,
                        hAxis: {
                          title: `${this.props.match.params.com}`,
                          minValue: 0,
                          maxValue: 100
                        },
                        vAxis: {
                          title: `${this.props.match.params.ticker}`,
                          minValue: 0,
                          maxValue: 100
                        },
                        legend: "none"
                      }}
                      rootProps={{ "data-testid": "1" }}
                    />
                    <br />
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.hideModal}>Close</Button>
              </Modal.Footer>
            </Modal>
            <button
              type="submit"
              onClick={this.showModal}
              onSubmit={this.sliceCorrDS(this.state.corrDS)}
              className="btn-outline-success"
            >
              TickerCorrelate
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Commodities;
