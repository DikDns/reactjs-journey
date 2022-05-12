function Card(props) {
  let { status, image, rating, reviewCount, country, title, price } = props;
  return (
    <div className="card">
      <span className="status">{status}</span>
      <div className="card-thumb">
        <img src={`img/${image}`} />
      </div>
      <div className="card-info">
        <div className="head">
          <img className="star" src="img/star.png" alt="Star Image" />
          <span className="rating">{rating}</span>
          <span className="count">({reviewCount})</span>
          <span className="state">• {country}</span>
        </div>
        <div className="body">
          <p className="info">{title}</p>
        </div>
        <div className="foot">
          <p className="price">
            <strong>From ${price}</strong> / person
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
