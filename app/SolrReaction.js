'use strict';
require('bootstrap.css');
import React from 'react';
import $ from 'jquery';
import SearchBar from './SearchBar.js';
import styles from './SolrReaction.css';
import DocumentList from './DocumentList.js';
import Facets from './Facets.js';

class SolrReaction extends React.Component {
    constructor() {
        super();
        this.state = {query: "", numFound: 0, docs: [], facets: []};
        this.handleQuery = this.handleQuery.bind(this);
        this.buildSearchParams = this.buildSearchParams.bind(this);
        this.handleReturn = this.handleReturn.bind(this);
        this.SERVERROOT = 'http://127.0.0.1:8983/solr/amberfields/select';
        this.HITSPERPAGE = 9999;
        this.FACETS = ['lastName', 'streetAddress'];
    }

    handleQuery(query) {
        var fq = "";
        if (query.query.length === 0) {
            this.setState({query: "", numFound: 0, docs: [], facets: []});
            return;
        }
        $.ajax({
            url: this.SERVERROOT,
            dataType: 'jsonp',
            data: this.buildSearchParams(query.query, fq, 0),
            traditional: true,
            jsonp: 'json.wrf',
            success: function (result) {
                this.handleReturn(result, query);
            }.bind(this)
        });

    }

    handleReturn(result, query) {
        //console.dir(result);
        var allFacets = [];
        for (var k in result.facet_counts.facet_fields) {
            var facetObj = {key: "", value: []};
            facetObj.key = k;
            var navs = result.facet_counts.facet_fields[k];
            for (var i = 0; i < navs.length; i += 2) {
                facetObj.value.push(navs[i] + " (" + navs[i + 1] + ")");
            }
            allFacets.push(facetObj);
        }
        this.setState({
            query: query.query,
            numFound: result.response.numFound,
            docs: result.response.docs,
            facets: allFacets
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
                <SearchBar onQuery={this.handleQuery}/>

                <div className="row">
                    <div className="col-md-4">
                        <Facets data={this.state.facets}/>
                    </div>
                    <div className="col-md-6">
                        {this.state.numFound} results for <b>{this.state.query}</b>
                        <br/>
                        <DocumentList data={this.state.docs}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default SolrReaction;
