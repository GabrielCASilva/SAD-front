import PerformanceAppraisalModal from "../../components/Modal/modals/PerformanceAppraisalModal"
import { Title } from "../../components/Titles"
import { Button } from 'antd'
import { useGetEmployee } from "../../hooks/employees/useGetEmployee"
import { useParams } from "react-router-dom"

export default function EmployeeDetail(){
    const {id} = useParams()
    const {data, isLoading} = useGetEmployee({id})

    return (
        <>
            <Title>Funcionários {">"} {data.nome}</Title>
            <div className="flex" style={{gap: "var(--base-2-4rem)"}}>
                <div className="flex column" style={{gap: "var(--base-1-4rem)"}}>
                    <div></div>
                    <div></div>
                    <PerformanceAppraisalModal />
                    <Button>Desativar funcionário</Button>
                    <Button>Editar dados</Button>
                </div>
                <div className="flex column">
                </div>
            </div>
        </>
    )
}