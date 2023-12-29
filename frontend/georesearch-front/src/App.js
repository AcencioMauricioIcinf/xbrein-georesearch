import { useEffect, useState } from 'react';
import { Map } from './components/Map';
import { SideMenu } from './components/SideMenu';
import './App.css';
import { getPois } from './services/PoiService';

function App() {
  const [pois, setPois] = useState([]);
  useEffect(() => {
    getPois()
      .then(setPois)
      .catch(err => {
        console.error(err.message);
      });
  }, [])
  return (
    <div style={{display: 'flex'}}>
      <SideMenu items={pois}/>
      <Map/>
    </div>
  );
}

export default App;
