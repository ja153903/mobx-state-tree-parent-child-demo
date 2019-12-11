import React from "react";
import { Provider } from "mobx-react";
import "./App.css";

import Message from "./components/Message";
import Pin from "./components/Pin";

import { globalStore } from "./models/Global";

const { messageStore, pinStore } = globalStore;

const stores = {
  messageStore,
  pinStore
};

const App: React.FC = () => {
  return (
    <Provider {...stores}>
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
