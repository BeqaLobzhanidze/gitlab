/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { useDetails } from "../../context/DetailsContext";
import { FetchTests } from "../../fetchData";
import HashLoader from "react-spinners/HashLoader";
import Answers from "../../components/Answers";
import { Link } from "react-router-dom";
import styles from "./Quiz.module.css";

let shuffledArray = [];

function Quiz() {
  const { details } = useContext(useDetails);

  const [error, setError] = useState("");
  const [tests, setTests] = useState([]);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    FetchTests(details.categories, details.dificulties)
      .then((data) => setTests(data.data.results))
      .catch((error) => setError(error.message));
  }, []);

  if (count != 10 && tests.length != 0) {
    shuffledArray = [
      tests[count].correct_answer,
      tests[count].incorrect_answers[0],
      tests[count].incorrect_answers[1],
      tests[count].incorrect_answers[2],
    ].sort(() => Math.floor(Math.random() - 0.5));
  }

  function ShufflingArray(answer) {
    setCount(count + 1);
    console.log("asnwer", answer);
    if (answer === tests[count].correct_answer) {
      setScore(score + 1);
    }
  }

  function Restart() {
    setCount(0);
    setScore(0);
  }

  if (tests.length == 0) {
    return <HashLoader color={"green"} />;
  }

  return (
    <div className={styles.container}>
      {error && <h1>{error}</h1>}
      {count == 10 ? (
        <>
          <h1>Your Score is {score}</h1>
          <Link to="/">
            <button className={styles.newquiz}>New Quiz</button>
          </Link>
          <button onClick={Restart} className={styles.restart}>
            Restart
          </button>
        </>
      ) : (
        <>
          <div dangerouslySetInnerHTML={{ __html: tests[count].question }} />
          <Answers
            shuffledArray={shuffledArray}
            ShufflingArray={ShufflingArray}
          />
        </>
      )}
    </div>
  );
}

export default Quiz;
