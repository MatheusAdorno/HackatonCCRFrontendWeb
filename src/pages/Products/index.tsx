import React from 'react';

import {} from './styles';

import NavBar from '../../components/NavBar/Navbar';
import BottomNav from '../../components/BottomNav/BottomNav';

const Products: React.FC = () => (
  <>
    <NavBar page="products" />
    <h1>Products</h1>
    <BottomNav />
  </>
);

export default Products;
