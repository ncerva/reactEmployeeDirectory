import axios from "axios";
const url = 'https://randomuser.me/';

export default {
    ApiSearch: function () {
        return axios.get(url)
    }
};