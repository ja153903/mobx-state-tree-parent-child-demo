import React, { FC } from "react";
import { inject, observer } from "mobx-react";
import { IAnyStateTreeNode } from "mobx-state-tree";

import styles from "./styles.module.css";

type MessageProps = {
  messageStore?: IAnyStateTreeNode;
};

const Message: FC<MessageProps> = ({ messageStore }) => {
  const isAuthenticated = messageStore?.isAuthenticated;

  const renderSecretMessage = () => <p>The secret is 42.</p>;

  const renderUnauthenticated = () => <p>You need to be logged in...</p>;

  return (
    <div className={`${styles.message} card`}>
      <div className="card-body">
        {isAuthenticated ? renderSecretMessage() : renderUnauthenticated()}
      </div>
    </div>
  );
};

export default inject("messageStore")(observer(Message));
