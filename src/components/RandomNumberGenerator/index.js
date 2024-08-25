// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  generateNumber = () => {
    this.setState({
      num: Math.floor(Math.random() * 101),
    })
  }

  render() {
    const {num} = this.state
    return (
      <div className="container">
        <div className="sub-container shadow">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a Random number in the range of 0 to 100
          </p>
          <button onClick={this.generateNumber} className="btn" type="button">
            Generate
          </button>
          <p className="display-number">{num}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
