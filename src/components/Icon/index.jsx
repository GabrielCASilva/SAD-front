import { Icon as Iconify } from '@iconify/react';

const ICONS = {
    "sino": "mdi:bell",
    "ajuda": "mdi:help-circle-outline",
    "conta": "mdi:account-box-outline",
    "tarefas": "mdi:clipboard-text-outline",
    "funcionarios": "mdi:badge-account-horizontal-outline",
    "setor": "mdi:account-details",
    "metas": "mdi:bullseye-arrow"
}

export default function Icon(props){
    const {icon, width = 24} = props
    return <Iconify icon={ICONS[icon]} width={width} />
}