import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { storage } from "../utils";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const { product_id, user_id } = context.query;

  return {
    props: {
      product_id,
      user_id
    }
  }
}

export default function Purchase({ product_id, user_id }) {
  const { push } = useRouter();
  const [values, setValues] = useState({
    id: 34,
    product: product_id,
    quantity: 1,
    status: "PENDENTE",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    storage.orders.push(values);
    push('/pedido/1');
  }

  return (
    <>
      <section className="text-center w-full flex flex-col mt-8">
        <h1 className="font-bold text-4xl">Complete a compra</h1>
        <form className="space-y-3 mt-8" onSubmit={(event) => handleSubmit(event)}>
          <div className="flex justify-center my-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="text"
                name="street"
                placeholder="Endereço (rua, avenida, etc.)"
                required
                value={values.street}
                onChange={(event) => setValues({
                  ...values,
                  street: event.target.value
                })}
              />
              <Input
                type="number"
                name="number"
                placeholder="Número"
                required
                value={values.number}
                onChange={(event) => setValues({
                  ...values,
                  number: event.target.value
                })}
              />
              <Input
                type="text"
                name="neighborhood"
                placeholder="Bairro"
                required
                value={values.neighborhood}
                onChange={(event) => setValues({
                  ...values,
                  neighborhood: event.target.value
                })}
              />
              <Input
                type="text"
                name="complement"
                placeholder="Complemento"
                value={values.complement}
                onChange={(event) => setValues({
                  ...values,
                  complement: event.target.value
                })}
              />
              <Input
                type="text"
                name="payment"
                placeholder="Forma de pagamento"
                required
                fullWidth
                value={values.payment}
                onChange={(event) => setValues({
                  ...values,
                  payment: event.target.value
                })}
              />
              <Button type="submit">Finalizar compra</Button>
            </div>
          </div>

          
        </form>
      </section>
    </>
  )
}