import Input from '../Input';
import Button from '../Button';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function CompanyForm() {
  const [values, setValues] = useState({});
  const { push } = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    push('/login');
  }

  return (
    <>
      <section className="text-center w-full flex flex-col mt-8">
        <h1 className="font-bold text-4xl">Cadastro da empresa</h1>
        <form className="space-y-3 mt-8" onSubmit={handleSubmit}>
          <div className="flex justify-center my-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="text"
                name="company_name"
                placeholder="Nome da empresa"
                required
                value={values.companyName}
                onChange={(event) => setValues({
                  ...values,
                  companyName: event.target.value
                })}
              />
              <Input
                type="text"
                name="cnpj"
                placeholder="CNPJ"
                required
                value={values.cnpj}
                onChange={(event) => setValues({
                  ...values,
                  cnpj: event.target.value
                })}
              />
              <Input
                type="number"
                name="contact_phone"
                placeholder="Telefone de contato"
                required
                value={values.contactPhone}
                onChange={(event) => setValues({
                  ...values,
                  contactPhone: event.target.value
                })}
              />
              <Input
                type="email"
                name="contact_email"
                placeholder="E-mail de contato"
                required
                value={values.contactEmail}
                onChange={(event) => setValues({
                  ...values,
                  contactEmail: event.target.value
                })}
              />
            </div>
          </div>    
          <Button type="submit">Enviar</Button>
        </form>
      </section>
    </>
  )
}