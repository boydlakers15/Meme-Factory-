import React, { useState } from 'react';

function UploadImage({handleFired}) {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');

  return (
    <div>
      <div onClick = {handleFired} className="container">
        {image && <img  className="meme-image" src={URL.createObjectURL(image)} alt="Uploaded Image" />}
        <div className="text">{text}</div>
      </div>
      <button className="upload-btn" onClick={() => document.getElementById('upload-input').click()}>Upload Image</button>
      <input id="upload-input" type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} style={{display: 'none'}} />
    </div>
  );
}

export default UploadImage;