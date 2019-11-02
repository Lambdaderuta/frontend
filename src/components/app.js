import React from "react";
import RouterContainer from "components/Router";

import "./app.scss";

export default function App() {
  return (
    <div className="app__wrapper">
      <div className="app__header">
        <Header />
      </div>
      <RouterContainer />
    </div>
  );
}
