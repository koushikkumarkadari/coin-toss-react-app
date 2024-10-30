import {Component} from 'react'
import './index.css'

const coinDetails = [
  {
    id: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    tossResult: 'heads',
  },
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
    tossResult: 'tails',
  },
]

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    displayImg: coinDetails[0].imageUrl,
  }

  onFlipCoin = () => {
    const randomNumber = Math.floor(Math.random() * 100)
    if (randomNumber < 50) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        displayImg: coinDetails[0].imageUrl
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        displayImg: coinDetails[1].imageUrl
      }))
    }
  }

  render() {
    const {heads, tails, displayImg} = this.state
    return (
      <div className="background-container">
        <div className="flip-coin-background-container">
          <h1 className="flip-coin-heading">Coin Toss Game</h1>
          <p className="flip-coin-para">Heads (or) Tails</p>
          <img className="coinImage" src={displayImg} alt="toss result" />
          <button className="toss-btn" type="button" onClick={this.onFlipCoin}>
            Toss Coin
          </button>
          <div className="results-container">
            <p>Total:{heads + tails}</p>
            <p>Heads:{heads}</p>
            <p>Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
