import { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { reducer, initialState } from "./reducer";
import { FetchData } from "../../fetchData";
import { FINISH_FETCH_DATA, START_FETCH_DATA } from "./constants";

const useSetup = createContext();

function SetupContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: START_FETCH_DATA });
    FetchData().then((data) =>
      dispatch({ type: FINISH_FETCH_DATA, payload: data })
    );
  }, []);

  return (
    <useSetup.Provider value={{ state, dispatch }}>
      {children}
    </useSetup.Provider>
  );
}

SetupContext.propTypes = {
  children: PropTypes.object,
};

export { useSetup, SetupContext };
