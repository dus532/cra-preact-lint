import '@/App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Test from '@/Test';

const Abc = styled.div`
  display: flex;
`;

const App = () => {
  return (
    <div className="App">
      header
      <Router>
        <Switch>
          <Route path="/test">
            <Test />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
