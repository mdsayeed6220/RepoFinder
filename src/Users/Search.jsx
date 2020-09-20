import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: "",
  };

  onChange = (e) => {
    this.setState({ text: e.target.value });
    console.log(this.state.text); //verify form working or not
    };
    

  render() {
    return (
      <div>
        <form className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users,Repo..."
            value={this.state.text}
            onChange={this.onChange}
          />

          <input
            type="submit"
            value="Saerch"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default Search;
