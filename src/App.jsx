import logo from './logo.svg';
import './App.css';
import Products from './pages/Products';
import Navbar from './component/Navbar'
import { BrowserRouter as Router ,Routes ,Route} from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
     
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Products/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
