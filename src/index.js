import './scss/index.scss'
import {Excel} from '@/components/excel/Excel'
import {Header} from '@/components/header/Header'
import {Toolbar} from '@/components/toolbar/Toolbar'
import {Formula} from '@/components/formula/Formula'
import {Table} from '@/components/table/Table'
import {createStore, CreateStore} from '@core/createStore'
import {rootReducer} from '@/store/rootReducer'
import {storage} from '@core/utils'

const initialState = storage('excel-state')

const store = createStore(rootReducer, initialState)
const store2 = new CreateStore(rootReducer, initialState)

store.subscribe(state => {
  console.log('app state', state)
  storage('excel-state', state)
  console.log('storage state', storage('excel-state'))
})

store2.subscribe(state => {
  console.log('app state2', state)
  storage('excel-state', state)
  console.log('storage state', storage('excel-state'))
})

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table],
  store,
  store2
})

excel.render()

