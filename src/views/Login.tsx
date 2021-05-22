import React, { useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";
import { useLocalStorage } from "use-hooks";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { UserContext } from "../context/UserContextProvider";
import { useToast } from "@chakra-ui/toast";
import validator from "validator";
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

const Login = () => {
  let history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { LogIn, accessToken, refreshToken } = useContext(UserContext);
  const toast = useToast();
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

  const pushDashboard = () => {
    history.push("/dashboard");
  };

  const handleLogin = async () => {
    if (email !== "" && password !== "") {
      if (!validator.isEmail(email) && email !== "") {
        toast({
          title: "Ingresar correo valido.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } else {
        //@ts-ignore
        let res = await LogIn(email, password);

        if (res.isValid) {
          setAccessTokenH(res.accessToken);
          setRefreshTokenH(res.refreshToken);
          pushDashboard();
        } else {
          toast({
            title: "Error al iniciar sesión, favor de checar sus credenciales.",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      }
    } else {
      toast({
        title: "Favor de llenar los campos.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  return (
    <MuiThemeProvider theme={theme}>
      <Container>
        <div style={{ marginTop: "2.5em" }}>
          <h1 style={{ fontSize: "1.5em", marginBottom: "20px" }}>
            Inicio de sesión
          </h1>
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
                  onClick={handleLogin}
                >
                  Iniciar sesión
                </Button>
              </div>
              <small>¿No tienes cuenta?</small>
              <Button onClick={pushRegister} color="secondary">
                Registrarse ya!
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </MuiThemeProvider>
  );
};
export default Login;
