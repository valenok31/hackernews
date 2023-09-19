import React from "react";

const MainPageList = function (props) {



    let newsList100 = props.newsList100;
   // let getNewsPage = props.getNewsPage;
    //console.log(getNewsPage)

    //props.handleNewsPage;
   let mass = newsList100.forEach((x)=>{
        return <div>x.id</div>
    })


    return <div>{mass}</div>
}

export default MainPageList;