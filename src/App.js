import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app__body">
        <Sidebar/>
        
          <Routes>
            <Route path="/rooms/:roomId" element={<Chat />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
