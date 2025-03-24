import Image from "next/image";
import Facebook from "/public/img/Navbar/facebook.png";
import Instagram from "/public/img/Navbar/instagram.png";
import Twitter from "/public/img/Navbar/twitter.png";
import Linkedin from "/public/img/Navbar/linkedin.png";
import Arrow from "/public/img/Navbar/arrow.png";

const Title = () => {
   const Images = [Facebook, Instagram, Twitter, Linkedin];
   const Menu = ["$USD", "ENGLISH"];
   return (
      <>
         <div className="container mx-auto max-w-[1380px]">
            <div className="flex justify-between items-center text-gray-500 text-xs py-3 px-5">
               <div className="flex gap-2">
                  {Images.map((img, index) => (
                     <div key={index} className="bg-gray-200 p-[4px] rounded-sm">
                        <Image
                           src={img}
                           width={18}
                           height={18}
                           alt="img-title"
                           className="opacity-60 p-[2px] cursor-pointer"
                        />{" "}
                     </div>
                  ))}
               </div>

               <p>FREE SHIPPING THIS WEEK ORDER OVER - $100</p>
               <div className="flex gap-4">
                  {Menu.map((item, idex) => (
                     <div key={idex}>
                        <div className="flex gap-1 items-center cursor-pointer">
                           {item}
                           <Image
                              src={Arrow}
                              width={20}
                              height={20}
                              alt="menu"
                           />
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </>
   );
};
export default Title;
