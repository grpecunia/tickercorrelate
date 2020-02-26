import React, { Component } from 'react';
import logo from "./logo.svg";

class Footer extends Component {
    render() {
        return (
          <React.Fragment>
            <div className="footer fixed-bottom">
              Developed by:{" "}
              <a
                style={{ color: "white" }}
                href="https://riverapecunia.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                GRP
              </a>{" "}
              |{" "}
              <a style={{ color: "white" }} href="/">
                <img alt="TickerCorrelate" src={logo} width="20" height="20" />{" "}
                TickerCorrelate
              </a>{" "}
              | All rights reserved © {new Date().getFullYear()}
            </div>
          </React.Fragment>
        );
    }
}

export default Footer;