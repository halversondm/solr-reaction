/**
 * Created by Daniel on 11/14/2015.
 */
'use strict';
import React from 'react';

class FacetResult extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>{this.props.result}</div>
    );
  }
}

export default FacetResult;

FacetResult.propTypes = {
  result: React.PropTypes.string
};
