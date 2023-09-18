import s from './App.module.css'
import {Route, Routes} from 'react-router-dom';
import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import MainPage from "./components/MainPage/MainPage";
import NewsPage from "./components/NewsPage/NewsPage";

class App extends React.Component {

  render() {
    return (<div className={s.app__container}>

          <div>
            <Routes>
              <Route path='/' element={<MainPage/>}/>
              <Route path='/news' element={<NewsPage/>}/>
            </Routes>
          </div>
        </div>
    )
  }
}

let mapStateToProps = (state) => ({
  getNewsList: state.hackernews_reducer.newsList,
});

export default compose(
    connect(mapStateToProps, {}))
(App);
