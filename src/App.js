import React, { Fragment, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { loadUser } from "./actions/userProfiles";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
