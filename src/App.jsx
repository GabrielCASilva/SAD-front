import './App.css'
import Routers from './router'
import { ConfigProvider } from 'antd'
import 'dayjs/locale/pt-br'
import ptBR from 'antd/locale/pt_BR'
import dayjs from 'dayjs'

dayjs.locale('pt-br')

export default function App() {

  return (
    <ConfigProvider locale={ptBR}>
      <Routers/>
    </ConfigProvider>
  )
}
