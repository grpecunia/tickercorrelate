import React, { Component } from 'react';

class APIs extends Component {
    render() {
        return (
          <div className="container">
            <h2 className="home" style={{ paddingBottom: "25px" }}>
              Information about TickerCorrelate's API
            </h2>
            <div className="row contatiner">
              <div className="col-lg-5 offset-1">
                <h3>Financial Data API's</h3>
                <p>
                  The financial data provided by this application is in part
                  thanks to Fulano deTal.
                </p>
              </div>
              <div className="col-lg-5 offset-1">
                <h3>Commodity API's</h3>
                <p>
                  The Commodity data provided by this application is in part
                  thanks to Sutano diTel.
                </p>
              </div>
            </div>
          </div>
        );
    }
}

export default APIs;       