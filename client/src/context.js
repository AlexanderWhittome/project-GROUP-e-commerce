import React, { Component } from "react";

export default class FetchProduct extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {}

  render() {
    return <div>{this.state.loading ? <div>loading...</div> : <div>item...</div>;
  }
}
