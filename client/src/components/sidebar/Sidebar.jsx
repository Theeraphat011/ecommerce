import { useState } from "react";
import category from "./category.js";
import BestSeller from "./BestSeller.jsx";

const Sidebar = () => {
   const [isClick, setIsClieck] = useState(null);

   return (
      <>
         <div className="p-5 rounded-md border-1 border-gray-300 text-gray-800">
            <h1 className="font-bold text-2xl my-3">CATEGORY</h1>
            {category.map((item, index) => (
               <div key={index} className="text-gray-600 text-lg">
                  <div className="flex justify-between items-center mb-3 cursor-pointer">
                     <div
                        className="flex gap-4"
                        onClick={() =>
                           setIsClieck(isClick === index ? null : index)
                        }
                     >
                        <img
                           src={item.picture}
                           alt="Logo-category"
                           width={20}
                           height={20}
                        />
                        {item.name}
                     </div>
                     <img
                        src={item.icon}
                        alt="detail-category"
                        width={20}
                        height={20}
                     />
                  </div>
                  <ul>
                     {item.details.map((sub, nub) => (
                        <p
                           className={`text-red-400 ${
                              isClick === index ? "block" : "hidden"
                           }`}
                           key={nub}
                        >
                           {sub}
                        </p>
                     ))}
                  </ul>
               </div>
            ))}
         </div>
         <BestSeller />
      </>
   );
};
export default Sidebar;
