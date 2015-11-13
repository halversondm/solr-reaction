'use strict';
require('bootstrap.css');
import React from 'react';
import $ from 'jquery';
import SolrReactionNav from './SolrReactionNav.js';
import styles from './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {numFound: 0, docs: [], facets: {}};
        this.handleQuery = this.handleQuery.bind(this);
        this.buildSearchParams = this.buildSearchParams.bind(this);
        this.SERVERROOT = 'http://127.0.0.1:8983/solr/amberfields/select';
        this.HITSPERPAGE = 9999;
        this.FACETS = ['lastName', 'streetAddress'];

    }

    handleQuery(query) {
        var fq = "";
        if (query.query.length === 0) {
            this.setState({numFound: 0, docs: [], facets: {}});
            return;
        }
        $.ajax({
            url: this.SERVERROOT,
            dataType: 'jsonp',
            data: this.buildSearchParams(query.query, fq, 0),
            traditional: true,
            jsonp: 'json.wrf',
            success: function (result) {
                console.dir(result);
                this.setState({
                    numFound: result.response.numFound,
                    docs: result.response.docs,
                    facets: result.facet_counts.facet_fields
                });
            }.bind(this)
        });

    }

    buildSearchParams(q, fq, offset) {
        var ret = {
            'rows': this.HITSPERPAGE,
            'wt': 'json',
            'q': q,
            'start': offset
        };

        if (this.FACETS.length > 0) {
            ret['facet'] = 'true';
            ret['facet.mincount'] = '1';
            ret['facet.limit'] = '20';
            ret['facet.field'] = this.FACETS;
        }
        if (fq.length > 0) {
            ret['fq'] = fq;
        }
        return ret;
    }

    render() {
        return (
            <div className="container">
                <SolrReactionNav onQuery={this.handleQuery}/>

                <div className="row">Number Found: {this.state.numFound}</div>
            </div>
        );
    }
}

export default App;
