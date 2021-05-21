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
import { QueryClientProvider, QueryClient } from "react-query";
import ProjectsView from "./views/ProjectsView";
import UserProvider from "./context/UserContextProvider";
import ProjectView from "./views/ProjectView";
import AddProjectView from "./views/AddProjectView";
import EditProjectView from "./views/EditProjectView";
import Profile from "./views/Profile";
import ProfileEdit from "./views/ProfileEdit";
const queryClient = new QueryClient();
export default function App() {
  const shareRef = useRef<HTMLDivElement>(null);
  const collabRef = useRef<HTMLDivElement>(null);
  const objectRef = useRef<HTMLDivElement>(null);
  return (
    <div className="App">
      <UserProvider>
        <QueryClientProvider client={queryClient}>
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
                  <Route path="/profile" exact>
                    <Profile />
                  </Route>
                  <Route path="/profile/edit/:id">
                    <ProfileEdit />
                  </Route>
                  <Route path="/project/add">
                    <AddProjectView />
                  </Route>
                  <Route path="/project/edit/:id">
                    <EditProjectView />
                  </Route>
                  <Route path="/project/:id">
                    <ProjectView />
                  </Route>
                  <Route path="/projects">
                    <ProjectsView />
                  </Route>
                  <Route path="/register">
                    <Register />
                  </Route>
                  <Route path="/landing">
                    <Landing
                      shareRef={shareRef}
                      collabRef={collabRef}
                      objectRef={objectRef}
                    />
                  </Route>
                  <Route path="/">
                    <Dashboard />
                  </Route>
                </Switch>
              </div>
            </Router>
            <FooterComponent />
          </ChakraProvider>
        </QueryClientProvider>
      </UserProvider>
    </div>
  );
}
