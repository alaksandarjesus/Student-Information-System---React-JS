import React, { Component } from 'react';
import * as swal from 'sweetalert';

class SweetAlert extends Component {
    constructor(){
        super();
        this.onBtnClick = this.onBtnClick.bind(this);
    }
    onBtnClick(){
        swal("Good job!", "You clicked the button!", "success");
    }
    render() {
      return (
                <div>
                    <button className="btn btn-primary" onClick={this.onBtnClick}>Click here to test sweet alert</button>
                    
                </div>
               
      );
    }
  }
  
  export default SweetAlert;