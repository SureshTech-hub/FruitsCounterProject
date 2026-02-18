// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  clickOnMango = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  clickOnBanana = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    const {count1, count2} = this.state
    return (
      <div className="outer-container">
        <div className="inner-container">
          <div>
            <h1 className="heading-text">
              Bob ate <span className="count"> {count1}</span> mangoes
              <span className="count"> {count2}</span> bananas
            </h1>
            <div className="images-container">
              <div className="items-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                  alt="mango"
                  className="images"
                />
                <button
                  type="button"
                  className="button"
                  onClick={this.clickOnMango}
                >
                  Eat Mango
                </button>
              </div>
              <div className="items-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                  alt="banana"
                  className="images"
                />
                <button
                  type="button"
                  className="button"
                  onClick={this.clickOnBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
