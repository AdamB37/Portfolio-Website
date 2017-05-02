import {
  React,
  render,
  Link,
  Button,
} from './global_imports'


const App = () => (
  <div>
    <Button bsSize="large" bsStyle="primary">Finally</Button>
  </div>
)

render (
  <App/>,
  document.getElementById("mount")
)
