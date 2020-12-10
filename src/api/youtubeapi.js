import axios from 'axios';

const KEY = 'AIzaSyALpObFFsMKMxOffweKOJVK26-73sxIbUw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 8,
        resultsPerPage: 8,
        key: KEY,

    },
})