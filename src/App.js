import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Myhome from "./Pages/home";
import Myabout from "./Pages/about";
import Myserveces from "./Pages/services";
import Myblog from "./Pages/blog";
import Mycontact from "./Pages/contact";
import Myportfolio from "./Pages/portfolio";

function App() {
  return (
    <HashRouter>
        <>
            <nav className="navbar navbar-expand-sm navbar-dark sticky-top navbarone">
                <div className="container-fluid">
                <a clasName="navbar-brand" href="javascript:void(0)"><h3 className="text-white">JAY TRAPASIYA</h3></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item ps-4">
                        <Link className="nav-link active" to="/home">Home</Link>
                        </li>
                        <li className="nav-item ps-4">
                          <Link className="nav-link active" to="/about">About</Link>
                        </li>
                        <li className="nav-item ps-4">
                          <Link className="nav-link active" to="/services">Services</Link>
                        </li>
                        <li className="nav-item ps-4">
                          <Link className="nav-link active" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item ps-4">
                          <Link className="nav-link active" to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item ps-4">
                          <Link className="nav-link active" to="/contact">Contact</Link>
                        </li>
                       
                    </ul>

                    </div>
                </div>
            </nav>
        
        </>
        <Routes>
          <Route exact path="/home" element={ <Myhome/> } />
          <Route exact path="/about" element={ <Myabout/> } />
          <Route exact path="/services" element={ <Myserveces/> } />
          <Route exact path="/blog" element={ <Myblog/> } />
          <Route exact path="/portfolio" element={ <Myportfolio/> } />
          <Route exact path="/contact" element={ <Mycontact/> } />
        </Routes>
    </HashRouter>
  );
}

export default App;
