import { useState } from "react";
import "./App.css";
import Card from "./components/card/Card.js";

function App() {
  const [productList, setProductList] = useState([
    {
      id: 1,
      name: "landscape",
      image: require('./images/photo1.jpg'),
      title: "The Mountain",
    },
    {
      id: 2,
      name: "architecture",
      image: require('./images/photo2.jpg'),
      title: "The Church",
    },
    {
      id: 3,
      name: "architecture",
      image: require('./images/photo3.jpg'),
      title: "The Room",
    },
    {
      id: 4,
      name: "architecture",
      image: require('./images/photo4.jpg'),
      title: "The Tower",
    },
  ]);

  const [likedPhotos, setLikePhotos] = useState([]);

  const likedControl = (product) => {
    if(likedPhotos.filter(photo => photo.id === product.id)[0] !== undefined){
      alert("Bu fotoğrafı zaten beğenmiştiniz.")
    } else {
      const arr = [...likedPhotos];
      arr.push(product);
      setLikePhotos(arr);
    }
  }

  const unLikePhoto = (key) => {
    let newArr = []
    likedPhotos.forEach((photo) => {
      if(photo.key !== key){
        newArr.push(photo)
      }
    })

    setLikePhotos(newArr)
  }

  return (
    <div className="container">
      <h3>Fotoğraflar</h3>
      <div className="gridItems">
        {productList.map((product, index) => {
          return (
            <Card
              key={index.toString()}
              title={product.title}
              name={product.name}
              url={product.image}
              onClick={() => {
                likedControl({...product, key: index})
              }}
            />
          );
        })}
      </div>

      {likedPhotos.length > 0 && (
        <div>
          <h4>Beğenilen Fotoğraflar ({likedPhotos.length})</h4>
          <div className="gridItems">
            {likedPhotos.map((photo, index) => {
              return (
                  <Card
                    key={index}
                    title={photo.title}
                    name={photo.name}
                    url={photo.image}
                    onClick={() => {
                      unLikePhoto(photo.key)
                    }}
                  />
              );
            })}
          </div>
        </div>
      )}

      {likedPhotos.length < 1 && (
        <h5>Henüz beğendiğiniz bir fotoğraf bulunmuyor.</h5>
      )}
    </div>
  );
}

export default App;
