import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard1 from './components/ProductCard1';
import ProductCard2 from './components/ProductCard2';
import DetalleProduct1 from './components/DetalleProduct1';
import DetalleProduct2 from './components/DetalleProduct2';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route 
            exact 
            path="/" 
            element={
              <>
                <ProductCard1 />
                <ProductCard2 />
              </>
            } 
          />
          <Route exact path="/product2" element={<ProductCard2 />} />
          <Route exact path="/detalle1" element={<DetalleProduct1 />} />
          <Route exact path="/detalle2" element={<DetalleProduct2 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
