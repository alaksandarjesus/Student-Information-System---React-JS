import React, { Component } from 'react';


class StudentCreateUpdate extends Component {
  constructor(){
    super();
    this.state = {id:null}
  }
  componentDidMount () {

    const { id } = this.props.match.params;
    this.setState({id:id})

    
  }
  render() {
    return (
      <div className="App">
        I am from student for create and update {this.state.id}
      </div>
    );
  }
}

export default StudentCreateUpdate;
