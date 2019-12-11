import React, { useState, FC, ChangeEvent, FormEvent } from "react";
import { inject, observer } from "mobx-react";
import { IStateTreeNode, IAnyStateTreeNode } from "mobx-state-tree";

type PinProps = {
  pinStore?: IAnyStateTreeNode;
};

const Pin: FC<PinProps> = ({ pinStore }) => {
  const isAuthenticated = pinStore?.isAuthenticated;
  const [pin, setPin] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPin(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    pinStore?.authenticatePin(parseInt(pin));
  };

  const renderForm = () => (
    <form onSubmit={handleSubmit}>
      <input value={pin} onChange={handleChange} placeholder="Enter pin" />
      <button type="submit">Submit PIN</button>
    </form>
  );

  const renderSuccess = () => <p>Your PIN has been validated</p>;

  return (
    <div className="card">
      <div className="card-body">
        {isAuthenticated ? renderSuccess() : renderForm()}
      </div>
    </div>
  );
};

export default inject("pinStore")(observer(Pin));
