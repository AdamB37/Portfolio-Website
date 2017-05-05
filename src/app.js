import {
  React,
  createBrowserHistory,
  Router,
  Route,
  Switch,
  HashRouter,
} from '../global_imports'
import Menu from './components/menu'
import Home from './components/home'
import Bio from './components/bio'

// const history = createBrowserHistory()
export default class App extends React.Component {

  render() {
    return (
      <div className="default-container">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/main" component={Bio} />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}
