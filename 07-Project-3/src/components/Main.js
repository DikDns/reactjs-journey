import Nav from "./Nav";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Data from "../data/data.json";

function HandleCards({ data }) {
  return data.map((data) => {
    let { title, price, coverImg, stats, location, openSpots } = data;
    let status = "";
    let rating = "";

    // Logic SOLD OUT
    if (openSpots < 1) {
      status = "sold out";
    } else {
      status = location;
    }

    // Logic RATING DISPLAY
    rating = `${stats.rating}`;
    if (rating.length < 3) {
      rating = `${stats.rating}.0`;
    }

    // Logic LOCATION DISPLAY
    if (location === "Online") {
      location = "USA";
    }

    console.log(title);
    return (
      <Card
        status={status}
        image={coverImg}
        rating={rating}
        reviewCount={stats.reviewCount}
        country={location}
        title={title}
        price={price}
      />
    );
  });
}

function Main() {
  return (
    <main>
      <Nav />
      <Jumbotron />
      <div className="cards">
        <HandleCards data={Data} />
      </div>
    </main>
  );
}

export default Main;
