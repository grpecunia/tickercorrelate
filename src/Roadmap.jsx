import React, { Component } from 'react';
import logo from "./logob.svg";


class Roadmap extends Component {
    render() {
        return (
          <div className="cointainer home" style={{ paddingBottom: "50px" }}>
            <h1 style={{ paddingBottom: "25px" }}>
              <img
                alt="TickerCorrelate"
                src={logo}
                width="40"
                height="40"
                className="d-inline-block align-top"
              />{" "}
              TickerCorrelate Roadmap
            </h1>
            <div className="container row" style={{ textAlign: "left" }}>
              <div className="col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1">
                <h3>Where we are?</h3>
                <p>
                  We deployed the first version of TickerCorrelate in February
                  28th, 2020. This initial version includes six avialable
                  commodities and ticker market close prices are fetched on a
                  weekly basis.
                </p>
                <br />
                <h3>Where we are heading?</h3>
                <p>
                  We want to expand the amounts of commodities that are fetch by
                  the current Quandl API. We also are looking into ways of
                  improving the app query velocity. Due to the amount of
                  information house in each query the application can sometimes
                  run a bit slow (especially when trying to slice the scope of
                  the correlation analysis by date range).
                </p>
                <br />
                <h3>Want to contribute?</h3>
                <p>
                  TickerCorrelate is a open/public repository that can be forked
                  from{" "}
                  <a
                    href="https://github.com/grpecunia/tickercorrelate"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                  . If you are interested in collaborating with the team please
                  send an email to{" "}
                  <a href="mailto:tickercorrelate@gmail.com">
                    tickercorrelate@gmail.com
                  </a>{" "}
                  and we will give you collaborative access to the repository.
                  Pick and fix a bug or add a new feature. Let us all take this
                  together to the next level!
                </p>
              </div>
            </div>
          </div>
        );
    }
}

export default Roadmap;