import Image from "next/image";
import { useEffect, useState } from "react";
import { productService } from "../../services/product/productService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Error from "../../components/Error";
import RedirectButton from "../../components/RedirectButton";

export async function getServerSideProps(context) {
  return {
    props: {
      id: context.params.id
    }
  }
}

export default function Product({ id }) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      productService.getById(id).then(data => {
        setProduct(data);
        setLoading(false)
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
      {
        !product && <Error />
      }
      {
        loading ? <p>Carregando...</p> : (
          <>
            <div className="p-20">
              <div className="flex flex-col md:flex-row space-x-12">
                <Image
                  src={product.picture}
                  alt={product.name}
                  width={300}
                  height={300}
                />
                <div className="flex flex-col justify-between">
                  <h2 className="font-semibold line-clamp-2">{product.name} - {product.weight}</h2>
                  <p className="font-medium opacity-80">{product.brand} - {product.category}</p>
                  <p className="w-1/2">{product.description}</p>
                  <p className="text-lime-600 text-2xl font-semibold mt-2">R${product.price}</p>
                  <div className="w-1/2">
                    <RedirectButton href={'/compra?product_id=' + id + '&user_id=' + localStorage.getItem('user_id')}>Comprar</RedirectButton>
                  </div>
                </div>
              </div>            
            </div>
          </>
        )
      }
    </>
  );
}