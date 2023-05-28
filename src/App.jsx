
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/shared/Navabar';
import Home from './components/home/Home';
import Cart from './pages/products/Cart';
import CheckOut from './pages/products/CheckOut';

function App() {


  return (
    <>
      <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home></Home>}>
            </Route>
            <Route path="/cart" element={<Cart></Cart>}>
            </Route>
            <Route path="/checkout" element={<CheckOut></CheckOut>}></Route>
          </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
