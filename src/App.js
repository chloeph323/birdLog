import React from 'react';
import './App.css';
import BirdLogItem from './components/BirdLogItem';

const birds = [
  { name: 'American Robin', image: 'https://www.allaboutbirds.org/guide/assets/photo/59999781-480px.jpg' },
  { name: 'Mourning Dove', image: 'https://www.allaboutbirds.org/guide/assets/photo/60157081-480px.jpg' },
  { name: 'Blue Jay', image: 'https://www.allaboutbirds.org/guide/assets/photo/67086851-480px.jpg' },
  { name: 'Northern Cardinal', image: 'https://www.allaboutbirds.org/guide/assets/photo/68013611-480px.jpg' },
];

function App() {
  return (
    <div className="app-container">
      <div className="header">Bird Watching Log</div>
      <div className="bird-log-container">
        {birds.map((bird, index) => (
          <BirdLogItem key={index} bird={bird} />
        ))}
      </div>
    </div>
  );
}

export default App;
