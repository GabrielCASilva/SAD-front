import axios from "axios"

const BASE_URL = import.meta.env.VITE_BASE_URL

export const METHOD = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    PATCH: "PATCH",
    DELETE: "DELETE"
}

export default class Service{
    static async call(props){
        const {method, url, params, data = null, signal} = props
        const config = {method, baseURL: BASE_URL, url, data, params, signal}

        try {
            const response = await axios.request(config)
            return response.data
        } catch (error) {
            throw console.error(error)
        }
    }
}