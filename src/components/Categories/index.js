import React, { useContext } from "react";
import { useDetails } from "../../context/DetailsContext";
import { useSetup } from "../../context/SetupContext";

function Categories() {
  const { details, setDetails } = useContext(useDetails);
  const { state } = useContext(useSetup);

  return (
    <>
      <label htmlFor="category">Choose Categories</label>
      <select
        defaultValue="Select"
        id="category"
        onChange={(e) => setDetails({ ...details, categories: e.target.value })}
      >
        <option disabled>Select</option>
        {state.data.data.trivia_categories.map((item) => (
          <option key={item.name} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default Categories;
