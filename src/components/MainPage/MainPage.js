import React from "react";
import s from "./MainPage.module.css";
import {Link} from "react-router-dom";
import user from "../../assistive/icons/user.png";
import thumbup from "../../assistive/icons/thumbup.png";
import refresh from "../../assistive/icons/refresh.png";
import {dateConverter} from "../../assistive/accessoryFunctions/dateСonverter";


const MainPage = function (props) {

    let lastUpdate = new Date();
    if (Object.entries(props.getNewsPage).length !== 0) {
        let arr = Object.values(props.getNewsPage).sort((a, b) => b.time - a.time).map((x) => {
            let time = new Date(x.time * 1000);
            return <div key={x.id} className={s.card}>
                <Link to={'/' + x.id}>
                    <div className={s.news_card}>
                        <div className={s.news_card__date}>{dateConverter(time)}</div>
                        <div className={s.news_card__score}><img src={thumbup} alt='thumb up'/> {x.score}  {x?.descendants}</div>
                        <div className={s.news_card__title}>{x.title}</div>
                        <div className={s.news_card__by}><img src={user} alt='user'/>{x.by}</div>


{/*                        <div>{x?.descendants}</div>
                        <div>{x?.kids}</div>*/}
                    </div>
                </Link>
            </div>
        })

        let updateNow = () => {
            props.setUpdateNews(true);
        }

        return <>
            <div className={s.refresh_list} onClick={updateNow}>Последнее обновление: {dateConverter(lastUpdate)}
                <span><img src={refresh} alt='Обновить'/></span> Обновить
            </div>
            <div>{arr}</div>
        </>;
    }
}

/*let mapStateToProps = (state) => {
    return ({
        getNewsList: state.newsList_reducer.newsList,
        getNewsPage: state.newsList_reducer.newsPage,
    })
};

let resultConnecting = connect(mapStateToProps, {
    handleNewsList,
    handleNewsPage,
    setUpdateNews,
    handleComments
})(MainPage);

export default resultConnecting;*/
export default MainPage;