import { SIGN_IN, SIGN_UP, ADD_PIC, SIGN_FAIL, SIGN_UP_START, SIGN_IN_START } from "../actions/auth.actions";

const initalState = {
    token: null,
    userId: null,
    userEmail: null,
    userName: null,
    userPic: null,
    isLoading: false,

}

const authReducer = (state = initalState, action) => {
    switch (action.type) {
        case SIGN_UP_START:
            return {
                ...state,
                isLoading: true,
            }
        case SIGN_IN_START:
            return {
                ...state,
                isLoading: true,
            }
        case SIGN_FAIL:
            return {
                ...state,
                isLoading: false,
            }
        case SIGN_UP:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
                userEmail: action.userEmail,
                userName: action.userName,
                isLoading: false
            }
        case SIGN_IN:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
                userEmail: action.userEmail,
                userName: action.userName,
                isLoading: false
            }
        case ADD_PIC:
            return {
                ...state,
                userPic: action.payload.image
            }
        default:
            return state;
    }
}

export default authReducer;