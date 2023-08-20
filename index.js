import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg">
        <h1>
          The Button Has been clicked <span className="num">{count}</span> times
        </h1>
        <p className="description">Click the button to increase the count</p>
        <button className="button" onClick={this.onIncrement}>
          Click me
        </button>
      </div>
    )
  }
}

export default ClickCounter
