/**
 * Created by Daniel on 11/12/2015.
 */
'use strict';
import styles from 'bootstrap.css';
import React from 'react';
import $ from 'jquery';


class SearchBar extends React.Component {

    constructor() {
        super();
        this.keyUp = this.keyUp.bind(this);
    }

    keyUp(e) {
        var query = this.refs.searchQuery.value.trim();
        //console.info("from search box " + query);
        this.props.onQuery({query: query});
    }

    render() {
        return (
            <div className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-brand">Solr Reaction</div>
                    <form className="navbar-form navbar-left">
                        <div id="form-group">
                            <input type="text" className="form-control" placeholder="Search ..."
                                   onKeyUp={this.keyUp} ref="searchQuery"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}

export default SearchBar;