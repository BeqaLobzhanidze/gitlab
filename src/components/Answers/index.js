import React from "react";
import PropTypes from "prop-types";
import styles from "./Answers.module.css";
import HashLoader from "react-spinners/HashLoader";

function Answers({ shuffledArray, ShufflingArray }) {
  if (!shuffledArray) {
    return <HashLoader color={"green"} />;
  }
  return (
    <div className={styles.container}>
      {shuffledArray.map((item) => (
        <div
          key={item}
          onClick={() => ShufflingArray(item)}
          dangerouslySetInnerHTML={{ __html: item }}
        ></div>
      ))}
    </div>
  );
}

Answers.propTypes = {
  shuffledArray: PropTypes.array,
  ShufflingArray: PropTypes.func,
};

export default Answers;
