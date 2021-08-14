import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Individual from './components/Individual'
import PostPagination from './components/PostPagination';

function App() {
  return(
    <Router>
      <div className="container">
        <Switch>
          <Route exact path='/'>
            <PostPagination />
          </Route>
          <Route path={`/character/:id`}>
            <Individual />
          </Route>
          <Route path={`/page-number/:page`}>
            <PostPagination />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
