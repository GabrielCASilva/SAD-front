import Service, { METHOD } from "../core"

const URL = "/metas"

export default class GoalService extends Service{
    static async getTasks(props) {
        const {signal} = props
         
        const response = await this.call({
            method: METHOD.GET,
            url: URL,
            signal: signal
        })
        
        return response
    }

    static async getTask(props){
        const {signal, id} = props

        const response = await this.call({
            method: METHOD.GET,
            url: `${URL}/${id}`,
            signal: signal
        })

        return response
    }

    static async postTask(props){
        const {signal, data} = props

        await this.call({
            method: METHOD.POST,
            url: URL,
            signal: signal,
            data: data
        })
    }

    static async uptadeTask(props){
        const {signal, data, id} = props

        await this.call({
            method: METHOD.PATCH,
            url: `${URL}/${id}`,
            signal: signal,
            data: data
        })
    }
}