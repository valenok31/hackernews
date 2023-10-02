import {fetchNewsList} from "../api/api_newsList";

const SET_NEWS_LIST = 'SET_NEWS_LIST';
const SET_NEWS_PAGE = 'SET_NEWS_PAGE';
const SET_CURRENT_NEWS = 'SET_CURRENT_NEWS';
const SET_COMMENTS = 'SET_COMMENTS';
const DELETE_COMMENTS = 'DELETE_COMMENTS';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const SET_COMMENT_THREAD = 'SET_COMMENT_THREAD';

const initialState = {
    newsList: [],
    newsPage: {},
    currentNews: {},
    comments: {},
    isLoading: false,
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

        case SET_CURRENT_NEWS:
            return {
                ...state,
                currentNews: action.currentNews
            }

        case SET_COMMENTS:
            state.comments[action?.comments?.id] = action.comments;
            state.comments[action?.comments?.id].commentThread = {};
            return {
                ...state,
                comments: {...state.comments},
            }

        case SET_COMMENT_THREAD:
            state.comments[action?.comments?.parent].commentThread[action?.comments?.id] = action.comments;
            return {
                ...state,
                comments: {...state.comments},
            }

        case DELETE_COMMENTS:
            return {
                ...state,
                comments: {},
            }

        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            }

        default:
            return state;
    }
};

export const setNewsList = (newsList) => ({type: SET_NEWS_LIST, newsList});
export const setNewsPageD = (newsPage) => ({type: SET_NEWS_PAGE, newsPage});
export const setCurrentNews = (currentNews) => ({type: SET_CURRENT_NEWS, currentNews});
export const setComments = (comments) => ({type: SET_COMMENTS, comments});
export const deleteComments = () => ({type: DELETE_COMMENTS});
export const setCommentThread = (comments) => ({type: SET_COMMENT_THREAD, comments});
export const toggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading});

export const handleNewsList = () => {
    return (dispatch) => {
        dispatch(toggleIsLoading(true));
        fetchNewsList.fromHackerNews().then(data => {
            dispatch(setNewsList(data.data));
            let newsList_100 = data.data.slice(0, 100);
            newsList_100.forEach((x) => {
                fetchNewsList.setNewsPage(x).then(data => {
                    dispatch(setNewsPageD(data.data));
                }).catch(err => {
                    console.log(err)
                });
            });
        }).catch(err => {
            console.log(err)
        }).finally(dispatch(toggleIsLoading(false)));
    }
}

export const handleCurrentNews = (id) => {
    return (dispatch) => {
        dispatch(toggleIsLoading(true));
        fetchNewsList.setNewsPage(id).then(data => {
            dispatch(deleteComments());
            if (!!data?.data?.kids) {
                data?.data?.kids.forEach((id) => {
                    fetchNewsList.setNewsPage(id).then(data => {
                        dispatch(setComments(data.data));
                    }).catch(err => {
                        console.log(err)
                    });
                });
            }
            dispatch(setCurrentNews(data.data));
        }).catch(err => {
            console.log(err)
        })
            .finally(dispatch(toggleIsLoading(false)));
    }
}

export const handleCommentsThread = (comment) => {
    return (dispatch) => {
        dispatch(toggleIsLoading(true));
        comment.kids.forEach((id) => {
            fetchNewsList.setNewsPage(id).then(data => {
                dispatch(setCommentThread(data.data));
            }).catch(err => {
                    console.log(err)
                }
            ).finally(dispatch(toggleIsLoading(false)));
        })
    }
}

export default newsList_reducer;