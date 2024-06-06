import './App.css';
import Fetchdata from './Components/Fetchdata';
import Header from './Components/Header';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
<Fetchdata searchTerm={searchTerm}/>
    </div>
  );
}

export default App;
