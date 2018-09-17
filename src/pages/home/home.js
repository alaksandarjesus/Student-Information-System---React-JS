import React, { Component } from 'react';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100 first-slide" src="" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 second-slide" src="" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 third-slide" src="" alt="Third slide" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <p className="">I am from home page</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
