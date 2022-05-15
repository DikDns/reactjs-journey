function Card({
  name,
  description,
  date,
  location,
  photoSrc,
  photoAlt,
  googleMapsLink,
}) {
  return (
    <section className="card">
      <header className="card-thumb">
        <img src={`img/${photoSrc}`} alt={photoAlt} />
      </header>
      <article className="card-body">
        <section className="body-header">
          <span className="location">
            <img
              className="icon"
              src="img/icon-location.svg"
              alt="a location icon"
            />
            <span>{location}</span>
          </span>
          <a
            className="link"
            href={googleMapsLink}
            target="_blank"
            rel="noreferrer"
          >
            View on Google Maps
          </a>
        </section>
        <section className="body-main">
          <h1 className="body-name">{name}</h1>
          <h3 className="body-date">{date}</h3>
          <p className="body-desc">{description}</p>
        </section>
      </article>
    </section>
  );
}

export default Card;
