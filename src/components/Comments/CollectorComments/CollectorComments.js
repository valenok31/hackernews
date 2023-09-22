import React from "react";
import s from "../Comments.module.css";
import {dateConverter} from "../../../assistive/accessoryFunctions/dateСonverter";
import CommentsThread from "../CommentsThread";


const CollectorComments = function (props) {
    let x = props.getComments;

    return <div key={x.id} className={s.comments}>
        <div>{dateConverter(new Date(x.time * 1000))}</div>
        <div><b>{x.by}:</b> {x.text}</div>
        {!!x?.kids ?
            <CommentsThread getCommentThread={props.getCommentThread}
                            getComments={props.getComments}
                            plusComments={props.plusComments}
                            isLoading={props.isLoading}/> : ''}
    </div>
}

export default CollectorComments;