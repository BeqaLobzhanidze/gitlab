import axios from "axios";

async function FetchData() {
  try {
    const response = axios.get("https://opentdb.com/api_category.php");
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

async function FetchTests(categories, dificulties) {
  try {
    const response = axios.get(
      `https://opentdb.com/api.php?amount=10&category=${categories}&difficulty=${dificulties}&fbclid=IwAR0qxjASbave_JeKnNhSC3ZTZM9dMyxkOX_B-cLEtn5oc5fZfIXhbCvbu2c&type=multiple`
    );
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export { FetchData, FetchTests };
