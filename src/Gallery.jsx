import { useFetchUnsplash } from "./reactQueryCustomHooks";

const Gallery = () => {
  const { data, isLoading, isError } = useFetchUnsplash();

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.urls.regular} />
            <h4>{item.alt_description}</h4>
          </div>
        );
      })}
    </div>
  );
};
export default Gallery;
