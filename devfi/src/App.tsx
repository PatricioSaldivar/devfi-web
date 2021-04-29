import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./views/Landing";
import Login from "./views/Login";
import { ChakraProvider } from "@chakra-ui/react";
import NavbarComponent from "./views/components/NavbarComponent";
import FooterComponent from "./views/components/FooterComponent";

export default function App() {
  return (
    <ChakraProvider>
      <NavbarComponent />
      <Router>
        <div>
          <Switch>
            <Route path="/login">
            <Login/>
            </Route>
            <Route path="/register"></Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </div>
      </Router>
      <FooterComponent />
    </ChakraProvider>
  );
}
