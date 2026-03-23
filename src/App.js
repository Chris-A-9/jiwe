// import logo from './logo.svg';
import'bootstrap/dist/css/bootstrap.css'
import'bootstrap/dist/js/bootstrap.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import AddProduct from './components/AddProduct';
import MakePayment from './components/MakePayment';
import GetProducts from './components/GetProducts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/makepayment' element={<MakePayment />} />
        <Route path='/' element={<GetProducts/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
