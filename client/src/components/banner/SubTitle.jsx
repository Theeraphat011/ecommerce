import Arrow from "../../image/arrow.png";

const SubTitle = () => {
   const listName = [
      "DRESS & FROCK",
      "WINTER WEAR",
      "GLASSES & LENS",
      "SHORTS & JEANS",
   ];
   return (
      <>
         <div className="flex justify-between items-center w-full mt-15">
            {listName.map((item, index) => (
               <div key={index} className="flex gap-2 p-4 pr-25 border-1 border-gray-300 rounded-md hover:bg-gray-100 cursor-pointer transition-all duration-300 hover:shadow-md">
                  <img
                     src={Arrow}
                     alt=""
                     width={50}
                     className="bg-gray-400 rounded-md"
                  />
                  <div>
                     <h1>{item}</h1>
                     <p>Show All</p>
                  </div>
               </div>
            ))}
         </div>
      </>
   );
};
export default SubTitle;
