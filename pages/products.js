import { useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([
    { id: 1, name: "아이폰 13", price: 800000 },
    { id: 2, name: "갤럭시 S22", price: 750000 },
    { id: 3, name: "닌텐도 스위치", price: 350000 },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">🛒 중고 상품 목록</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="border p-4 my-2">
            <h2 className="text-xl">{product.name}</h2>
            <p>가격: {product.price.toLocaleString()}원</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
