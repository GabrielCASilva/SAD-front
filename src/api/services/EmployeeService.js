import Service, { METHOD } from "../core"

export default class EmployeeService extends Service{
    static async getEmployees(props) {
        const {signal} = props
         
        const response = await this.call({
            method: METHOD.GET,
            url: "/funcionarios",
            signal: signal
        })
        
        return response
    }
}