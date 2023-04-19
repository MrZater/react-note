import {
    SETLOGINUSERTYPE
} from '../action/loginUserAction'

const initialState = null

const loginUser = (state = initialState, {
    type,
    payload
}) => {
    switch (type) {
        case SETLOGINUSERTYPE:
            return payload
        default:
            return state
    }
}
export default loginUser