import React, { Component, Fragment } from 'react'
import Button from './ButtonV2'
import './index.css'



class App extends Component {

  state = {
    error: false
  }
  
  getStatistics = (telephone) => {
    console.log(telephone)
    this.setState({
      error: true
    })
  }

  render() {
    return (
    <Fragment>
      <div className="wrapper">
        <div className="search-wrapper">
          <Button callBack={this.getStatistics} error={this.state.error}/>
        </div>
        <div className="graph-wrapper">
        </div>
      </div>
    </Fragment>
    );
  }
}

export default App;
