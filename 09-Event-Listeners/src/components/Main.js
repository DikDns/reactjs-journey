function Main() {
  function handleClick() {
    console.log("I was Clicked");
  }

  function handleMouseOver() {
    console.log("I was Hovered");
  }

  return (
    <div className="container">
      <img onMouseOver={handleMouseOver} src="https://picsum.photos/640/360" />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Main;
