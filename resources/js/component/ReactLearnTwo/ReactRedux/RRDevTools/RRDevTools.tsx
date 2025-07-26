import { Provider } from 'react-redux'
import { advanceStore } from './DevToolsStore'
import { Home } from './Component/Home'

export const RRDevTools=()=> {

  return (
    <Provider store={advanceStore}>
        <Home/>
    </Provider>
  )
}
