import React, { Component } from 'react';

class OpenSansTester extends Component {
    render() {
      return (
                <div>

                      Go to index.css and toggle commenting line
                        <code className="d-block">*&#123;font-family: 'Open Sans';&#125;</code>
                    You should be seeing change in fonts. Notifies, open sans is loaded.
                </div>
               
      );
    }
  }
  
  export default OpenSansTester;