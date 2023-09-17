import { useState } from 'react';
// Suponiendo que el archivo vite.svg está en la misma carpeta que este archivo
import './App.css';
import React from 'react';
import VideoPlayer from './components/VideoPlayer'; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <main>
        <VideoPlayer />
      </main>
    </div>
  );
}

export default App;
