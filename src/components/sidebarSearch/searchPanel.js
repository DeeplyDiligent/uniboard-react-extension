import React, { Component } from "react";
import SearchCard from "./searchCard";
import SearchBox from "./searchBox";
import SearchResults from './searchResults';
import database from "../../data";


class SearchPanel extends React.Component {
  constructor(props) {
    super(props);

  }

  state = { searchString: "" };
  handleChange = e => {
    this.setState({ searchString: e.target.value });
  };

  render() {
    return (
      <div className="flex flex-col">
        <SearchBox handleChange={this.handleChange} />
        <SearchResults data={this.props.data} searchString = {this.state.searchString} />
      </div>
    );
  }
}

// Constant, library

// put input and display on page

export default SearchPanel;
