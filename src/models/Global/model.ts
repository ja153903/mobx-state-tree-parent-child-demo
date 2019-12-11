import { types, IAnyStateTreeNode } from "mobx-state-tree";

import { PinModel } from "../Pin";
import { MessageModel } from "../Message";

const GlobalModel: IAnyStateTreeNode = types
  .model("GlobalModel", {
    pinStore: types.maybe(PinModel),
    messageStore: types.maybe(MessageModel)
  })
  .views(self => ({
    get isAuthenticated() {
      return self.pinStore?.isAuthenticated;
    }
  }));

export default GlobalModel;
