import PerformanceAppraisalModal from "../../components/Modal/modals/PerformanceAppraisalModal";
import { Title } from "../../components/Titles";
import { Button } from 'antd';

export default function EmployeeDetail(){
    return (
        <>
            <Title>Funcionários {">"} Fernando</Title>
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