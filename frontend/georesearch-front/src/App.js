import { useEffect, useState } from 'react';
import { Map } from './components/Map';
import { SideMenu } from './components/SideMenu';
import './App.css';
import { getPois } from './services/PoiService';

function App() {
  const [pois, setPois] = useState([]);
  const [category, setCategory] = useState('');
  useEffect(() => {
    getPois(category)
      .then(setPois)
      .catch(err => {
        console.error(err.message);
      });
  }, [category])
  return (
    <div style={{display: 'flex'}}>
      <SideMenu items={pois} setCategory={setCategory}/>
      <Map pois={pois}/>
    </div>
  );
}

export default App;
