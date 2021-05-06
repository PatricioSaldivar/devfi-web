import React, { useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./views/Landing";
import Login from "./views/Login";
import FAQ from "./views/FAQ";
import { ChakraProvider } from "@chakra-ui/react";
import NavbarComponent from "./views/components/NavbarComponent";
import FooterComponent from "./views/components/FooterComponent";
import Register from "./views/Register";
import Dashboard from "./views/Dashboard";

export default function App() {
  const shareRef = useRef<HTMLDivElement>(null);
  const collabRef = useRef<HTMLDivElement>(null);
  const objectRef = useRef<HTMLDivElement>(null);

  return (
    <ChakraProvider>
      <NavbarComponent
        shareRef={shareRef}
        collabRef={collabRef}
        objectRef={objectRef}
      />
      <Router>
        <div>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/FAQ">
              <FAQ />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/">
              <Landing
                shareRef={shareRef}
                collabRef={collabRef}
                objectRef={objectRef}
              />
            </Route>
          </Switch>
        </div>
      </Router>
      <FooterComponent />
    </ChakraProvider>
  );
}
