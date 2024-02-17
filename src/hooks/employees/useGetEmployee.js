import { useEffect, useState } from "react";
import EmployeeService from "../../api/services/EmployeeService";
import { useStore } from "../../store";
import TaskService from "../../api/services/TaskService";

export const useGetEmployee = (props) => {
    const {id, params} = props;
    
    const { employee } = useStore();
    const { data, loading, error, setLoading, setError, setEmployee } = employee;

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        
        const fetch = async () => {
            try{
                setLoading(true);
                
                const employee = await EmployeeService.getEmployee({signal, id, params});

                setEmployee({data: employee});
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
        data, 
        isLoading: loading,
        isError: error
    };
}

export const useGetEmployeeAndEmployeesTasks = (props) => {
    const { id } = props;
    
    const { employee } = useStore();
    const { data, loading, error, setLoading, setError, setEmployee } = employee;
    
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        
        const fetch = async () => {
            try {
                setLoading(true);
                
                const employee = await EmployeeService.getEmployee({signal, id});

                const tasks = await TaskService.getTasks({signal});

                const employeeTasks = tasks.filter((task) => {
                    if(employee?.cargo?.nome === "Servidor"){
                        return task.funcionarioAlocadoId === employee.id;
                    }
                    return [];
                })

                setEmployee({data: {...employee, tarefas: employeeTasks}});
                setError(false);

            } catch (error) {
                setError(false);

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
        data, 
        isLoading: loading,
        isError: error
    };

}