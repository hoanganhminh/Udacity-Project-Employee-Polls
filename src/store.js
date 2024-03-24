import { legacy_createStore as createStore } from "redux";

import reducer from "./reducers";
import middleware from "./middleware";

const store = createStore(reducer, middleware);

export default store;
