import React, { Component } from 'react';
import BootstrapDemoModal from './bootstrap-demo-modal';

class BootstrapModalTester extends Component {
    render() {
      return (
                <div>

                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>
<BootstrapDemoModal />
                </div>
               
      );
    }
  }
  
  export default BootstrapModalTester;