import React, { Component } from "react"
import "./App.css"

class App extends Component {
  state = {
    greenRandomCO2Values: 0,
    yellowRandomCO2Values: 0,
    redRandomCO2Values: 0,
    randomNumber: 0,
  }

  // This is a new comment test
  componentWillUnmount() {
    this.setState({
      greenRandomCO2Values: clearTimeout(this.state.greenRandomCO2Values),
      yellowRandomCO2Values: clearTimeout(this.state.yellowRandomCO2Values),
      redRandomCO2Values: clearTimeout(this.state.redRandomCO2Values),
      randomNumber: clearTimeout(this.state.randomNumber),
    })
  }
  randomCO2ValuesGenerator = (CO2thresholdValue) => {
    switch (CO2thresholdValue) {
      case "green":
        clearTimeout(this.state.greenRandomCO2Values)
        setTimeout(() => {
          this.setState({
            greenRandomCO2Values: Math.floor(Math.random() * (1000 + 1)),
          })
        }, 10000)
        return this.state.greenRandomCO2Values
      case "yellow":
        clearTimeout(this.state.yellowRandomCO2Values)
        setTimeout(() => {
          this.setState({
            yellowRandomCO2Values:
              Math.floor(Math.random() * 2000) + (1000 + 1),
          })
        }, 10000)
        return this.state.yellowRandomCO2Values
      case "red":
        clearTimeout(this.state.redRandomCO2Values)
        setTimeout(() => {
          this.setState({
            redRandomCO2Values: Math.floor(Math.random() * 5000) + (2000 + 1),
          })
        }, 10000)
        return this.state.redRandomCO2Values
      default:
        clearTimeout(this.state.randomNumber)
        setTimeout(() => {
          this.setState({
            randomNumber: Math.floor(Math.random() * 5000) + 350,
          })
        }, 10000)
    }
    return this.state.randomNumber
  }

  render() {
    return (
      <div className="App">
        <content className="App-content">
          <h1>Random CO2 values</h1>
          <div>Green: {this.randomCO2ValuesGenerator("green")}ppm</div>
          <div>Yellow : {this.randomCO2ValuesGenerator("yellow")}ppm</div>
          <div>Red : {this.randomCO2ValuesGenerator("red")}ppm</div>
          <div>Random : {this.randomCO2ValuesGenerator()}ppm</div>
        </content>
      </div>
    )
  }
}

export default App
