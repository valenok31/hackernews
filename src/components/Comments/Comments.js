import React from "react";

const Comments = function (props) {


    if (Object.entries(props.getComments).length !== 0) {

        let arr = Object.values(props.getComments).sort((a, b) => b.time - a.time).map((x) => {
            if (x.parent == props.id) {
                let time = new Date(x.time * 1000);
                let month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
                return <div key={x.id}>
                    <ul>
                        <li>{x.by}</li>
                        <li>{x.parent}</li>
                        <li>{('0' + time.getDate()).slice(-2) +
                        '.' + month[time.getMonth()] +
                        '.' + time.getFullYear() +
                        ' ' + ('0' + time.getHours()).slice(-2) +
                        ':' + ('0' + time.getMinutes()).slice(-2) +
                        ':' + ('0' + time.getSeconds()).slice(-2)}</li>
                        <li>{x.text}</li>
                    </ul>
                </div>
            }

        })


        return <>
            <div>Comments</div>
            <div>{arr}</div>

        </>
    }
}

export default Comments;