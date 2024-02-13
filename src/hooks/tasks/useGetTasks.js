import { useEffect } from "react";
import TaskService from "../../api/services/TaskService";
import { useStore } from "../../store";

export const useGetTasks = (props) => {
    const { params } = props || {};
    const { tasksSlice } = useStore();
    const {tasks, loading, error, setLoading, setError, setTasks} = tasksSlice;

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        
        const fetch = async () => {
            try{
                setLoading(true);
                
                const tasks = await TaskService.getTasks({signal, params});

                setTasks({ tasks });
                setError(false);
            } catch (error) { 
                setError(true);
            } finally {
                setLoading(false);
            }
        }
    
        fetch();

        return () => {
            console.log("cancelando...");
            controller.abort();
        }
    }, []);

    return {
        data: tasks, 
        isLoading: loading,
        isError: error
    };
}