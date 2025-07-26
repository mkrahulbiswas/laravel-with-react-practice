import { Provider } from 'react-redux'
import { advanceStore } from './AdvanceStore'
import { Home } from './Component/Home'

export const RRAdvance=()=> {

  return (
    <Provider store={advanceStore}>
        <Home/>
    </Provider>
  )
}
