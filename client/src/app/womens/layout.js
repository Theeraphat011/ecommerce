export default function WomensLayout({ children }) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <h1>Shopping Cart</h1>
        {children}
      </div>
    );
  }