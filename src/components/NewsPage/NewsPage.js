import React, {useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import Comments from "../Comments/Comments";
import {handleComments} from "../../redux/newslist_reducer";
import s from "../NewsPage/NewsPage.module.css";
import {dateConverter} from "../../assistive/accessoryFunctions/dateСonverter";


const NewsPage = function (props) {


    const id = useLocation().pathname.slice(1);

    useEffect(() => {
        props.handleCurrentNews(id);
    }, []);
    console.log(props.isLoading)
    if (Object.entries(props.getCurrentNews).length !== 0) {
        let currentNews = props.getCurrentNews;

        let commentsList = 'нет комментариев'
        if (currentNews?.kids) {
            props.handleComments(props.getCurrentNews?.kids);
            commentsList = <Comments {...props} id={id}/>
        }
        let time = new Date(currentNews.time * 1000);
        let info = <>
            <div className={s.news__url}>Ссылка: {props.isLoading ? 'загрузка...' : currentNews.url}</div>
            <div className={s.news__title}>Название: {props.isLoading ? 'загрузка...' : currentNews.title}</div>
            <div className={s.news__time}>Время: {props.isLoading ? 'загрузка...' : dateConverter(time)}</div>
            <div className={s.news__by}>Автор: {props.isLoading ? 'загрузка...' : currentNews.by}</div>
            <div className={s.news__descendants}>Число комментариев: {props.isLoading ? 'загрузка...' : currentNews?.descendants}</div>
{/*            <div>Дерево комментариев: {props.isLoading ? 'загрузка...' : currentNews?.kids}</div>*/}
        </>

        return <>
            <Link to={'/'}>Назад</Link>
            <div>{info}</div>
            <div className={s.commentsList}>{commentsList}</div>


        </>
    }
}
export default NewsPage;