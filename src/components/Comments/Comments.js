import React from "react";
import {dateConverter} from "../../assistive/accessoryFunctions/dateСonverter";
import s from "../Comments/Comments.module.css";
import plus from "../../assistive/icons/plus.png";

const Comments = function (props) {


    if (Object.entries(props.getComments)?.length !== 0) {
let plusComments = ()=>{

}
        let arr = Object.values(props.getComments).sort((a, b) => b.time - a.time).map((x) => {
            if (x.parent == props.id) {
                let time = new Date(x.time * 1000);
                let plus = <div></div>
                if(!!x?.kids){
                    plus = <div onClick={plusComments}><img src={plus} alt='plus'/></div>
                }
                return <div key={x.id} className={s.comments}>
                    {/*<div>{x.parent}</div>*/}
                    <div>{dateConverter(time)}</div>
                    <div><b>{x.by}:</b> {x.text}</div>
                    {plus}
                </div>
            }

        })


        return <>
            <h1>Комментарии</h1>
            <div>{arr}</div>

        </>
    }
}

export default Comments;