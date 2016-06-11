/**
 * Created by Daniel on 11/14/2015.
 */
'use strict';
import React from 'react';
import FacetResult from './FacetResult.js';

class FacetField extends React.Component {
  render() {
    return (
      <div>
        <b>{this.props.facetField}</b>
        {this.props.facetResults.map((facetField, index) => {
          return (
            <FacetResult key={index} result={facetField}/>
          );
        }).bind(this)}
      </div>
    );
  }
}

export default FacetField;

FacetField.propTypes = {
  facetResults: React.PropTypes.array,
  facetField: React.PropTypes.string
};
