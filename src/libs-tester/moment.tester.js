import React, { Component } from 'react';
import * as moment from 'moment';

class MomentTester extends Component {
    render() {
      return (
                <div>
                    <div>If you are seeing your system time, moment is loaded</div>
                    <div>{moment().format()}</div>
                </div>
               
      );
    }
  }
  
  export default MomentTester;