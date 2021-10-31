import './App.css';
import './App2.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Home from './Component/Pages/Home'
import About from './Component/Pages/About'
import Books from './Component/Pages/Books'
import Contact from './Component/Pages/Contact'
import PageNotFound from './Component/Pages/PageNotFound'


function App() {
  return (
    <Router>
      <ul className="ul">
          <li className="li">
          <NavLink to="/" className="link_t"><b>BS</b> Bookshop</NavLink>
          </li>
          <li style={{float: "right"}} className="li">
          <NavLink to="/Books" className="link_t"> Books</NavLink>
          </li>
          <li style={{float: "right"}} className="li">
          <NavLink to="/Contact" className="link_t"> Contact</NavLink>
          </li>
          <li style={{float: "right"}} className="li">
          <NavLink to="/About" className="link_t">About</NavLink>
          </li>
      </ul>
      
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Books" exact component={Books} />
        <Route path="/About" exact component={About} />
        <Route path="/Contact" exact component={Contact} />
        <Route path="*" exact component={PageNotFound} />
      </Switch>

    </Router>
  );
}

export default App;
