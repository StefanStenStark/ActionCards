import { useEffect, useState } from "react";
import CardHolder from "./CardHolder";
import "./style.css";
import { fetchUniqueTypes } from "./CardFetcher";
function App() {
  const [uniqueTypes, setUniqueTypes] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadTypes() {
      const types = await fetchUniqueTypes();
      setUniqueTypes(types);
      setIsLoading(false);
    }

    loadTypes();
  }, []);
  return (
    <>
      <main>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          uniqueTypes.map((type, index) => (
            <CardHolder key={index} title={type} />
          ))
        )}
      </main>
    </>
  );
}

export default App;
