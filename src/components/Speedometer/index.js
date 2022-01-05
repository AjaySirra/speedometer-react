import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onIncrement = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onDecrement = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <div className="image-container">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="Speedometer"
          />
        </div>
        <h2 className="speed">Speed is {speed}mph</h2>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttons-container">
          <button onClick={this.onIncrement} className="increase" type="button">
            Accelerate
          </button>
          <button onClick={this.onDecrement} className="decrease" type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
