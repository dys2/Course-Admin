import React, { Component } from 'react';
// import { Query } from "react-apollo";
// import gql from "graphql-tag";




import AdminPage from './AdminPage';
import Authorize from './Authorize';
import './App.css';

require('loaders.css');
class App extends Component {
  render() {
    return (
      <div className="App">
        <Authorize>
          <AdminPage />
        </Authorize>
      </div>
    );
  }
}

export default App;
