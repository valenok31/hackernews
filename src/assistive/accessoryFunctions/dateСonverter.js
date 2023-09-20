import React from "react";

export const dateConverter = (date) => {

    let time = date;
    let month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']

    return <>
        {('0' + time.getDate()).slice(-2) +
        '.' + month[time.getMonth()] +
        '.' + time.getFullYear() +
        ' ' + ('0' + time.getHours()).slice(-2) +
        ':' + ('0' + time.getMinutes()).slice(-2)
            /*+ ':' + ('0' + time.getSeconds()).slice(-2)*/
        }
    </>
}