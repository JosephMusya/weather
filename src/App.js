import Navbar from "./components/Navbar";
import {Route,Routes} from 'react-router-dom';
import Homepage from "./pages/Homepage";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    </div>
  );
}

export default App;
