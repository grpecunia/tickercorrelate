import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import MyChart from "./MyChart";


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
          label: "values"
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
    this.createCorrDataSet(corrDS)
    console.log("Did we made this MFer to a DataSET??? >>>", final);
    this.setState({
      data: final
    });
  };

  createCorrDataSet = (arr) => {
    console.log('start generating corr DS>>> ', arr)
    let ticketArr = [];
    let commoArr = [];
    // let r, r2;
    arr.forEach(row => {
      ticketArr.push(row[1])
      commoArr.push(row[2])
    })
    console.log(ticketArr, commoArr)
    // r = correlation.rank([ticketArr], [commoArr]);
    // r2 = correlation.determination([ticketArr], [commoArr]);
    // this.setState({
    //   r : r,
    //   r2 : r2
    // })
  }

  // This is STATE of Commodities
  state = {
    show: false,
    data: [],
    r: 0,
    r2 : 0,
  };

  // Functionality to Show the Correlation Results Modal
  showModal = () => {
    this.setState({ show: true });
  };
  // Functionality to Hide the Correlation Results Modal
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
            <button onClick={this.showModal} className="btn-outline-success">
              TickerCorrelate
            </button>
          </div>
          <div className="col-lg-7 offset-1 col-md-12 col-sm-12">
            {this.props.everythingLoaded ? (
              <MyChart data={this.state.data} {...this.props} />
            ) : (
              <div className="loading">Loading Chart...</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Commodities;
