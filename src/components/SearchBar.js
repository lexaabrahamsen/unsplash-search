import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { val: "" };

  onInputChange = event => {
    this.setState({ val: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.userSubmit(this.state.val);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="flexContainer">
          <label>
            <h1 className="h1">Image Search</h1>
          </label>
          <input
            className="inputStyle"
            type="text"
            value={this.state.val}
            onChange={this.onInputChange}
          />
          <button value={this.state.val} onChange={this.onInputChange}>
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
