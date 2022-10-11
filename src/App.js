import Followers from "./components/Followers";
import { useState, useEffect } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const url = "https://api.github.com/users/academind/followers";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        setData(result);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, [loading, error]);
  return (
    <>
      <p className="primary-heading">
        {loading ? "Loading..." : "Pagination using React"}
      </p>
      <p> {!loading && error ? "An error occured" : null} </p>
      <Followers data={data} />
    </>
  );
};

export default App;
