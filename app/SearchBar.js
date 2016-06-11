/**
 * Created by Daniel on 11/12/2015.
 */
'use strict';
import React from 'react';

export default class SearchBar extends React.Component {

  constructor() {
    super();
    this.keyUp = this.keyUp.bind(this);
  }

  keyUp(e) {
    var query = e.target.value.trim();
    console.info("from search box " + query);
    // this.props.onQuery({ query: query });
  }

  render() {
    return (
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-brand">{this.props.name}</div>
          <form className="navbar-form navbar-left">
            <div id="form-group">
              <input type="text" className="form-control"
                     placeholder="Search ..."
                     onKeyUp={this.keyUp}/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  name: React.PropTypes.string
};
