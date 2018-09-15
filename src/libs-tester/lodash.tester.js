import React, { Component } from 'react';
import * as _ from 'lodash';
class LodashTester extends Component {
    render() {
      return (
                <div>
                    <div>If you are seeing hello world all in uppercase below then lodash is loaded</div>
                    <div>{_.toUpper('hello world')}</div>
                </div>
               
      );
    }
  }
  
  export default LodashTester;