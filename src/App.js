import s from './App.module.css'
import {Route, Routes} from 'react-router-dom';
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import MainPage from "./components/MainPage/MainPage";
import NewsPage from "./components/NewsPage/NewsPage";
import {handleNewsList, handleNewsPage, setUpdateNews} from "./redux/newslist_reducer";

const App = function (props) {

    const [fakeCurrentDate, setFakeCurrentDate] = useState(new Date())

    useEffect(() => {
        setTimeout(() => setFakeCurrentDate(new Date()), 60000)
        props.handleNewsList();
        props.setUpdateNews(false);
    }, [fakeCurrentDate,props.getUpdateNews]);



    useEffect(() => {
        if (props.getNewsList.length > 0) {
            //let newsList_100 = props.getNewsList.sort((a, b) => b - a).slice(0, 10);
            let newsList_100 = props.getNewsList.slice(0,100);
            newsList_100.forEach((x) => {
                props.handleNewsPage(x);
            });
        }

    }, [props.getNewsList]);

    return (<div className={s.app__container}>

            <div>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/*' element={<NewsPage/>}/>
                </Routes>
            </div>
        </div>
    )

}

let mapStateToProps = (state) => ({
    getNewsList: state.newsList_reducer.newsList,
    getNewsPage: state.newsList_reducer.newsPage,
    getUpdateNews: state.newsList_reducer.updateNews,
});

export default compose(
    connect(mapStateToProps, {handleNewsList, handleNewsPage,setUpdateNews}))
(App);
