export default function ProductPage({ params }) {
   const product = { id: params.productId, name: "Sample Product" };
   return (
      <>
         <h1>Product ID: {params.productId}</h1>
         <h2>Name: {product.name}</h2>
      </>
   );
}
