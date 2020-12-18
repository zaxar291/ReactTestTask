import { SHOW_LOADER, HIDE_LOADER } from '../../ActionTypes/Actions'

const defaultParams = {
    loading: false
}

export const LoaderReducer = (state = defaultParams, action) => {
    switch (action.type) {
        case SHOW_LOADER :
            return { ...state, loading: true }
        case HIDE_LOADER :
            return { ...state, loading: false }
        default :
            return state
    }
}
