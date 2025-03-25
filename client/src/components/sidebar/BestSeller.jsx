import Rating from "../../image/rating.png";
import bestSeller from "./bestseller";

const BestSeller = () => {
   return (
      <>
         <div className="mt-15 text-gray-700">
            <h1 className="text-2xl font-bold mb-6">BEST SELLER</h1>

            {bestSeller.map((item, index) => (
               <div
                  key={index}
                  className="flex gap-4 p-3 rounded-md border-1 border-gray-300 text-gray-600 mt-4"
               >
                  <img src={item.picture} width={100} height={100} alt="" />
                  <div className="grid gap-2 text-xl">
                     <h1>{item.name}</h1>
                     <img src={Rating} width={100} height={100} alt="rating" />
                     <p>
                        <span className="line-through mr-5">${item.price}</span>
                        <span className="text-2xl font-bold text-gray-800">
                           ${item.sell}
                        </span>
                     </p>
                  </div>
               </div>
            ))}
         </div>
      </>
   );
};
export default BestSeller;
