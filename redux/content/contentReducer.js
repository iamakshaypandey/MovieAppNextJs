import { FATCH_USERS_FAILURE, FATCH_USERS_SUCCESS, FATCH_USERS_REQUEST, INCREMENT_PAGE, ADD_MOVIE_TO_REDUX } from "./contentType";


const initialState = {
    loding: false,
    users: [],
    movies: [],
    page: 2,
    error: ''
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FATCH_USERS_REQUEST: return {
            ...state, loading: true
        }

        case FATCH_USERS_SUCCESS: return {
            ...state,
            loading: false,
            movies: [...state.movies, ...action.payload],
            error: ''
        }

        case FATCH_USERS_FAILURE: return {
            ...state,
            loading: false,
            users: [],

            error: action.payload
        }

        case INCREMENT_PAGE:
            return {
                ...state,
                page: state.page + 1
            }

        case ADD_MOVIE_TO_REDUX:
            return {
                ...state,
                movies: action.payload,
                
            }
        default: return state
    }
}


export default userReducer