import React, { Component } from 'react';
import logo from "./logob.svg";

class Guide extends Component {
    render() {
        return (
          <div className="container">
            <h1 className="home" style={{ paddingBottom: "25px" }}>
              <img
                alt="TickerCorrelate"
                src={logo}
                width="40"
                height="40"
                className="d-inline-block align-top"
              />{" "}
              TickerCorrelate Guide
            </h1>
            <div className="row">
              <div className="col-lg-5 offset-1">
                <h3>Correlations</h3>
                <p style={{ paddingBottom: "10px" }}>
                  Defined as the degree and type of relationship between any two
                  or more variables in which they vary together over a period. A
                  positive correlation exists where the high values of one
                  variable are associated with the high values of the other
                  variable(s). A ‘negative correlation’ means association of
                  high values of one with the low values of the other(s).
                  Correlations values can vary from +1 to -1. Values close to +1
                  indicate a high-degree of positive correlation, and values
                  close to -1 indicate a high degree of negative correlation.
                </p>
                <br />
                <div className="row container">
                  <div className="col-lg-10 offset-1">
                    <img
                      src="https://s3.amazonaws.com/guspecunia.com/assets/img/correlations.png"
                      alt="correlation"
                      className="info"
                    />
                  </div>
                </div>
                <br />
                <br />
                <h5>What is Pearson Coefficient? (r)</h5>
                <p style={{ paddingTop: "10px" }}>
                  In statistics, the Pearson correlation coefficient, also
                  referred to as Pearson's r, the Pearson product-moment
                  correlation coefficient (PPMCC) or the bivariate correlation,
                  is a measure of the linear correlation between two variables X
                  and Y.
                </p>
                <br />
                <br />
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <th scope="col">r Value</th>
                      <th scope="col">Strength</th>
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
                <br />
              </div>
              <div className="col-lg-5 offset-1">
                <h3>Regressions</h3>
                <p style={{ paddingBottom: "10px" }}>
                  Defined as the statistical process estimating the relationship
                  among variables. More specifically, regression analysis helps
                  us understand how a dependent variable changes when any
                  independent variable is varied. Most commonly, regression
                  analysis estimates the expectation of the dependent variable
                  given the independent variable.
                </p>
                <div className="row container">
                  <div className="col-lg-10 offset-1">
                    <img
                      src="https://s3.amazonaws.com/guspecunia.com/assets/img/regression-line.jpg"
                      alt="correlation"
                      className="info"
                    />
                  </div>
                </div>
                <br />
                <br />
                <h5>What is R-squared? (r²)</h5>
                <p style={{ paddingTop: "10px" }}>
                  R-squared is a statistical measure of how close the data are
                  to the fitted regression line. It is also known as the
                  coefficient of determination, or the coefficient of multiple
                  determinations for multiple regressions. The definition of
                  R-squared is fairly straightforward; it is the percentage of
                  the response variable variation that is explained by a linear
                  model. See the table below for an overview of the r²
                  interpretation.
                </p>
                <br />
                <br />
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <th scope="col">r² Value</th>
                      <th scope="col">Strength</th>
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
            </div>
          </div>
        );
    }
}

export default Guide;