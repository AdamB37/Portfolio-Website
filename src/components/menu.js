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
            <NavItem>Tweet Regenerator</NavItem>
            <NavItem>quicklyMD</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem><Link to="/" className="name-link">Adam Beshir</Link></NavItem>
          </Nav>
        </Navbar>
        <div>
        </div>
      </div>
    )
  }
}
