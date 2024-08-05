import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {
    searchInput: "",
    letterCount: 0,
  }

  onCountLetter = (event) => {
    const letterLength = event.target.value.length
    this.setState({searchInput: event.target.value})
    this.setState({letterCount: letterLength})
  }

  render() {
    const {searchInput,letterCount} = this.state
    return (
      <div className="app-main-container">
        <div className="container">
          <div className="calculator-container">
            <h1 className="calculator-heading">Calculate the letters you enter</h1>
            <label htmlFor="input" className="text">Enter the phrase</label>
            <input
              id="input"
              type="text"
              className="search-field"
              placeholder="Enter the phrase"
              onChange={this.onCountLetter}
              value={searchInput}
            />
            <p className="count-text">No.of letters: {letterCount}</p>
          </div>
          <div className="img-container">
            <img 
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
              alt=" letters calculator"
              className='img'
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
