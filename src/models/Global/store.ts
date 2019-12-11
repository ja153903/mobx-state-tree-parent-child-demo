import GlobalModel from "./model";

import { pinStore } from "../Pin";
import { messageStore } from "../Message";

export default GlobalModel.create({
  pinStore,
  messageStore
});
