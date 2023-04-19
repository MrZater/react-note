import {
    createStore,
    applyMiddleware
} from "redux";
import reducer from "./reducer"
import logger from "redux-logger"
import thunk from "redux-thunk"
import {
    fetchUsers
} from "./action/usersAction"

const store = createStore(reducer,
    applyMiddleware(
        // 应用中间件
        thunk,
        logger,
    )
);
store.dispatch(fetchUsers());