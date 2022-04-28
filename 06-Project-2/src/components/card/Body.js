const email = "kusrinie45@gmail.com";

function Body() {
  return (
    <div className="card-body">
      <h1 id="title" className="title">
        {"Eni Kusrini"}
      </h1>
      <p className="desc">{"Elementary Teacher"}</p>
      <span className="ipa">
        {"/ɛ\u02c8ni\u02d0 ku\u02d0s\u02c8ri\u02d0ni\u02d0/"}
      </span>
      <a className="button" href={"mailto:" + email}>
        <i className="icon fa-solid fa-envelope"></i> Email
      </a>
      <div className="about">
        <h2>About</h2>
        <p>
          I am a teacher in one of the small Elementary School at Bandung.
          Teaching is always been my desire and kids are constantly be my
          energy.
        </p>
      </div>
      <div className="interest">
        <h2>Interests</h2>
        <p>Teaching. Parenting. Singer. Reader.</p>
      </div>
    </div>
  );
}

export default Body;
