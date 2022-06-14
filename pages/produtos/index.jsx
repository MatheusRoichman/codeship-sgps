import { useEffect, useState } from "react";
import { productService } from "../../services/product/productService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Error from "../../components/Error";
import ProductCard from "../../components/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      productService.getAll().then(data => {
        setProducts(data);
      })
    } catch (err) {
      toast(err.message, {
        type: "error",
        autoClose: 5000,
      })
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="w-screen flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-16 gap-y-6 my-12">
          {
            !!products && products.map(product => <ProductCard key={product.id} product={product} />)
          }
          {
            !products && <Error />
          }
        </div>
      </div>
    </>
  );
}