import React from "react";
import s from "./Comments.module.css";
import {dateConverter} from "../../assistive/accessoryFunctions/dateСonverter";
import down from "../../assistive/icons/down64.png";
import load from "../../assistive/icons/animatedIcon.gif";


const CommentsThread = function (props) {

    if (!!Object.values(props.getCommentThread).length) {
        return Object.values(props.getCommentThread).slice().sort((a, b) => b.id - a.id).map((x) => {
            return <div key={x.id} className={s.comments}>
                <div>{dateConverter(new Date(x.time * 1000))}</div>
                <div><b>{x.by}:</b> {x.text}</div>
            </div>
        })
    } else {
        return <div className={s.get_comments} onClick={() => props.plusComments(props.getComments)}>
            {props.isLoading? <img src={load} alt='load'/>:<img src={down} alt='down'/>}
        </div>
    }
}

export default CommentsThread;