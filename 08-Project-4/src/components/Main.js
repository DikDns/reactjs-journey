import Card from "./Card.js";
import Data from "../data/data.json";

function Main() {
  return (
    <main>
      {Data.map(
        ({
          name,
          description,
          location,
          date,
          photo,
          "google-maps-link": googleMapsLink,
        }) => {
          return (
            <Card
              name={name}
              description={description}
              date={date}
              location={location}
              photoSrc={photo.name}
              photoAlt={photo.description}
              googleMapsLink={googleMapsLink}
            />
          );
        }
      )}
    </main>
  );
}

export default Main;
