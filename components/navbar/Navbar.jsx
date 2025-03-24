import Input from "./Input"
import Navtigate from "./Navigate"
import Title from "./Title"

const Navbar = () => {
  return (
    <>
    <div className="bg-gray-50 ">
      <Title/>
      <hr className="text-gray-200"/>
      <Input/>
      <hr className="text-gray-200"/>
      <Navtigate/>
      </div>
    </>
  )
}
export default Navbar