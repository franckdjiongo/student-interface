import "./search.css";

export function Search({ query, onQueryChange }) {
  return (
    <input
      placeholder="Search by name"
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
