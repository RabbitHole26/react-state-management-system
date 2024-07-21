import { useReducerContext } from '../../store/context/ReducerContext'
import Navbar from '../navbar/Navbar'

const Layout = ({children}) => {
  const {state} = useReducerContext()
  const {isDarkMode} = state.userMetaData

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-stone-900' : 'bg-neutral-100'}`}>
      <Navbar />
      <div className='grow'>
        {children}
      </div>
    </div>
  )
}

export default Layout
