import Service, { METHOD } from "../core"

export default class TaskService extends Service{
    static async getTasks(props) {
        const {signal} = props
         
        const response = await this.call({
            method: METHOD.GET,
            url: "/tarefas",
            signal: signal
        })
        
        return response
    }
}