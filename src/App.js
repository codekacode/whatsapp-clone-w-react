import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Chat from './Chat';
import Login from './Login';
import Sidebar from './Sidebar';

function App() {
  const [user, setUser] = useState(null)
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
