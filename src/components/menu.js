import {
   React,
   Nav,
   NavItem,
   Navbar,
   NavDropdown,
   Link,
 } from '../../global_imports'

export default class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect fluid fixedTop className="navbar">
          <Navbar.Header>
            <Navbar.Brand>Projects</Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem><Link to="/tweet" className="project-link">Tweet Regenerator</Link></NavItem>
            <NavItem><Link to="/calc" className="project-link">Mac Calculator</Link></NavItem>
            <NavItem><Link to="/oss" className="project-link">OSS Contributions</Link></NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem><Link to="/main" className="name-link">Adam Beshir</Link></NavItem>
          </Nav>
        </Navbar>
        <div>
        </div>
      </div>
    )
  }
}
