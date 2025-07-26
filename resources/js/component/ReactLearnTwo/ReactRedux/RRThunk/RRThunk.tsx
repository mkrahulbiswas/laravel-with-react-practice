import { Provider } from 'react-redux'
import { advanceStore } from './ThunkStore'
import { Home } from './Component/Home'

export const RRThunk=()=> {

  return (
    <Provider store={advanceStore}>
        <Home/>
    </Provider>
  )
}
