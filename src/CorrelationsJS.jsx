import React, { Component } from 'react';

class CorrelationsJS extends Component {

    render() {
        return (
          <React.Fragment>
            <div className="container">
              <div className="row home">
                <div className="col-lg-10 offset-1">
                  <h1>Correlating with JavaScript</h1>
                </div>
              </div>
              <div className="row container" style={{ paddingTop: "20px" }}>
                <div className="col-lg-10 offset-lg-1 home">
                  <div className="row">
                    <div className="col-lg-6">
                      <p>
                        While developing this application there was an intense search into various
                        ways of determining the Pearson's coefficient with
                        relation to the correlation analysis. Although many API tools are available to the public at large such as, BigML API, the desicion was made to look into the math and try
                        to write a JavaScript function that would calculate the
                        Pearson's Coefficient of Correlation (r) and Coefficient
                        of determination (r²). In the spirit of openess and data
                        sharing TickerCorreleate decided to publish the function to share and
                        promote the use and improvement of it.
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <img
                        src="https://media.giphy.com/media/2bYewTk7K2No1NvcuK/giphy.gif"
                        height="225px"
                        alt="BrainPower"
                      />
                    </div>
                  </div>

                  <br />
                </div>
                <div className="col-lg-10 offset-lg-1">
                  <iframe
                    title="PearsonsJSFunction"
                    height="600px"
                    width="100%"
                    src="https://repl.it/@grpecunia/correlationsJS?lite=true"
                    scrolling="no"
                    frameborder="no"
                    allowtransparency="true"
                    allowfullscreen="true"
                    sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
                  ></iframe>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
    }
}

export default CorrelationsJS;