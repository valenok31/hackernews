import React from "react";
import s from "../../App.module.css";
import {Route, Routes} from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import NewsPage from "../NewsPage/NewsPage";

const RouteComponent = function (props) {

    return (<div className={s.app__container}>
            <div>
                <Routes>
                    <Route path='/' element={<MainPage {...props}/>}/>
                    <Route path='/*' element={<NewsPage {...props}/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default RouteComponent;