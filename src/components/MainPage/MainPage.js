import React from "react";
import {connect} from "react-redux";
import {handleNewsList,} from "../../redux/hackernews_reducer";
import s from "./MainPage.module.css";


class MainPage extends React.Component {

    componentDidMount() {
        this.props.handleNewsList();
    }


    render() {
        if (!!this.props.getNewsList) {
            console.log(this.props.getNewsList.data)
            let arr = this.props.getNewsList.data.map((x,n)=>{
                if(n>99){return}
                return <div>{n+1} - {x}</div>
            })
            return <div>{arr}</div>

        }
    }
}

let mapStateToProps = (state) => {
    return ({
        getNewsList: state.hackernews_reducer.newsList,
    })
};

let resultConnecting = connect(mapStateToProps, {
    handleNewsList,
})(MainPage);

export default resultConnecting;