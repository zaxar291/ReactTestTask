import { LOAD_COMMENTS, LOAD_POSTS } from '../../ActionTypes/Actions'

const defaultState = {
    postsList: [],
    commentsList: []
}

export const PostsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOAD_POSTS :
            return { ...state, postsList: action.posts }
        case LOAD_COMMENTS :
            return { ...state, commentsList: action.comments }
        default:
            return state
    }
}
