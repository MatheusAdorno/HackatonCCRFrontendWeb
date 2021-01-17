import React from 'react';

import NavBar from '../../components/NavBar/Navbar';
import BottomNav from '../../components/BottomNav/BottomNav';

const Product: React.FC = () => (
  <>
    <NavBar page="products" />
    <h1>HowTo</h1>
    <BottomNav />
  </>
);

export default Product;
