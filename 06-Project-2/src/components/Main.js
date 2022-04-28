import Header from "./card/Header";
import Body from "./card/Body";
import Footer from "./card/Footer";

function Main() {
  return (
    <main>
      <div id="card-1" className="card">
        <Header />
        <div className="card-main">
          <Body />
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default Main;
