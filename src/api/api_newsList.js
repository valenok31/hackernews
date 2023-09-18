import React from "react";
import axios from 'axios';

export const fetchNewsList = {

    fromHackerNews() {
        const requestExchangeRates = axios.create({
            baseURL: `https://hacker-news.firebaseio.com/v0/`,
        })
        return requestExchangeRates.get(`newstories.json?print=pretty`)
            .then(response => {
                return response;
            })
            .catch((err) => {
                // TODO: response in case of error
                console.log('no data')
                return err;
            })
    },
}

