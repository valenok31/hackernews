import React from "react";
import CollectorComments from "./CollectorComments/CollectorComments";
import s from "./Comments.module.css";


const Comments = function (props) {

    let plusComments = (parent) => {
        props.handleCommentsThread(parent);
    }

    if (!!Object.values(props.getComments).length) {
        return Object.values(props.getComments).slice().sort((a, b) => b.id - a.id).map((x) => {
            return <CollectorComments getComments={x} plusComments={plusComments}
                                      getCommentThread={props.getComments[x.id].commentThread}
                                      isLoading={props.isLoading}/>
        })
    }
    return <div className={s.no_comments}>Нет комментариев :(</div>
}

export default Comments;