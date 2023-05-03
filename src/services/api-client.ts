import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e8c900a1388d4ec982a85659329402ce'
    }
})