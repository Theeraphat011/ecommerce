
const Navigate = () => {
  const lists = [
    { name: "HOME", path: "/" },
    { name: "CATEGORIES", path: "/category" },
    { name: "MEN'S", path: "/mens" },
    { name: "WOMEN'S", path: "/womens" },
    { name: "PERFUME", path: "/perfume" },
    { name: "BLOG", path: "/blog" },
    { name: "HOT OFFERS", path: "/hotoffers" },
  ];

  return (
    <div className="container mx-auto max-w-[960px]">
      <div className="flex justify-between items-center py-3 px-5 text-sm">
        {lists.map((item, index) => (
          <a key={index} href={item.path}>
            <p>{item.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navigate;