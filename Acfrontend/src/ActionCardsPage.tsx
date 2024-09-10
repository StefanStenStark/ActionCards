import { useEffect, useState } from "react";
import { fetchUniqueTypes } from "./CardFetcher";
import CardHolder from "./CardHolder";

export default function ActionCardsPage() {
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
