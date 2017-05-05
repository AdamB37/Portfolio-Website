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

  // tabSelector(tab) {
  //   switch (tab) {
  //     case 'exp':
  //     this.setState({
  //       expOpen: true,
  //       skillsOpen: false,
  //       aboutMeOpen: false,
  //     })
  //       break
  //
  //     case 'skills':
  //     this.setState({
  //       expOpen: false,
  //       skillsOpen: true,
  //       aboutMeOpen: false,
  //     })
  //       break
  //
  //     case 'aboutMe':
  //     this.setState({
  //       expOpen: false,
  //       skillsOpen: false,
  //       aboutMeOpen: true,
  //     })
  //       break
  //
  //     default:
  //       break
  //   }
  // }
  renderExperience() {
    return (
      <div className="bio-blurb">
        <h1 onClick={() => this.setState({expOpen: !this.state.expOpen})}>
          Experience
        </h1>
        <Collapse in={this.state.expOpen}>
          <p>
            FullStack Web Developer
            <br/>
            <br/>
            Current Learner @ Learners Guild in the heart of Downtown Oakland.<br/>
            I say Hella.<br/>
            Batman goes stuey.<br/>
          </p>
        </Collapse>
      </div>
    )
  }

  renderSkills() {
    return (
      <div className="bio-blurb">
        <h1 onClick={() => this.setState({skillsOpen: !this.state.skillsOpen})}>
          Skills
        </h1>
        <Collapse in={this.state.skillsOpen}>
          <p>
            FullStack Web Developer
            <br/>
            <br/>
            Current Learner @ Learners Guild in the heart of Downtown Oakland.<br/>
            I say Hella.<br/>
            Batman goes stuey.<br/>
          </p>
        </Collapse>
      </div>
    )
  }

  renderAboutMe() {
    return (
      <div className="bio-blurb">
        <h1 onClick={() => this.setState({aboutMeOpen: !this.state.aboutMeOpen})}>
          About Me
        </h1>
        <Collapse in={this.state.aboutMeOpen}>
          <p>
            FullStack Web Developer
            <br/>
            <br/>
            Current Learner @ Learners Guild in the heart of Downtown Oakland.<br/>
            I say Hella.<br/>
            Batman goes stuey.<br/>
          </p>
        </Collapse>
      </div>
    )
  }

  renderProfilePic() {
    return (
      <div className="bio-profile-pic">
        <Col xs={6} md={4}>
          <Image circle responsive src="../../assets/profile_pic.jpg"/>
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
