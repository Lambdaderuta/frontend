import React from 'react';
import RouterContainer from 'components/Router';
import Header from 'components/Header';

import './app.scss';

export default function App() {
  return (
      <div className="app__wrapper">
        <div className="app__header">
          <Header />
        </div>
        <div className="body">
          <RouterContainer />
        </div>
      </div>
  );
}
