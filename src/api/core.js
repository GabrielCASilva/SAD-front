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
    static accessToken = null;

    static async obtainToken() {
        const response = await this.call({
            method: METHOD.POST,
            url: "/auth/login",
            data: {
                "email": "johndoe@gmail.com", 
                "password": "john"
            }
        })

        const user = {
            "name": "John Doe",
            "cargo": {
                "nome": "Supervisor",
                "tipoAvaliacao": "servidor",
                "permitidoManterMeta": false,
                "permitidoAvaliacaoServidor": true,
                "permitidoAvaliacaoSupervisor": false,
                "permitidoManterFuncionario": false,
                "permitidoManterSetor": false,
                "permitidoManterTarefa": true,
                "permitidoAtribuirTarefa": false,
                "permitidoProgredirTarefa": false
            }
        }

        localStorage.setItem("user", JSON.stringify(user));
        this.accessToken = response.access_token
    }

    static async setRefreshTokenTimeout(){}

    static async call(props){
        const {method, url, params = null, data = null, signal = null} = props
        const config = {method, baseURL: BASE_URL, url, data, params, signal}

        if(!this.accessToken && url !== "/auth/login"){
            await this.obtainToken()
        }

        if(this.accessToken) {
            config.headers = {Authorization: `Bearer ${this.accessToken}`}
        }

        try {
            const response = await axios.request(config)
            return response.data
        } catch (error) {
            if(error.response?.status === 401){
                this.accessToken = null
                await this.call(config)
            }else{
                throw error
            }
        }
    }
}