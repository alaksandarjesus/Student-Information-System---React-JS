import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
  render() {
    return (
      <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse ml-auto" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
      <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item"><Link to="/students" className="nav-link">Students</Link></li>
    </ul>
  </div>
</nav>
  
      </div>
    );
  }
}

export default Navbar;
