import React from "react";
import "../index.css"

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = React.useState([]);

  const fileInputRef = React.useRef(null);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      setMeme((prevMeme) => ({
        ...prevMeme,
        randomImage: event.target.result,
      }));
    };
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
        <div className="form--upload">
          <label htmlFor="fileInput">Upload Image:</label>
          <input
            type="file"
            id="fileInput"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
          <button
            onClick={() => {
              fileInputRef.current.click();
            }}
          >
            Choose File
          </button>
        </div>
      </div>
      <div className="meme" style={{ position: "relative" }}>
        <img src={meme.randomImage} className="meme--image" alt="meme" />
        <h2 className="meme--text top" style={{ top: 0 }}>
          {meme.topText}
        </h2>
        <h2 className="meme--text bottom" style={{ bottom: 0 }}>
          {meme.bottomText}
        </h2>
      </div>
    </main>
  );
}
