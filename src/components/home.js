import { React, Link } from '../../global_imports'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="name-logo-container">
        <Link to="/main">
          <div className="name-logo">Adam Beshir</div>
        </Link>
      </div>
    )
  }
}
