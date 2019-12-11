import React from "react";
import { Provider } from "mobx-react";
import "./App.css";

import Message from "./components/Message";
import Pin from "./components/Pin";

import { globalStore } from "./models/Global";

const App: React.FC = () => {
  return (
    <Provider {...globalStore}>
      <div className="container">
        <div className="item">
          <Pin />
        </div>
        <div className="item">
          <Message />
        </div>
      </div>
    </Provider>
  );
};

export default App;
