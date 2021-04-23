import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import TopNavbar from "./components/layout/TopNavbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import GithubState from "./context/Github/GithubState";
import User from "./components/users/User";
import AlertState from "./context/Alert/AlertState";
import NotFound from "./components/pages/NotFound";
function App() {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <TopNavbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
