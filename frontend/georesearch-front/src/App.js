import { Map } from './components/Map';
import './App.css';
import { getPois } from './services/PoiService';
import { useEffect, useState } from 'react';

function App() {
  const [pois, setPois] = useState([]);
  useEffect(() => {
    getPois()
      .then(setPois)
      .catch(err => {
        console.error(err.message);
        setPois([]);
      });
  }, [])
  return (
    <Map/>
  );
}

export default App;
