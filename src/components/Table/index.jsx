import { Table as AntdTable } from 'antd'
import { useNavigate } from 'react-router-dom'

export default function Table(props){
    const { columns, data, url } = props
    const navigate = useNavigate()

    return (
      <AntdTable columns={columns} dataSource={data} 
        rowKey={(record) => record.id}
        onRow={(record) => {
            return {
              onClick: (event) => navigate(`/${url}/${record.id}`)
            }
          }}
        />
    )
}