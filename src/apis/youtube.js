import axios from 'axios'

const KEY = 'AIzaSyBJgL5tcUxmDbaga_5d59yboYXLfhNVDGU';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults:5,
        key:KEY
    }
});

