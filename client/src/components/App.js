import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import ListEvents from "./views/ListEvents/ListEvents";
import ShowEvents from "./views/ShowEvents/ShowEvents";
import MyEvents from "./views/MyEvents/MyEvents";
import "./App.css";
import Auth from "../hoc/auth";
function App() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <NavBar />
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/list/event" component={Auth(ListEvents, true)} />
          <Route exact path="/show/events" component={Auth(ShowEvents, true)} />
          <Route exact path="/show/myEvents" component={Auth(MyEvents, true)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
