import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as Pages  from './pages/index';
import * as Routes from './constants/routes';

export default function App() {
  return (
    <Router>
      <Route exact path={Routes.Home}>
        <Pages.Home />
        </Route>
        <Route exact path={Routes.SignIn}>
        <Pages.SignIn />
        </Route>
    </Router>
  );
}
