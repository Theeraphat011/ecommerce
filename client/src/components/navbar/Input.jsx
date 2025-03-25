import Serach from "../../image/search.png";
import User from "../../image/user.png";
import Heart from "../../image/heart.png";
import Bag from "../../image/bag.png";

const Input = () => {
   return (
      <>
         <div className="container mx-auto max-w-[1380px]">
            <div className="flex justify-between items-center py-6 px-5">
               <h1 className="font-bold text-5xl text-gray-800">Iron</h1>

               <div className="flex gap-2 items-center border-1 rounded-lg border-gray-300 w-2xl text-gray-800">
                  <input
                     type="text"
                     placeholder="Enter your product name..."
                     className="p-2 focus:outline-none text-sm w-full placeholder:text-xs"
                  />
                  <img
                     src={Serach}
                     width={20}
                     height={20}
                     alt="search"
                     className="mx-2 cursor-pointer"
                  />
               </div>

               <div className="flex gap-6 items-center text-gray-400">
                  <div>
                     <img
                        src={User}
                        width={30}
                        height={30}
                        alt="User"
                        className="cursor-pointer"
                     />
                  </div>
                  <div className="relative">
                     <img
                        src={Heart}
                        width={30}
                        height={30}
                        alt="User"
                        className="cursor-pointer"
                     />
                     <span className="absolute bottom-6 left-6 bg-red-500 text-white py-[2px] px-[6px] rounded-full text-xs">
                        0
                     </span>
                  </div>
                  <div className="relative">
                     <img
                        src={Bag}
                        width={35}
                        height={35}
                        alt="User"
                        className="cursor-pointer"
                     />
                     <span className="absolute bottom-[27px] left-6 bg-red-500 text-white py-[2px] px-[6px] rounded-full text-xs">
                        0
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
export default Input;
