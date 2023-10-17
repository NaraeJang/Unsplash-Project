import { useFetchUnsplash } from "./reactQueryCustomHooks";

const Gallery = () => {
  const { data, isLoading, isError } = useFetchUnsplash();

  if (isLoading) {
    return (
      <section className="image-container">
        <div className="loading"></div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }

  if (data.length < 1) {
    return (
      <section className="image-container">
        <h4>No Results Found...</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {data.results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            key={item.id}
            src={url}
            alt={item.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};
export default Gallery;
