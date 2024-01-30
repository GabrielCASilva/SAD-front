import './App.css'
import Routers from './router'
import { ConfigProvider } from 'antd'
import 'dayjs/locale/pt-br'
import ptBR from 'antd/locale/pt_BR'
import dayjs from 'dayjs'

import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'

dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)

dayjs.locale('pt-br')

export default function App() {

  return (
    <ConfigProvider locale={ptBR} theme={{
      components: {
        Table: {
          headerBg: "#fff",
          footerColor: "#fff"
        },
        Token: {
          colorPrimary: "#006e25",
          colorLinkActive: "#006e25",
          colorLink: "#006e25"
        },
        Progress: {
          remainingColor: "#fff"
        },
      },
    }}>
      <Routers/>
    </ConfigProvider>
  )
}
