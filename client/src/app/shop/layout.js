export default function ShopLayout({ children }) {
   return (
      <div className="flex">
         <aside className="w-1/4 p-4">Filter/Sidebar</aside>
         <div className="flex-1 p-4">{children}</div>
      </div>
   );
}
