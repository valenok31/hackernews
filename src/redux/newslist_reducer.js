import {fetchNewsList} from "../api/api_newsList";

const SET_NEWS_LIST = 'SET_NEWS_LIST';
const SET_NEWS_PAGE = 'SET_NEWS_PAGE';
const SET_UPDATE_NEWS = 'SET_UPDATE_NEWS';
const SET_CURRENT_NEWS = 'SET_CURRENT_NEWS';

const initialState = {
    newsList: [],
    newsPage: {},
    updateNews: false,
    currentNews:{},
};

const newsList_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS_LIST:
            return {
                ...state,
                newsList: action.newsList
            }
        case SET_NEWS_PAGE:
            state.newsPage[action.newsPage.id] = action.newsPage;
            return {
                ...state,
                newsPage: {...state.newsPage},
            }

        case SET_UPDATE_NEWS:
            return {
                ...state,
                updateNews: action.updateNews
            }

        case SET_CURRENT_NEWS:
            return {
                ...state,
                currentNews: action.currentNews
            }

        default:
            return state;
    }
};

export const setNewsList = (newsList) => ({type: SET_NEWS_LIST, newsList});
export const setNewsPage = (newsPage) => ({type: SET_NEWS_PAGE, newsPage});
export const setUpdateNews = (updateNews) => ({type: SET_UPDATE_NEWS, updateNews});
export const setCurrentNews = (currentNews) => ({type: SET_CURRENT_NEWS, currentNews});

export const handleNewsList = () => {
    return (dispatch) => {
        fetchNewsList.fromHackerNews().then(data => {
            dispatch(setNewsList(data.data));
        }).catch(err => {
                console.log(err)
            }
        );
    }
}

export const handleNewsPage = (id) => {
    return (dispatch) => {
        fetchNewsList.setNewsPage(id).then(data => {
            dispatch(setNewsPage(data.data));
        }).catch(err => {
                console.log(err)
            }
        );
    }
}

export const handleCurrentNews = (id) => {
    return (dispatch) => {
        fetchNewsList.setNewsPage(id).then(data => {
            dispatch(setCurrentNews(data.data));
        }).catch(err => {
                console.log(err)
            }
        );
    }
}

export default newsList_reducer;