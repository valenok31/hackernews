import React from "react";
import s from "./MainPage.module.css";
import refresh from "../../assistive/icons/refresh.png";
import {dateConverter} from "../../assistive/accessoryFunctions/dateСonverter";
import CollectorMainPage from "./CollectorMainPage/CollectorMainPage";


const MainPage = function (props) {

    let updateNow = () => {
        props.updateNow();
    }

    return <>
        <div className={s.refresh_list} onClick={updateNow}>Последнее обновление: {dateConverter(new Date())}
            <span><img src={refresh} alt='Обновить'/></span> Обновить
        </div>
        <CollectorMainPage getNewsPage={props.getNewsPage} handleCurrentNews={props.handleCurrentNews}/>
    </>;
}

export default MainPage;