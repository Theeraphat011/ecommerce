import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";
import Sidebar from "../components/sidebar/Sidebar";

const Layouts = () => {
   return (
      <>
         <Navbar />
         <main className="mt-9 mx-auto max-w-[1360px] overflow-hidden">
            <Banner />
            <div className="flex mt-15">
               <div className="w-1/4 mb-10 mr-15">
                  <Sidebar/>
               </div>
               <Outlet />
            </div>
         </main>
      </>
   );
};
export default Layouts;
