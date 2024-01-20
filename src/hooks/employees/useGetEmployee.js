import { useEffect, useState } from "react"
import EmployeeService from "../../api/services/EmployeeService"

export const useGetEmployee = (props) => {
    const {id, params} = props
    
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        
        const fetch = async () => {
            try{
                setIsLoading(true)
                
                const response = await EmployeeService.getEmployee({signal, id, params})

                setData(response)
                setIsError(false)
            } catch (error) {
                setIsError(true)
            } finally {
                setIsLoading(false)
            }
        }
    
        fetch()

        return () => {
            console.log("cancelando...")
            controller.abort()
        }
    }, [])

    return {data, isLoading, isError}
}