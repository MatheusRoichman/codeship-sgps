import Input from '../components/Input';
import Button from '../components/Button';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validateEmail } from '../utils';
import { useRouter } from 'next/router';
import { userAuth } from '../services/auth/userAuth';

export default function Login() {
  const { push } = useRouter();

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      await userAuth.auth(values.email, values.password);

      push('/produtos');
    } catch (error) {
      toast(error.message, {
        type: 'error',
        autoClose: 5000
      });
    }
  }

  return (
    <>
      <ToastContainer />
      <section className="text-center w-full flex flex-col mt-8">
        <h1 className="font-bold text-4xl">Login</h1>
        <form className="space-y-3 mt-8" onSubmit={(event) => handleSubmit(event)}>
          <div className="flex justify-center my-4">
            <div className="grid grid-cols-1 gap-4">
              <Input
                type="email"
                name="user"
                placeholder="E-mail da conta"
                required
                fullWidth
                value={values.email}
                onChange={(event) => setValues({
                  ...values,
                  email: event.target.value,
                })}
                onBlur={(event) => {
                  if (!validateEmail(event.target.value)) {
                    setErrors({
                      ...errors,
                      email: "E-mail inválido"
                    });
                  } else {
                    setErrors({
                      ...errors,
                      email: ""
                    });
                  }
                }}
              />
              <p className="text-red-600 text-left">{errors.email}</p>
              <Input
                type="password"
                name="password"
                placeholder="Senha"
                required
                fullWidth
                value={values.password}
                onChange={(event) => {
                  setValues({
                    ...values,
                    password: event.target.value,
                  });
                }}
              />
            </div>
          </div>    
          <Button type="submit">Entrar</Button>
        </form>
      </section>
    </>
  );
}