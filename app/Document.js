/**
 * Created by Daniel on 11/13/2015.
 */
'use strict';
import React from 'react';

class Document extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <b>{this.props.header}</b><br/>
        {this.props.text}
        <br/>
      </div>
    );
  }
}

export default Document;

Document.propTypes = {
  header: React.PropTypes.string,
  text: React.PropTypes.string
};
