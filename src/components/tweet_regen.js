import { React, Jumbotron, Fade } from '../../global_imports'
import Menu from './menu'

export default class TweetProject extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Menu />
        <div>
          <Jumbotron>
            <div className="jumbo-container">
              <h1>
                Tweet Regenerator
              </h1>
              <div className="jumbo-kid">
                <p>
                  When a tweet gets tweeted but no one reads it has it actually been tweeted?<br/><br/>
                  This application saves your tweets and reTweets them for you for maximum exposure!<br/>
                  <h2><a href="https://github.com/AdamB37/Tweet-Regenerator" className="git-link">CLICK HERE TO SEE!</a></h2>
                </p>
              </div>
            </div>
          </Jumbotron>
        </div>
      </div>
    )
  }
}
