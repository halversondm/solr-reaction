/**
 * Created by Daniel on 11/14/2015.
 */
'use strict';
import React from 'react';
import FacetResult from './FacetResult.js';

class FacetField extends React.Component {
    constructor() {
        super();
    }

    render() {

        var facetResultNodes = this.props.facetResults.map(function (facetField, index) {
            return (
                <FacetResult key={index} result={facetField}/>
            )
        });

        return (
            <div>
                <b>{this.props.facetField}</b>
                {facetResultNodes}
            </div>
        )

    }
}

export default FacetField;