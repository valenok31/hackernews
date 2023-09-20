import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {
    handleCommentsThread,
    handleCurrentNews,
    handleNewsList,
    setCommentThread,
    setNewsList,
} from "./redux/newslist_reducer";
import RouteComponent from "./components/RouteСomponent/RouteСomponent";

const App = function (props) {

    /* Обновление каждую минуту или в ручную */
    const [minuteUpdate, setMinuteUpdate] = useState(true)
    useEffect(() => {
        setTimeout(() => setMinuteUpdate(!minuteUpdate), 60000)
        props.handleNewsList();
    }, [minuteUpdate]);
    let updateNow = () => {
        setMinuteUpdate(!minuteUpdate)
    }

    return <RouteComponent {...props} updateNow={updateNow}/>
}

let mapStateToProps = (state) => ({
    getNewsList: state.newsList_reducer.newsList,
    getNewsPage: state.newsList_reducer.newsPage,
    getComments: state.newsList_reducer.comments,
    getCurrentNews: state.newsList_reducer.currentNews,
    isLoading: state.newsList_reducer.isLoading,
});

export default compose(
    connect(mapStateToProps, {
        handleNewsList,
        handleCurrentNews,
        setNewsList,
        setCommentThread,
        handleCommentsThread,
    }))(App);
