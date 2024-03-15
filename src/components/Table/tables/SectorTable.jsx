import Table from '..';
import { SECTOR_COLUMNS } from '../../../constants/tablesColumns';
import { useGetSectors } from '../../../hooks/sectors/useGetSectors';

export default function SectorTable() {
	const { data } = useGetSectors();

	return <Table columns={SECTOR_COLUMNS} data={data} url="setor" />;
}
