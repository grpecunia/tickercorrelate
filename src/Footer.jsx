import React, { Component } from 'react';
import logo from "./logo.svg";
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
          <React.Fragment>
            <div className="footer footer-copyright text-center py-3 fixed-bottom">
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
              <Link style={{ color: "white" }} to="/">
                <img alt='TickerCorrelate' Linklt="TickerCorrelLinkte" src={logo} width="20" height="20" />{" "}
                TickerCorrelate
              </Link>{" "}
              | All rights reserved © {new Date().getFullYear()}
            </div>
          </React.Fragment>
        );
    }
}

export default Footer;