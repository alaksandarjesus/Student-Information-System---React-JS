import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/students">Students</Link></li>
          <li><Link to="/student-create">Create Student</Link></li>
          <li><Link to="/students/123456">Update Student</Link></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
