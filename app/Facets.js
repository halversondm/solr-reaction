/**
 * Created by Daniel on 11/14/2015.
 */
'use strict';
import React from 'react';
import FacetField from './FacetField.js';

class Facets extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {this.props.data.map((facet, index) => {
          return (
            <FacetField key={index} facetField={facet.key}
                        facetResults={facet.value}/>
          );
        }).bind(this)}
      </div>
    );
  }
}

export default Facets;

Facets.propTypes = {
  data: React.propTypes.array
};
