import { React, Link, Image, Col, Collapse, Button } from '../../global_imports'
import Menu from './menu'
import Footer from './footer'

export default class Bio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expOpen: false,
      skillsOpen: false,
      aboutMeOpen: false,
    }
    // this.tabSelector = this.tabSelector.bind(this)
  }

  tabSelector(tab) {
    switch (tab) {
      case 'exp':
      this.setState({
        expOpen: !this.state.expOpen,
        skillsOpen: false,
        aboutMeOpen: false,
      })
        break

      case 'skills':
      this.setState({
        expOpen: false,
        skillsOpen: !this.state.skillsOpen,
        aboutMeOpen: false,
      })
        break

      case 'aboutMe':
      this.setState({
        expOpen: false,
        skillsOpen: false,
        aboutMeOpen: !this.state.aboutMeOpen,
      })
        break

      default:
        break
    }
  }
  renderExperience() {
    return (
      <div className="bio-blurb">
        <h1 onClick={() => this.tabSelector('exp')}>
          Experience
        </h1>
        <Collapse in={this.state.expOpen}>
          <p>
            FullStack Web Developer
            <br/>
            <br/>
            Current Learner @ Learners Guild in the heart of Downtown Oakland.<br/>
            Weekly code sprints!<br/>
            <br/>
          </p>
        </Collapse>
      </div>
    )
  }


  renderSkills() {
    return (
      <div className="bio-blurb">
        <h1 onClick={() => this.tabSelector('skills')}>
          Skills
        </h1>
        <Collapse in={this.state.skillsOpen} className="bio-text">
          <ul>
            <li>
              React
            </li>
            <li>
              Express
            </li>
            <li>
              ES6
            </li>
            <li>
              CSS3
            </li>
            <li>
              HTML5
            </li>
            <li>
              SQL
            </li>
            <li>
              MongoDB
            </li>
          </ul>
        </Collapse>
      </div>
    )
  }

  renderAboutMe() {
    return (
      <div className="bio-blurb">
        <h1 onClick={() => this.tabSelector('aboutMe')}>
          About Me
        </h1>
        <Collapse in={this.state.aboutMeOpen} >
          <p>
            Bay Area native with a passion for ones and zeros.
          </p>
        </Collapse>
      </div>
    )
  }

  renderProfilePic() {
    return (
      <div className="bio-profile-pic">
        <Col xs={6} md={4}>
          <Link to="/"><Image circle responsive src="../../assets/profile_pic.jpg"/></Link>
        </Col>
      </div>
    )
  }

  render () {
    return (
      <div>
        <Menu />
        <div className="bio-container">
          {this.renderProfilePic()}
          <div className="bio-tabs">
            {this.renderExperience()}
            {this.renderSkills()}
            {this.renderAboutMe()}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
