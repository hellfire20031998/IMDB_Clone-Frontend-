import './DetailsBanner.css';

function DetailsBanner({ details }) {
    
  return (
    <div className="details-banner">
      <div className="details-banner-img">
        <img
          src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
          alt={details.title}
        />
      </div>

      <div className="trailer-link">
        {details.videos?.results?.[0] && (
          <a
            href={`https://www.youtube.com/watch?v=${details.videos.results[0].key}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            🎬 Watch Trailer
          </a>
        )}

      </div>

      <div>
        {details.genres?.length > 0 && (
          <div className="genres">
            
            {details.genres.map((genre) => (
              <span key={genre.id} className="genre-badge">
                {genre.name}
              </span>
            ))}
          </div>
        )}
        </div>
    </div>
  );
}

export default DetailsBanner;
