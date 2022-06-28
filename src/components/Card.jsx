export default function Card(props) {
  return (
    <article className="card">
      <img className="card-img" src={props.imageUrl} />
      <div className="card-main">
        <div className="card-location">
          <img className="card-location-logo" src="./src/location.svg" />
          <span>{props.location}</span>
          <a className="card-googlemap" href={props.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h1 className="card-title">{props.title}</h1>
        <span className="card-dates">{`${props.startDate} - ${props.endDate}`}</span>
        <p className="card-description">{props.description}</p>
      </div>
    </article>
  );
}
