import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./components/BlogDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav-section">
          <Navbar />
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
        <div className="footer-section">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
