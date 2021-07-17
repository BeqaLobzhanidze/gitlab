import React, { useContext } from "react";
import { useDetails } from "../../context/DetailsContext";

const dificultie = ["easy", "medium", "hard"];

function Difficultie() {
  const { setDetails, details } = useContext(useDetails);

  return (
    <>
      <label htmlFor="dificultie">Choose Dificulties</label>
      <select
        defaultValue="Select"
        id="dificultie"
        onChange={(e) =>
          setDetails({ ...details, dificulties: e.target.value })
        }
      >
        <option disabled>Select</option>
        {dificultie.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
}

export default Difficultie;
