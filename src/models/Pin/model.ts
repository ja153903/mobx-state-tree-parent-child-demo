import { types, flow } from "mobx-state-tree";

const PinModel = types
  .model("PinModel", {
    isAuthenticated: types.boolean
  })
  .actions(self => ({
    authenticatePin: flow(function*(pin: number) {
      const resp = yield Promise.resolve(true);
      self.isAuthenticated = resp;
    })
  }));

export default PinModel;
