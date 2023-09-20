import React from "react";
import s from "../MainPage.module.css";
import {Link} from "react-router-dom";
import {dateConverter} from "../../../assistive/accessoryFunctions/dateСonverter";
import thumb_up from "../../../assistive/icons/thumbup.png";
import comment from "../../../assistive/icons/comment.png";
import user from "../../../assistive/icons/user.png";

const CollectorMainPage = function (props) {

    return Object.values(props.getNewsPage).slice().sort((a, b) => b.time - a.time).map((x) => {
        let time = new Date(x.time * 1000);
        return <div key={x.id} className={s.card}>
            <Link to={'/' + x.id} onClick={() => props.handleCurrentNews(x.id)}>
                <div className={s.news_card}>
                    <div className={s.news_card__date}>{dateConverter(time)}</div>
                    <div className={s.news_card__score}>
                        <img src={thumb_up} alt='thumb up'/> {x.score}   <img src={comment}
                                                                              alt='comment'/> {x?.descendants}</div>
                    <div className={s.news_card__title}>{x.title}</div>
                    <div className={s.news_card__by}><img src={user} alt='user'/>{x.by}</div>
                </div>
            </Link>
        </div>
    })
}

export default CollectorMainPage;