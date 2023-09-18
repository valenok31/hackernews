
import {fetchNewsList} from "../api/api_newsList";

const SET_NEWS_LIST = 'SET_NEWS_LIST';

const initialState = {
    newsList:{},
};

const hackernews_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS_LIST:
            return {
                ...state,
                newsList: action.newsList
            }

         default:
            return state;
    }
};

export const setNewsList = (newsList) => ({type: SET_NEWS_LIST, newsList});

export const handleNewsList = () => {
    return (dispatch) => {
        fetchNewsList.fromHackerNews().then(data => {
            dispatch(setNewsList(data));
        }).catch(err => {
                console.log(err)
            }
        );
    }
}

export default hackernews_reducer;