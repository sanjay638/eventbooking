import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './components/home';
import Bus from './components/bus';
import Events from './components/events';
import Hotels from './components/hotels';
import Contact from './components/contact';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" href="#">Booking</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to={"/"} className="nav-link">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link to={"/bus"} className="nav-link">Bus</Link>
      </li>
      <li className="nav-item">
        <Link to={"/hotels"} className="nav-link">Hotels</Link>
      </li>
      <li className="nav-item">
        <Link to={"/events"} className="nav-link">Events</Link>
      </li>
      <li className="nav-item">
        <Link to={"/contact"} className="nav-link">Contact</Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/bus' element={<Bus></Bus>}></Route>
        <Route path='/hotels' element={<Hotels></Hotels>}></Route>
        <Route path='/events' element={<Events></Events>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
