import { useState } from "react";
import "./App.css";
import Card from "./components/card/Card.js";

function App() {
  const [productList, setProductList] = useState([
    {
      id: 1,
      name: "landscape",
      image:
        "https://images.unsplash.com/photo-1657816909730-4b7cbfe2da41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
      title: "The Mountain",
    },
    {
      id: 2,
      name: "architecture",
      image:
        "https://images.unsplash.com/photo-1601997474092-586bff2cd2d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "The Mountain",
    },
    {
      id: 3,
      name: "architecture",
      image:
        "https://images.unsplash.com/photo-1600613363620-9fdf5cc9291b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
      title: "The Church",
    },
    {
      id: 4,
      name: "other",
      image:
        "https://images.unsplash.com/photo-1648055299798-1d56d22b7eb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80",
      title: "Phone Booth",
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
