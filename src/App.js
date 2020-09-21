import React, { Component } from "react";
import "./App.css";
import Header from "./components/content/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "./components/Lists/List";
import Content from "./components/content/Content";
import store from "./store";
import { Provider } from "react-redux";

class App extends Component {
  componentDidMount() {
    localStorage.setItem("key", "5c73e280ffee643ce764c6df16a719b5");
    localStorage.setItem(
      "token",
      "374c221b4185e80027a402574dc071768d32336c175b07d821f47c7cdfbaecf2"
    );
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header></Header>
            <Switch>
              <Route
                path="/boards/:boardid"
                render={(props) => <List {...props} />}
              />
              <Route path="/" render={(props) => <Content />} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
