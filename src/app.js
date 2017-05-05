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
import TweetProject from './components/tweet_regen'
import CalcProject from './components/calc_clone'
import OSS from './components/oss'

// const history = createBrowserHistory()
export default class App extends React.Component {

  render() {
    return (
      <div className="default-container">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/main" component={Bio} />
            <Route exact path="/tweet" component={TweetProject} />
            <Route exact path="/calc" component={CalcProject} />
            <Route exact path="/oss" component={OSS} />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}
