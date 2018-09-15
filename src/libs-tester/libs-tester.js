import React, { Component } from 'react';
import './libs-tester.css';
import BootstrapTester from './bootstrap.tester';
import OpenSansTester from './opensans-tester';
import FontawesomeTester from './fontawesome.tester';
import LodashTester from './lodash.tester';
import MomentTester from './moment.tester';
import BootstrapModalTester from './bootstrap-modal.tester';
import SweetAlert from './sweet-alert.tester';

class LibsTester extends Component {
    render() {
      return (
        <div className="libsTester">
            <div className="container">
                <div className="code">
                <BootstrapTester />
                </div>
                <div className="code">
                  <OpenSansTester />
                </div>
                <div className="code">
                  <FontawesomeTester />
                </div>
                <div className="code">
                  <LodashTester />
                </div>
                <div className="code">
                  <MomentTester />
                </div>
                <div className="code">
                <BootstrapModalTester />
                </div>
                <div className="code">
                  <SweetAlert />
                </div>

            </div>

        </div>
      );
    }
  }
  
  export default LibsTester;