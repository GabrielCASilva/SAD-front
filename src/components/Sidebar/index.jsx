import { NavLink, useLocation } from "react-router-dom";
import Icon from "../Icon";
import "./style.css";

export default function Sidebar(){
    const location = useLocation();
    const { pathname } = location;

    const navlist = [
        {name: "Tarefas", icon: "tarefas", url: pathname === "/tarefas"? pathname: "/"},
        {name: "Funcionários", icon: "funcionarios", url: "funcionarios"},
        {name: "Setor", icon: "setor", url: "setor"},
        {name: "Metas", icon: "metas", url: "metas"},
    ]

    return (
        <aside className="sb-container b-600">
            <nav className="container p-right-zero">
                <ul className="flex column sb-ul-container">
                    {navlist.map((item, key) => <NavItem key={key} {...item} />)}
                </ul>
            </nav>
        </aside>
    )
}

function NavItem(props){
    const {name, icon, url} = props
    
    return (
        <NavLink to={url} className={({isActive}) => (
                [
                    "flex align-center sb-item-container sb-text-green",
                    isActive ? "active" : ''
                ].join(" ")
            )}>
            <Icon icon={icon} /><span>{name}</span>
        </NavLink>
    )
}