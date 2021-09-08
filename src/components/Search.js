import "./search.css";

export function Search({ query, onQueryChange, placeholder }) {
  return (
    <input
      className="input-search"
      placeholder={placeholder}
      type="text"
      name="query"
      id="query"
      value={query}
      onChange={(event) => {
        onQueryChange(event.target.value);
      }}
    ></input>
  );
}
