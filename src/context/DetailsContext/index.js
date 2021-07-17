import { createContext, useState } from "react";
import PropTypes from "prop-types";

const useDetails = createContext();

function DetailsContext({ children }) {
  const [details, setDetails] = useState({ categories: 0, dificulties: "" });
  return (
    <useDetails.Provider value={{ details, setDetails }}>
      {children}
    </useDetails.Provider>
  );
}

DetailsContext.propTypes = {
  children: PropTypes.object,
};

export { useDetails, DetailsContext };
