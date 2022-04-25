import Header from "./Header";
import Footer from "./Footer";

function List() {
  return (
    <div className="list">
      <h2>Reasons I'm Exicited Learning React</h2>
      <ol>
        <li>Popular framework!</li>
        <li>I want to make a website with it</li>
        <li>People recommended it to me</li>
      </ol>
    </div>
  );
}

function Main() {
  return (
    <main>
      <Header />
      <h1>Fun Facts About React</h1>
      <ul>
        <li>Was first release in 2013</li>
        <li>Was originally created by Jordan Lake</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is mantained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <List />
      <Footer />
    </main>
  );
}

export default Main;
