
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './view/About/About';
import Header from './view/Header/Header';
import Inventory from './view/Help/Help';
import Login from './view/Login/Login';
import Orders from './Model/Orders';
import RequireAuth from './view/RequireAuth/RequireAuth';
import Shipment from './view/Shipment/Shipment';
import Shop from './view/Shop/Shop';
import Signup from './view/Signup/Signup';
import Help from './view/Help/Help';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/help' element={
          <RequireAuth>
            <Help></Help>
          </RequireAuth>
        }></Route>
        <Route path="/shipment" element={
          <RequireAuth>
            <Shipment></Shipment>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
