import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './views/Main';
import ProductDisplay from './components/ProductDisplay';
import ProductUpdate from './components/ProductUpdate';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/"/>
          <Route element={<ProductDisplay />} path="/api/products/:id" />
          <Route element={<ProductUpdate />} path="/api/products/edit/:id" />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
