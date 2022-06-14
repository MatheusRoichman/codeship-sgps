import Image from "next/image";
import RedirectButton from "../RedirectButton";

export default function ProductCard({ product }) {
  return (
    <div id={product.id} className="flex flex-col h-full justify-between">
      <div className="border-8 border-lime-600 border-solid w-fit">
        <Image
          src={product.picture}
          alt={product.name}
          width={200}
          height={200}
        />
      </div>
      <div className="my-4 w-[200px]">
        <h2 className="font-semibold line-clamp-2">{product.name} - {product.weight}</h2>
        <p className="font-medium opacity-80">{product.brand} - {product.category}</p>
        <p className="line-clamp-3">{product.description}</p>
        <p className="text-lime-600 text-2xl font-semibold mt-2">R${product.price}</p>
      </div>
      <div>
        <RedirectButton href={`/produtos/${product.id}`}>Ver mais</RedirectButton>
      </div>
    </div>
  )
}