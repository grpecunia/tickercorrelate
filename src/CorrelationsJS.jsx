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
                <div className="col-lg-5 offset-lg-1 home">
                  <p>
                    While developing this application we looked into various
                    ways of determining the Pearson's coefficient with relation
                    to our analysis. Although we came close to use the BigML
                    API, we decided to look into the math and try to write a
                    JavaScript function that would calculate the Pearson's Coefficient of
                    Correlation (r) and Coefficient of determination (r²).{" "}
                  </p>
                  <img
                    src="https://media.giphy.com/media/2bYewTk7K2No1NvcuK/giphy.gif"
                    height="100px"
                    alt="BrainPower"
                  />

                  <p style={{ paddingTop: "15px" }}>
                    In the spirit of openess and data sharing we decided to
                    publish the function to share and promote the use and
                    improvement of it.
                  </p>
                  <br />
                </div>
                <div className="col-lg-5 offset-lg-1">
                  <iframe
                    title="PearsonsJSFunction"
                    height="400px"
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