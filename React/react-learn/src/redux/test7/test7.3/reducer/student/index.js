import searchCondition from "./searchCondition"
import searchResult from "./searchResult"
import { combineReducers } from "redux"

// 利用combineReducers合并reducer
export default combineReducers({
    condition: searchCondition,
    result: searchResult
})