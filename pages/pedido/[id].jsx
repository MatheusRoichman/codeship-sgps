import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { storage } from '../../utils';
import { productService } from '../../services/product/productService';

export default function OrderDetails() {
  const [order, setOrder] = useState({});
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const data = storage.orders.find((order) => order.id === 1);
    setOrder(data);

    productService.getById(1).then(data => {
      setProduct(data)
    });

    if (Object.keys(order).length && Object.keys(product).length) setLoading(false);
  });

  return (
    <>
      <ToastContainer />

      { loading ? <p>Carregando...</p> : (
        <div className="p-10 space-y-6">
          <h1 className="font-semibold text-3xl">Detalhes: Pedido #1</h1>
          <h2 className="font-semibold text-xl">Produto:</h2>
          <div className="flex flex-col md:flex-row space-x-12">
            <div className="flex flex-col justify-between">
              <h2 className="font-semibold line-clamp-2">{product.name} - {product.weight}</h2>
              <p className="font-medium opacity-80">{product.brand} - {product.category}</p>
              <p className="w-1/2">{product.description}</p>
              <p className="text-lime-600 text-2xl font-semibold mt-2">R${product.price}</p>
              <p className="text-lime-600 text-2xl font-semibold mt-2">Forma de pagamento: {order.payment}</p>
            </div>
          </div>   
          <h2 className="font-semibold text-xl">Status: {order.status.toLowerCase()}</h2>        
        </div>
      )}
      
    </>
  );
}