import logo from "./logo.svg";
import "./App.css";

import CompEditOrder from './order/EditOrder'
import CompCreateOrder from "./order/CreateOrder";
import CompShowOrder from "./order/ShowOrder";
import CompHome from "./vista/Home"

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = { <CompHome/> }/>
          <Route path = '/orderTable' element = { <CompShowOrder/> }/>
          <Route path = '/create' element = { <CompCreateOrder/> }/>
          <Route path = '/edit/:id' element = { <CompEditOrder/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
