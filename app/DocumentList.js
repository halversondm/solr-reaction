/**
 * Created by Daniel on 11/13/2015.
 */
'use strict';

import React from 'react';
import Document from './Document.js';

class DocumentList extends React.Component {
  constructor() {
    super();
  }

  render() {
    var documentNodes = this.props.data.map((document, index) => {
      return (
        <Document key={index} header={document.lastName} text={document.text}/>
      );

    });
    return (
      <div>
        {documentNodes}
      </div>
    );
  }

}

export default DocumentList;

DocumentList.propTypes = {
  data: React.PropTypes.array
};
