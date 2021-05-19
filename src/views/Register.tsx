import React, { useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";
import axios from "axios";
import { useLocalStorage } from "use-hooks";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { UserContext } from "../context/UserContextProvider";

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

const TextFieldWrapper = styled(TextField)`
  fieldset {
    border-radius: 50px;
    color: black;
  }
  ,
  .MuiInputBase-input {
    color: black;
  }
`;

const Register = () => {
  let history = useHistory();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { accessToken, refreshToken, LogIn } = useContext(UserContext);
  const [accessTokenH, setAccessTokenH] = useLocalStorage<string>(
    "accessToken",
    ""
  );

  const [refreshTokenH, setRefreshTokenH] = useLocalStorage<string>(
    "refreshToken",
    ""
  );

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      history.push("/dashboard");
    } else {
      console.log("No access token");
    }
  }, []);

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        "& label.Mui-focused": {
          color: "#0f1f47",
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "#0f1f47",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#0f1f47",
          },
          "&:hover fieldset": {
            borderColor: "#0f1f47",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#0f1f47",
          },
        },
      },
      floatingLabelFocusStyle: {
        color: "#0f1f47",
      },
    })
  );
  const classes = useStyles();

  function pushRegister() {
    history.push("/register");
  }

  const handleRegister = async () => {
    const res = await axios
      .post("https://devfi-back.herokuapp.com/api/user/register", {
        email,
        fullName: name,
        password,
      })
      .then((res) => {
        if (res.status === 200) {
          handleLogin();
        }
      })
      .catch((err) => {
        if (err.response.status === 404) console.log("Incorrect email");
        if (err.response.status === 400) console.log("Incorrect password");
      });
  };
  const handleLogin = async () => {
    //@ts-ignore
    let res = await LogIn(email, password);
    if (res.isValid) {
      setAccessTokenH(res.accessToken);
      setRefreshTokenH(res.refreshToken);
      pushDashboard();
    } else {
      console.log("Error logging in");
    }
  };
  const pushDashboard = () => {
    history.push("/dashboard");
  };

  return (
    <MuiThemeProvider theme={theme}>
      <Container>
        <div style={{ marginTop: "4.5em" }}>
          <h1 style={{ fontSize: "1.5em", marginBottom: "20px" }}>Registro</h1>
          <div className="login-form">
            <form id="login-form">
              <div>
                <TextFieldWrapper
                  style={{
                    marginBottom: "1em",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  id="outlined-basic"
                  label="Nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nombre"
                  variant="outlined"
                  className={classes.root}
                  InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                  }}
                />
              </div>
              <div>
                <TextFieldWrapper
                  style={{
                    marginBottom: "1em",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  id="outlined-basic"
                  label="Correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  variant="outlined"
                  className={classes.root}
                  InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                  }}
                />
              </div>
              <div>
                <TextFieldWrapper
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                  id="outlined-basic"
                  label="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Contraseña"
                  variant="outlined"
                  className={classes.root}
                  type="password"
                  InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                  }}
                />
              </div>
              <div>
                <Button
                  variant="contained"
                  style={{
                    display: "block",
                    margin: "0 auto",
                    marginTop: "1em",
                    borderRadius: 35,
                    padding: "14px 18px",
                    fontSize: "14px",
                    color: "white",
                    fontWeight: "bold",
                    width: "175px ",
                    backgroundColor: "#0f1f47",
                  }}
                  onClick={handleRegister}
                >
                  Registrate
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </MuiThemeProvider>
  );
};
export default Register;
