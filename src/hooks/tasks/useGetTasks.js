import { useEffect, useState } from "react"
import TaskService from "../../api/services/TaskService"

export const useGetTasks = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        
        const fetch = async () => {
            try{
                setIsLoading(true)
                
                const response = await TaskService.getTasks({signal})

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