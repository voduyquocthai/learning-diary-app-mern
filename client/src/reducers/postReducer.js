import {
    POSTS_LOADED_SUCCESS,
    POSTS_LOADED_FAIL,
    ADD_POST,
    DELETE_POST,
    UPDATE_POST,
    FIND_POST,
} from "../shared/constants";

const postReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case POSTS_LOADED_SUCCESS:
            return {
                ...state,
                posts: payload,
                postLoading: false,
            };
        case POSTS_LOADED_FAIL:
            return {
                ...state,
                posts: [],
                postLoading: false,
            };
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, payload],
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== payload)
            };
        default:
            break;
    }
};

export default postReducer;
