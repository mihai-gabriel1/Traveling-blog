import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="nav-section">
        <Navbar />
      </div>
      <div className="content">
        <Home />
      </div>
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
}

export default App;
