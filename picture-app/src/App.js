import React, {useState, useEffect} from "react"
import './App.css';

//Component
import CardGrid from './components/CardGrid';


const photo_url = "https://jsonplaceholder.typicode.com/photos";
const album_url = "https://jsonplaceholder.typicode.com/albums";

function App() {

  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);

  // these usestate are there to determine if the fetch has failed 
  //or if it still needs to fetch the data
  const [loading, setLoading] = useState(true);
  const [warning, setWarning] = useState(null);

  // fetch data from the given url
  useEffect(() => {
    setLoading(true);
    fetch(album_url)
        .then(response => response.json())
        .then((json) => {
          setAlbums(json);
          setLoading(false);
          setWarning(null)
        })
        .catch((err) => {
          setLoading(false);
          setWarning(err.message);
        })

    fetch(photo_url)
        .then(response => response.json())
        .then((json) => {
          setPhotos(json);
          setLoading(false);
          setWarning(null)
        })
        .catch((err) => {
          setLoading(false);
          setWarning(err.message);
        })
  },[]);

  return (
    <div className="App">
      {warning && <div>{warning}</div>}
      {loading && <div>Loading...</div>}
      <CardGrid keys={photos.id} photos={photos} albums={albums}></CardGrid> 
    </div>
  );
}

export default App;