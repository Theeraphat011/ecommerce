import "./Banner";
import SubTitle from "./SubTitle";

const Banner = () => {
   return (
      <>
         <div className="h-[420px] mx-auto max-w-[1360px] bg-banner py-20 px-18 text-gray-100">
            <div>
               <p className="text-xl">Trending Accessories</p>
               <h1 className="text-4xl font-bold my-4 ">
                  MODERN <br /> SUNGLASSES
               </h1>
               <p className="text-xl">
                  starting at $ <span className="text-2xl">15</span>.00
               </p>
               <button className="bg-red-600 text-white py-2 px-5 rounded-md mt-4 cursor-pointer hover:bg-red-900 transition-all duration-300 hover:shadow-md">
                  SHOP NOW
               </button>
            </div>
         </div>
         <SubTitle />
      </>
   );
};
export default Banner;
