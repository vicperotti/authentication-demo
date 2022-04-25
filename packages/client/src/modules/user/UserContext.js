import { useQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import { GET_SESSION } from "./queries";

const Context = React.createContext({});

export const UserProvider = ({ children }) => {
  const [state, setState] = useState({ user: null, session: null });
  const { loading, error } = useQuery(GET_SESSION, {
    onCompleted: (data) => {
      const session = data && data.session ? data.session : null;
      const user = session && session.user ? session.user : null;
      setState({
        session,
        user,
      });
    },
  });
  console.log(state);
  return (
    <Context.Provider value={{ ...state, loading, error }}>
      {children}
    </Context.Provider>
  );
};

export const useUser = () => useContext(Context).user;
