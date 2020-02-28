import React, { Component } from 'react';

class APIs extends Component {
    render() {
        return (
          <div className="container home">
            <h1 style={{ paddingBottom: "25px" }}>
              Information about TickerCorrelate's API
            </h1>
            <div className="row contatiner">
              <div className="col-lg-5 offset-1">
                <h3>Financial Data API's</h3>
                <p>
                  The financial data provided by this application is in part
                  thanks to Financial Modeling Prep API. The information for the
                  market data is pulled on a weekly frequency, this means that
                  every week's latest data point will be that of last market
                  close price on the previous end of week market close date
                  price.
                </p>
                <img
                  src="https://media-exp1.licdn.com/dms/image/C560BAQGdsb1ki1epnA/company-logo_200_200/0?e=2159024400&v=beta&t=EUMpZvqwL7dGSq_tDmAA23A0CjLpWS3d-1VnWyo5AMM"
                  alt="FMP"
                  height="200px"
                  width="200px"
                />
                <p>
                  For more information about Financial Modeling Prep visit their
                  website at:{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://financialmodelingprep.com/"
                  >
                    https://financialmodelingprep.com
                  </a>
                </p>
              </div>
              <div className="col-lg-5 offset-1">
                <h3>Commodity API's</h3>
                <p>
                  The Commodity data provided by this application is in part
                  thanks Quandl API. You'll find comprehensive guides and
                  documentation to help you start working with their open API's,
                  as well as support if you get stuck.
                </p>
                <br />
                <img
                  src="https://avatars2.githubusercontent.com/u/1659378?s=280&v=4"
                  alt="Quandl"
                  height="200px"
                  width="200px"
                />
                <br />
                <br />
                <p>
                  For more information about Quandl and their APIs visit their
                  website at:{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://quandl.com/"
                  >
                    https://quandl.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        );
    }
}

export default APIs;       