const { TASK_REQUEST, TASK_SUCCESS, TASK_FAILURE } = require("./actionType")

let init = {
    isLoading: false,
    tasks: [],
    isError: false

}
export const reducer = (state = init, { type, payload }) => {
    switch (type) {
        case TASK_REQUEST:
            return { ...state, isLoading: true }
        case TASK_SUCCESS:
            return { ...state, isLoading: false, tasks: payload }
        case TASK_FAILURE:
            return { ...state, isLoading: false, isError: true }

        default:
            return state
    }
}

 