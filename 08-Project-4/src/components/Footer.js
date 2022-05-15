import Data from "../data/data.json";

function List({ photoName, photoLink, authorName, authorLink, unsplashLink }) {
  return (
    <li>
      <img className="icon" src="img/icon-photo.svg" alt="a photo icon" />
      <p>
        <a className="link" href={photoLink} target="_blank" rel="noreferrer">
          {photoName} Photo
        </a>{" "}
        by{" "}
        <a className="link" href={authorLink} target="_blank" rel="noreferrer">
          {authorName}
        </a>{" "}
        on{" "}
        <a
          className="link"
          href={unsplashLink}
          target="_blank"
          rel="noreferrer"
        >
          Unsplash
        </a>
      </p>
    </li>
  );
}

function Footer() {
  return (
    <footer>
      <ul>
        {Data.map(({ name, photo }) => {
          return (
            <List
              photoName={name}
              photoLink={photo["source-link"]}
              authorName={photo.author.name}
              authorLink={photo.author["source-link"]}
              unsplashLink={photo["unsplash-link"]}
            />
          );
        })}
      </ul>
      <p>Copyright &copy; 2022 DikDns. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
