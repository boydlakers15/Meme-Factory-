import React from "react";

export default function ExportMeme({ memeImageRef, topText, bottomText }) {
  const downloadImage = () => {
    const canvas = document.createElement("canvas");
    canvas.width = memeImageRef.current.width;
    canvas.height = memeImageRef.current.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(memeImageRef.current, 0, 0);
    
    // Add top text
    ctx.font = "bold 50px sans-serif";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(topText, canvas.width / 2, 60);
    
    // Add bottom text
    ctx.font = "bold 50px sans-serif";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(bottomText, canvas.width / 2, canvas.height - 20);

    const url = canvas.toDataURL();
    const link = document.createElement("a");
    link.download = "meme.png";
    link.href = url;
    link.click();
  };

  return (
    <div style={{ paddingLeft: "70px" }} className="form">
      <button className="form--button" onClick={downloadImage}>
        Export as Image 📷
      </button>
    </div>
  );
}
