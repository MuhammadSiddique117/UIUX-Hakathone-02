// components/Product.tsx

interface ProductProps {
  name: string;
  price: string;
  description: string;
}

const Product = ({ name, price, description }: ProductProps) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-gray-600">{price}</p>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default Product;
