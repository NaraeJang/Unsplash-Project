import { useSearchUnsplash } from "./reactQueryCustomHooks";

const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    console.log(searchValue);
    if (!searchValue) return;

    const { searchUnsplash } = useSearchUnsplash();
    searchUnsplash(searchValue);
    console.log(searchValue);
  };

  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
