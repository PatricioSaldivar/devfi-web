import React from "react";
import styled from "styled-components";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0f1f47",
    },
    secondary: {
      main: "#0f1f47",
    },
  },
});

const Container = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  color: black;
  height: 600px;
  width: 100%;
  background: white;
`;

const Login = () => {
  let history = useHistory();

  useEffect(() => {}, []);

  return (
    <Container>
      <p>Dashboard</p>
    </Container>
  );
};
export default Login;
