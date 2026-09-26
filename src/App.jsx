import { useState } from "react";
import "./App.css";

function App() {
  const images = [
    "https://th.bing.com/th/id/OIGP.kiY38w.F8PrUkQnvMg8e?r=0&pid=ImgGn",
    "https://wallpapercave.com/wp/wp5561684.jpg",
    "https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2023/06/16111548/Kedarnath.jpg",
    "https://i.pinimg.com/originals/32/90/b5/3290b5fb7cdb9a2e6f587980d03b561f.jpg?nii=t",
    "https://wanderon-images.gumlet.io/gallery/triplist/best-himachal-tour-package-for-friends-5n-6d/manali.jpg",
    "https://www.holidify.com/images/bgImages/MANALI.jpg"
  ];

  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  function next() {
    setIndex((index + 1) % images.length);
  }

  function previous() {
    setIndex((index - 1 + images.length) % images.length);
  }

  return (
    <div className="gallery">

      <h1>Image Gallery</h1>

      <div className="main-image">
        <img src={images[index]} onClick={() => setShow(true)} />
      </div>

      <div className="buttons">
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div>

      <div className="images">
        {images.map((image, i) => (
          <img
            key={i}
            src={image}
            onClick={() => {
              setIndex(i);
              setShow(true);
            }}
          />
        ))}
      </div>

      {show && (
        <div className="lightbox">
          <button onClick={() => setShow(false)}>X</button>
          <img src={images[index]} />
        </div>
      )}

    </div>
  );
}

export default App;