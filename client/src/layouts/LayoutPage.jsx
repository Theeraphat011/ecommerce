import {Outlet} from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'

const Layouts = () => {
  return (
    <>
        <Navbar/>
        <main className='mt-9 mx-auto max-w-[1360px] overflow-hidden'>
            <Outlet/>
        </main>
    </>
  )
}
export default Layouts