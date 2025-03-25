import Arrow from "../../image/arrow.png";
import Dess from "../../image/DRESS.png";
import Winter from "../../image/WINTER-WEAR.png";
import Glass from "../../image/glasses.png";
import Shorts from "../../image/SHORTS.png";

const SubTitle = () => {
   const listName = [
      { name: "DRESS & FROCK", picture: Dess },
      { name: "WINTER WEAR", picture: Winter },
      { name: "GLASSES & LENS", picture: Glass },
      { name: "SHORTS & JEANS", picture: Shorts },
   ];
   return (
      <>
         <div className="flex justify-between items-center w-full mt-15">
            {listName.map((item, index) => (
               <div
                  key={index}
                  className="flex gap-2 p-4 pr-25 border-1 border-gray-300 rounded-md hover:bg-gray-100 cursor-pointer transition-all duration-300 hover:shadow-md"
               >
                  <img
                     src={item.picture}
                     alt=""
                     width={60}
                     height={50}
                     className="bg-gray-400 rounded-md object-cover"
                  />
                  <div>
                     <h1>{item.name}</h1>
                     <p className="text-red-500">Show All</p>
                  </div>
               </div>
            ))}
         </div>
      </>
   );
};
export default SubTitle;
