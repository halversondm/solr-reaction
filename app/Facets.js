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
        var facetFieldNodes = this.props.data.map(function (facet, index) {
            return (
                <FacetField key={index} facetField={facet.key} facetResults={facet.value}/>
            )
        });

        return (
            <div>
                {facetFieldNodes}
            </div>
        );
    }
}

export default Facets;