import Service, { METHOD } from "../core"

export default class GoalService extends Service{
    static async getTasks(props) {
        const {signal} = props
         
        const response = await this.call({
            method: METHOD.GET,
            url: "/metas",
            signal: signal
        })
        
        return response
    }
}