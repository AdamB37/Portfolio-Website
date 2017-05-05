import { React, Jumbotron } from '../../global_imports'
import Menu from './menu'

export default class OSS extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Menu />
        <div>
          <Jumbotron>
            <div className="jumbo-container">
              <h1>
                Open Source Contributions
              </h1>
              <div className="jumbo-kid">
                <ul>
                  <li>
                    <h3><a href="https://github.com/AdamB37/quicklymd" className="git-link">quicklyMD</a></h3>
                  </li>
                </ul>
              </div>
            </div>
          </Jumbotron>
        </div>
      </div>
    )
  }
}
