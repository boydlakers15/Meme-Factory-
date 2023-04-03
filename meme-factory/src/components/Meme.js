import React from "react"
import ExportMeme from "./ExportMeme";

export default function Meme({isFired}) {
  const memeRef = React.useRef(null);
  const fileInputRef = React.useRef(null);
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/" 
  })
  const [allMemes, setAllMemes] = React.useState([])

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }
    
  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
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
      <button
          className="form--button"
          onClick={getMemeImage}
        >
          Get Random Image 🖼
        </button>
        <button
          className="form--button"
          onClick={() => {
            fileInputRef.current.click();
          }}
        >
          Choose Image
        </button>
        <input
          type="file"
          id="fileInput"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleImageUpload}
        /> 
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
          
      </div>
      <div>
        
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" ref={memeRef} crossOrigin="anonymous"/> 
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
      <ExportMeme memeImageRef={memeRef} topText={meme.topText} bottomText={meme.bottomText} />
    </main>
  )
}
