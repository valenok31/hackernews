import React, {useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import Comments from "../Comments/Comments";
import {handleComments} from "../../redux/newslist_reducer";


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

        let info = <>
            {/*//<div>Ссылка: {props.isLoading ? 'загрузка...' : currentNews.url}</div>*/}
            <div>Ссылка: {currentNews.url}</div>
            <div>Название: {currentNews.title}</div>
            <div>Время: {currentNews.time}</div>
            <div>Автор: {currentNews.by}</div>
            <div>Число комментариев: {currentNews?.descendants}</div>
            <div>Дерево комментариев: {currentNews?.kids}</div>
        </>

        return <>
            <Link to={'/'}>Назад</Link>
            <div>{id}</div>
            <div>{info}</div>
            <div>{commentsList}</div>


        </>
    }
}
export default NewsPage;