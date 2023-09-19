import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {connect} from "react-redux";
import {handleCurrentNews, handleNewsList, handleNewsPage, setUpdateNews} from "../../redux/newslist_reducer";


const NewsPage = function (props) {

    const id = useLocation().pathname.slice(1);
    let lastUpdate = new Date();
    let updateNow = () => {
        props.setUpdateNews(true);
    }
    const [fakeCurrentDate, setFakeCurrentDate] = useState(new Date())

    useEffect(() => {
        setTimeout(() => setFakeCurrentDate(new Date()), 60000)
        props.handleCurrentNews(id);
        props.setUpdateNews(false);
    }, [fakeCurrentDate, props.getUpdateNews]);

    if (Object.entries(props.getCurrentNews).length !== 0) {
        let currentNews = props.getCurrentNews;

        let info = <>
            <div>Ссылка: {currentNews.url}</div>
            <div>Название: {currentNews.title}</div>
            <div>Время: {currentNews.time}</div>
            <div>Автор: {currentNews.by}</div>
            <div>Число комментариев: {currentNews?.descendants}</div>
            <div>Дерево комментариев: {currentNews?.kids}</div>
        </>


        return <>
            <Link to={'/'}>Назад</Link>
            <div>Последнее обновление: {String(lastUpdate)}
                <stan onClick={updateNow}>Обновить</stan>
            </div>
            <div>{id}</div>
            <div>{info}</div>

        </>
    }
}


let mapStateToProps = (state) => {
    return ({
        getCurrentNews: state.newsList_reducer.currentNews,
        getUpdateNews: state.newsList_reducer.updateNews,
    })
};

let resultConnecting = connect(mapStateToProps, {
    handleCurrentNews,
    setUpdateNews
})(NewsPage);

export default resultConnecting;