import React from "react";
import axios from 'axios';

export const fetchNewsList = {
    fromHackerNews() {
        const request = axios.create({
            baseURL: `https://hacker-news.firebaseio.com/v0/`,
        })
        return request.get(`newstories.json?print=pretty`)
            .then(response => {
                return response;
            })
            .catch((err) => {
                console.log('no data')
                return err;
            })
    },

    setNewsPage(id) {
        const request = axios.create({
            baseURL: `https://hacker-news.firebaseio.com/v0/item/`,
        })
        return request.get(`${id}.json?print=pretty`)
            .then(response => {
                return response;
            })
            .catch((err) => {
                console.log(err)
                return err;
            })
    },
}

