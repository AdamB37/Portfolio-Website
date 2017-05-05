import { React, Link, Fade } from '../../global_imports'
import Bat from './bat'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bats: false
    }
  }

  render() {
    console.log(this.state.bats)
    return (
      <div className="name-logo-container">
        <Fade in={this.state.bats}>
          <div>
            <Bat />
          </div>
        </Fade>

        <Link
          to="/main" className="name-logo"
          onMouseEnter={() => this.setState({bats: true})}
          onMouseLeave={() => this.setState({bats: false})}
        >
          Adam Beshir
        </Link>

        <Fade in={this.state.bats}>
          <div>
            <Bat />
          </div>
        </Fade>
      </div>
    )
  }
}
