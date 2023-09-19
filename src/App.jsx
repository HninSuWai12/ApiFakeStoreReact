import logo from './logo.svg';
import 'animate.css'

import './App.css';
import Products from './pages/Products';
import Navbar from './component/Navbar'
import ProductDetail from './component/ProductDetail';
import { BrowserRouter as Router ,Routes ,Route} from 'react-router-dom'
import Cart from './component/Cart';
import Success from './component/Success';
function App() {
  
  return (
    <div className="App">
     
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='/detail/:id' element={<ProductDetail/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/success' element={<Success/>} />



      </Routes>
      </Router>
    </div>
  );
}

export default App;
