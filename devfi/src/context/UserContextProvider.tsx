import React, { createContext, useState, FC } from "react";
import { useLocalStorage } from "use-hooks";
import { GetUser, LoginUser } from "../apiManager";
import { User, UserContextState } from "../Types";
// This User context is used to store information about the user in a global way.
const contextDefaultValues: UserContextState = {
  user: {} as User,
  isAuthenticated: false,
  accessToken: "",
  refreshToken: "",
  LogOut: () => {},
};
export const UserContext = createContext<UserContextState>(
  contextDefaultValues
);

const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useLocalStorage<User>(
    "user",
    contextDefaultValues.user
  );
  const [accessToken, setAccessToken] = useLocalStorage(
    "accessToken",
    contextDefaultValues.accessToken
  );
  const [refreshToken, setRefreshToken] = useLocalStorage(
    "refreshToken",
    contextDefaultValues.refreshToken
  );
  const [isAuthenticated, setIsAuthenticated] = useState(
    contextDefaultValues.isAuthenticated
  );

  const LogIn = async (email: string, password: string) => {
    let loginRes = await LoginUser(email, password);
    if (loginRes?.data) {
      const { accessToken, refreshToken } = loginRes.data;
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);

      const user = await GetUser(accessToken);
      if (user?.data) {
        // we use this to remove the password from the object.
        delete user.data.password;
        setUser(user.data);
      }
      setIsAuthenticated(true);
      console.log(accessToken);
      return { isValid: true, accessToken, refreshToken };
    }
    return { isValid: false, accessToken, refreshToken };
  };

  const LogOut = () => {
    setIsAuthenticated(false);
    setUser({} as User);
    setAccessToken("");
    setRefreshToken("");
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isAuthenticated,
        accessToken,
        refreshToken,
        LogIn,
        LogOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
