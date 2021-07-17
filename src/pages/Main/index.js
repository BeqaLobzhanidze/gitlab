import React, { useContext } from "react";
import { useSetup } from "../../context/SetupContext";
import HashLoader from "react-spinners/HashLoader";
import { Link } from "react-router-dom";
import { TEST_PAGE } from "../../constants";
import styles from "./Main.module.css";
import Difficultie from "../../components/Difficultie";
import Categories from "../../components/Categories";

function Main() {
  const { state } = useContext(useSetup);

  if (!state.data.data) {
    return <HashLoader color={"green"} />;
  }
  return (
    <div className={styles.container}>
      {state.error && <h1>{state.error}</h1>}
      <h1>Quiz App</h1>
      <div>
        <Categories />
      </div>
      <div>
        <Difficultie />
      </div>
      <Link to={TEST_PAGE}>
        <button>start</button>
      </Link>
    </div>
  );
}

export default Main;
