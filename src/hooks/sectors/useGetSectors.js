import { useEffect } from "react";
import { useStore } from "../../store";
import SectorService from "../../api/services/SectorService";

export const useGetSectors = () => {
    const { sectors } = useStore();
    const { data, loading, error, setLoading, setError, setData } = sectors;


    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        
        const fetch = async () => {
            try{
                setLoading(true);
                
                const sectors = await SectorService.getSectors({signal});

                setData({ data: sectors });
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