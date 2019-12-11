import { types, getParent } from "mobx-state-tree";

import { globalStore } from "../Global";

const MessageModel = types.model("MessageModel").views(self => ({
  get isAuthenticated() {
    return getParent<typeof globalStore>(self).isAuthenticated;
  }
}));

export default MessageModel;
