import React from "react";

export default function ExportMeme({ memeImageRef, topText, bottomText }) {
  const downloadImage = () => {
    const canvas = document.createElement("canvas");
    canvas.width = memeImageRef.current.width * 1;
    canvas.height = memeImageRef.current.height * 1;
    const ctx = canvas.getContext("2d");

    // Draw semi-transparent black background
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw meme image
    ctx.drawImage(memeImageRef.current, 0, 0, canvas.width, canvas.height);

    // Add top text
    ctx.font = "bold 30px sans-serif";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.shadowColor = "rgb(25, 0, 255";
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 2;
    ctx.fillText(topText.toUpperCase(), canvas.width / 2, 60);

    // Add bottom text
    ctx.font = "bold 30px sans-serif";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.shadowColor = "blue";
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 2;
    ctx.fillText(bottomText.toUpperCase(), canvas.width / 2, canvas.height - 20);

    const url = canvas.toDataURL();
    const link = document.createElement("a");
    link.download = "meme.png";
    link.href = url;
    link.click();
  };

  return (
    <div style={{ paddingLeft: "34.5%" }} className="form">
      <button className="form--button" onClick={downloadImage}>
        Export as Image 📷
      </button>
    </div>
  );
}
