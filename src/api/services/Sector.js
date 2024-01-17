import Service, { METHOD } from "../core"

export default class SectorService extends Service{
    static async getTasks(props) {
        const {signal} = props
         
        const response = await this.call({
            method: METHOD.GET,
            url: "/setores",
            signal: signal
        })
        
        return response
    }
}