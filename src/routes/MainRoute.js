import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../components/Home';
import Workflow from '../components/workflow/Workflow';
const MainRoute = () => (
  <main>
    <Switch>

          <Route path="/" component={Workflow} /> 
    </Switch>
  </main>
);

export { MainRoute };
