import Service, { METHOD } from "../core"

const URL = "/funcionarios"

export default class EmployeeService extends Service{
    static async getEmployees(props) {
        const {signal} = props
         
        const response = await this.call({
            method: METHOD.GET,
            url: URL,
            signal: signal
        })
        
        return response
    }

    static async getEmployee(props) {
        const {signal, id, params} = props

        const response = await this.call({
            method: METHOD.GET,
            url: `${URL}/${id}`,
            signal: signal,
            params
        })

        return response
    }

    static async postEmployee(props) {
        const {signal, data} = props

        await this.call({
            method: METHOD.POST,
            url: URL,
            signal: signal,
            data: data
        })
    }

    static async updateEmployee(props){
        const {signal, id, data} = props

        await this.call({
            method: METHOD.PATCH,
            url: `${URL}/${id}`,
            signal: signal,
            data: data
        })
    }
}