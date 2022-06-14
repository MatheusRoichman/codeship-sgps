import Input from '../components/Input';
import Button from '../components/Button';
import { useState } from "react";
import { storage } from "../utils";
import { useRouter } from "next/router"

export default function Register() {
  const [values, setValues] = useState({});
  const [confirmPass, setConfirmPass] = useState('');
  const { push } = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (values.password !== confirmPass) {
      alert("AS SENHAS NÃO CONFEREM!");
      return;
    }

    storage.users.push(values);

    push('/login');
  }

  return (
    <>
      <section className="text-center w-full mt-8 space-y-8">
        <h1 className="font-bold text-4xl">Cadastro</h1>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="flex justify-center my-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                  type="text"
                  name="name"
                  placeholder="Seu nome completo"
                  required
                  value={values.name}
                  onChange={(event) => setValues({
                    ...values,
                    name: event.target.value
                  })}
                />
              <Input
                type="text"
                name="birth_date"
                placeholder="Data de nascimento"
                required
                value={values.birthDate}
                onChange={(event) => setValues({
                  ...values,
                  birthDate: event.target.value
                })}
              />
              <Input
                type="text"
                name="cpf"
                placeholder="CPF"
                required
                value={values.cpf}
                onChange={(event) => setValues({
                  ...values,
                  cpf: event.target.value
                })}
              />
              <Input
                type="text"
                name="phone"
                placeholder="Número de telefone"
                required
                value={values.phone}
                onChange={(event) => setValues({
                  ...values,
                  phone: event.target.value
                })}
              />
              <Input
                type="email"
                name="email"
                placeholder="E-mail"
                className="col-span-2"
                fullWidth
                required
                value={values.email}
                onChange={(event) => setValues({
                  ...values,
                  email: event.target.value
                })}
              />
              <Input
                type="password"
                name="password"
                placeholder="Senha"
                required
                value={values.password}
                onChange={(event) => setValues({
                  ...values,
                  password: event.target.value
                })}
              />
              <Input
                type="password"
                name="password_confirmation"
                placeholder="Confirme sua senha"
                required
                value={confirmPass}
                onChange={(event) => setConfirmPass(event.target.value)}
              />           
            </div>
          </div>

          <Button type="submit">Enviar</Button>
        </form>
      </section>
    </>
  );
}