import React, { Component } from "react";
// import { Provider, StyleSheet } from "react-redux";
// import { createStore } from "redux";
// import reducers from "./src/reducers";
import Router from "./src/Router";
import FutoshikiJS from "./src/kotlin/FutoshikiJS";

export default class App extends Component {
  render() {
    const Futoshiki = new FutoshikiJS.Futoshiki();
    const solution = Futoshiki.getSolution();
    const puzzle = Futoshiki.getPuzzle();
    return (
      // <Provider store={createStore(reducers)}>
      <Router />
      // {console.log(puzzle)}
      // {console.log(solution)}
      // </Provider>
    );
  }
}
