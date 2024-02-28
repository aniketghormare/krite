const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOG_OUT } = require("./actionType")

let init = {
    isLoading: false,
    isAuth: false,
    token: ""

}
export const reducer = (state = init, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST:
            return { ...state, isLoading: true }
        case LOGIN_SUCCESS:
            return { ...state, isLoading: false, isAuth: true, token: payload }
        case LOGIN_FAILURE:
            return { ...state, isLoading: false, isError: true }
        case LOG_OUT:
            return { ...state, isLoading: false, isAuth: false, token: "" }

        default:
            return state
    }
}

