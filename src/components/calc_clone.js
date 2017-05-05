import { React, Jumbotron } from '../../global_imports'
import Menu from './menu'

export default class CalcProject extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div>
          <Menu />
          <div>
            <Jumbotron>
              <div className="jumbo-container">
                <h1>
                  Mac Calculator Clone
                </h1>
                <div className="jumbo-kid">
                  <p>
                    The native Mac OSX Calculator has been masterfully cloned. You can't tell the difference!<br/>
                    <h2><a href="https://github.com/AdamB37/mac-calculator-clone" className="git-link">CLICK HERE TO SEE!</a></h2>
                  </p>
                </div>
              </div>
            </Jumbotron>
          </div>
        </div>
      </div>
    )
  }
}
