import React, { Component, Fragment } from 'react'
import Button from './ButtonV2'
import './index.css'



class App extends Component {

  render() {
    return (
    <Fragment>
      <div className="wrapper">
        <div className="search-wrapper">
          <Button />
        </div>
        <div className="graph-wrapper">
        </div>
      </div>
    </Fragment>
    );
  }
}

export default App;
