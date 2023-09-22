import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import Comments from "../Comments/Comments";
import CollectorNewsPage from "./CollectorNewsPage/CollectorNewsPage";
import s from "./NewsPage.module.css";
import {dateConverter} from "../../assistive/accessoryFunctions/dateСonverter";
import refresh from "../../assistive/icons/refresh.png";


const NewsPage = function (props) {

    const id = useLocation().pathname.slice(1);
    const [minuteUpdate, setMinuteUpdate] = useState(true)
    useEffect(() => {
        setTimeout(() => setMinuteUpdate(!minuteUpdate), 60000)
        props.handleCurrentNews(id);
    }, [minuteUpdate]);

    let updatePage = () => {
        setMinuteUpdate(!minuteUpdate)
    }

    if (Object.entries(props.getCurrentNews)?.length !== 0) {

        return <>
            <Link to={'/'}><div className={s.backButton}>Назад к списку новостей</div></Link>
            <CollectorNewsPage getCurrentNews={props.getCurrentNews}  updatePage={updatePage}/>

            <h1>Комментарии ({props.getCurrentNews?.descendants})</h1>
            <div className={s.refresh_list} onClick={updatePage}>Последнее обновление: {dateConverter(new Date())}
                <span><img src={refresh} alt='Обновить'/></span> Обновить
            </div>
            <Comments getComments={props.getComments} id={id}
                      setCommentThread={props.setCommentThread}
                      handleCommentsThread={props.handleCommentsThread}
                      isLoading={props.isLoading}
            />
        </>
    }
}
export default NewsPage;