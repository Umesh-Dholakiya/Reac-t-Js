import { combineReducers } from "redux";

import Counter from "./CounterReducers";
import crudReducer from "./CrudReducer";

const rootReducer = combineReducers({
    cnt: Counter,
    crud: crudReducer
})

export default rootReducer;