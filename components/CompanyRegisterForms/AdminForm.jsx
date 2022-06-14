import Input from '../Input';
import Button from '../Button';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Register() {
  const { push } = useRouter();
  const [values, setValues] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    push('empresa');
  }

  return (
    <>
      <section className="text-center w-full mt-8 space-y-8">
        <h1 className="font-bold text-4xl">Cadastro do administrador</h1>
        <form onSubmit={event => handleSubmit(event)}>
          <div className="flex justify-center my-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                  type="text"
                  name="username"
                  placeholder="Seu nome completo"
                  required
                  value={values.username}
                  onChange={(event) => setValues({
                    ...values,
                    username: event.target.value
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
                type="tel"
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
                value={values.passwordConfirmation}
                onChange={(event) => setValues({
                  ...values,
                  passwordConfirmation: event.target.value
                })}
              />           
            </div>
          </div>

          <Button type="submit">Continuar</Button>
        </form>
      </section>
    </>
  );
}