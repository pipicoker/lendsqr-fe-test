import {Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Landing from './pages/Landing';


function App() {
  
  return (
    <div className="App">

      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Landing/*" element={<Landing  />} />

        </Routes>
    </div>
  );
}

export default App;
