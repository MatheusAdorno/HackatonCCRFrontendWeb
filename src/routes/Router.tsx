import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/index';
import HowTo from '../pages/HowTo/index';
import Products from '../pages/Products/index';
import HelpCommunity from '../pages/HelpCommunity/index';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/products" component={Products} />
    <Route path="/howto" component={HowTo} />
    <Route path="/helpcommunity" component={HelpCommunity} />
  </Switch>
);

export default Routes;
