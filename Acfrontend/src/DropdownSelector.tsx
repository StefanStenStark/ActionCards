import { useEffect, useState } from "react";
import { fetchUniqueTypes } from "./CardFetcher";

export default function DropdownSelector({
  onTypeSelect,
}: {
  onTypeSelect: (type: string) => void;
}) {
  const [types, setTypes] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getTypes() {
      setLoading(true);
      const fetchedTypes = await fetchUniqueTypes();
      setTypes(fetchedTypes);
      setLoading(false);
    }

    getTypes();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedType = event.target.value;
    onTypeSelect(selectedType);
  };

  return (
    <div className="dropdown-selector">
      <label htmlFor="options">Choose a type:</label>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <select id="options" className="custom-select" onChange={handleChange}>
          <option value="all">All cards</option>
          {types.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
