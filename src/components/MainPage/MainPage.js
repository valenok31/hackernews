import React, {useEffect} from "react";
import {connect} from "react-redux";
import {handleNewsList, handleNewsPage, setUpdateNews,} from "../../redux/newslist_reducer";
import s from "./MainPage.module.css";
import MainPageList from "./MainPageList";
import {Link} from "react-router-dom";


const MainPage = function (props) {

    let lastUpdate = new Date();
    if (Object.entries(props.getNewsPage).length !== 0) {
        let arr = Object.values(props.getNewsPage).sort((a, b) => b.time - a.time).map((x) => {
            let time = new Date(x.time * 1000);
            let month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
            return <div key={x.id}>
                <Link to={'/'+ x.id}>
                    <ul>
                        <li>{x.title}</li>
                        <li>{x.score}</li>
                        <li>{x.by}</li>
                        <li>{('0' + time.getDate()).slice(-2) +
                        '.' + month[time.getMonth()] +
                        '.' + time.getFullYear() +
                        ' ' + ('0' + time.getHours()).slice(-2) +
                        ':' + ('0' + time.getMinutes()).slice(-2) +
                        ':' + ('0' + time.getSeconds()).slice(-2)}</li>
                    </ul>
                </Link>
            </div>
        })

        let updateNow = ()=>{
            props.setUpdateNews(true);
        }

        return <>
            <div>Последнее обновление: {String(lastUpdate)} <stan onClick={updateNow}>Обновить</stan></div>
            <div>{arr}</div>
        </>;
    }
}

let mapStateToProps = (state) => {
    return ({
        getNewsList: state.newsList_reducer.newsList,
        getNewsPage: state.newsList_reducer.newsPage,
    })
};

let resultConnecting = connect(mapStateToProps, {
    handleNewsList,
    handleNewsPage,
    setUpdateNews,
})(MainPage);

export default resultConnecting;