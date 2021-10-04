import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import Confirmation from './components/Confirmation/Confirmation';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* header section */}
        <Header />
        {/* body part */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/confirm/:id">
            <Confirmation />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        {/* footer section */}
        <Footer />
      </Router >
    </div >
  );
}

export default App;
