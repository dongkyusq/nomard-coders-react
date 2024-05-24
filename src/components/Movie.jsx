import { Link } from "react-router-dom";

function Movie({ medium_cover_image, title, summary, genres, id }) {
  return (
    <div>
      <img src={medium_cover_image} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g.index}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
export default Movie;
