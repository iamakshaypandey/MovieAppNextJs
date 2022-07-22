import { FATCH_USERS_FAILURE, FATCH_USERS_SUCCESS, FATCH_USERS_REQUEST, INCREMENT_PAGE, ADD_MOVIE_TO_REDUX } from "./contentType";


export const addMovieToReduxAction = (payload) => ({ type: ADD_MOVIE_TO_REDUX, payload })

export const fetchUserRequest = () => {
    return {
        type: FATCH_USERS_REQUEST
    }
}

export const fetchUserSuccess = (users) => {
    return {
        type: FATCH_USERS_SUCCESS,
        payload: users
    }
}
export const fetchUserFaluier = (payload) => {
    return {
        type: FATCH_USERS_FAILURE,
        payload: payload
    }
}

export const IncrementPageCount = (payload) => ({ type: INCREMENT_PAGE, payload })

export const fetchUser = (page) => async (dispatch) => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=5d98a7a1405b8032e28c31e19e4d10a9&language=en-US&query=a&page=${page}&include_adult=false`);
        const newPosts = await res.json();
        const users = newPosts.results
    
        dispatch(fetchUserSuccess(users))
    } catch (err) {
        const errMsg = err.message
        dispatch(fetchUserFaluier(errMsg));
    }
}

export const IncrementPage = (prevPageCount) => async (dispatch) => {

    dispatch(IncrementPageCount(prevPageCount + 1))


}


export const AddMovieToRedux = (movies) => (dispatch) => {
    dispatch(addMovieToReduxAction(movies))
}

