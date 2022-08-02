import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Chat from './Chat';
import Login from './Login';
import Sidebar from './Sidebar';
import { useStateValue } from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
    {!user ? (<Login />) :(
      <Router>
        <div className="app__body">
        <Sidebar/>
          <Routes>
            <Route path="/rooms/:roomId" element={<Chat />}/>
          </Routes>
        </div>
    </Router>
    )}
  </div>  
  );
}

export default App;
