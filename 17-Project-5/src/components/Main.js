import React from "react";

function Main() {
  const [allMemes, setAllMemes] = React.useState([]);
  const [meme, setMeme] = React.useState({
    text: {
      topText: "",
      bottomText: "",
    },
    image: {
      url: "https://i.imgflip.com/1e7ql7.jpg",
      name: "Evil Kermit",
    },
  });

  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch(`https://api.imgflip.com/get_memes`);
      const data = await res.json();
      setAllMemes(() => data.data.memes);
    }
    getMemes();
  }, []);

  function getMemesData(e) {
    e.preventDefault();
    const randomNumber = Math.round(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    const name = allMemes[randomNumber].name;
    // Set the new meme Image
    setMeme((prevMeme) => ({
      text: { ...prevMeme.text },
      image: {
        url: url,
        name: name,
      },
    }));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      text: {
        ...prevMeme.text,
        [name]: value,
      },
    }));
  }

  return (
    <main>
      <form onSubmit={getMemesData} className="form">
        <input
          type="text"
          className="input top-text-field"
          placeholder="top text field"
          name="topText"
          value={meme.text.topText}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          className="input bottom-text-field"
          placeholder="bottom text field"
          name="bottomText"
          value={meme.text.bottomText}
          onChange={handleChange}
        ></input>
        <button onClick={getMemesData} className="button">
          Get a new meme image <i className="icon fa-solid fa-image"></i>
        </button>
      </form>
      <div className="meme">
        <img className="meme-image" src={meme.image.url} alt={meme.image.url} />
        <h2 className="meme-text top">{meme.text.topText}</h2>
        <h2 className="meme-text bottom">{meme.text.bottomText}</h2>
      </div>
    </main>
  );
}

export default Main;
