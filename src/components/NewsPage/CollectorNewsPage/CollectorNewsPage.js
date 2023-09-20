import React from "react";
import s from "../NewsPage.module.css";
import {dateConverter} from "../../../assistive/accessoryFunctions/dateСonverter";
import user from "../../../assistive/icons/user.png";


const CollectorNewsPage = function (props) {
    let currentNews = props.getCurrentNews;
    let loading = props.isLoading

    return <div className={s.news_card}>
        <div className={s.news__title}>{loading ? 'загрузка...' : currentNews.title}</div>
        <div className={s.news__by}><img src={user} alt='user'/> {loading ? 'загрузка...' : currentNews.by}
        </div>
        <div className={s.news__time}>
            Время: {loading ? 'загрузка...' : dateConverter(new Date(currentNews.time * 1000))}</div>
        <div className={s.news__url}>{loading ? 'загрузка...' :
            <a href={currentNews.url}> Ссылка на новость</a>}</div>
    </div>
}

export default CollectorNewsPage;