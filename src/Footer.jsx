import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
          <React.Fragment>
            <div className="footer">
              Developed by: GRP | All rights reserved ©{" "}
              {new Date().getFullYear()}
            </div>
          </React.Fragment>
        );
    }
}

export default Footer;