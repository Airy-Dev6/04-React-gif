import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "../components";

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando ...</h2>}
      <div className="card-grid">
        {gifs.map((item) => (
          <GifGridItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};
