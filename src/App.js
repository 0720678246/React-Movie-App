import './App.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import LandingPage from "./Home/LandingPage";
import store from "./Store";
import {Provider} from "react-redux";
import {HashRouter as Router,Route,Switch} from "react-router-dom";
import SingleMovie from "./Home/SingleMovie";
import { createBrowserHistory } from "history";

const hist = createBrowserHistory();

function App() {
  return (
      <Provider store={store}>
        <Router history={hist}>
    <div className="app">
      <Navbar/>
      <Switch>
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/movie/:id" component={SingleMovie}/>
      </Switch>
      <Footer/>

    </div>
        </Router>
      </Provider>
  );
}

export default App;
