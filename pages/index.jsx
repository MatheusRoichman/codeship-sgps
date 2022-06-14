import Head from 'next/head';
import Image from 'next/image';
import RedirectButton from '../components/RedirectButton'

export default function Home() {
  return (
    <>
      <Head>
        <title>CodeShip SGPS</title>
      </Head>

      <section className="h-[92vh] flex items-center justify-center">
        <div className="flex items-center justify-center space-x-8">
          <Image
            src="/img/dog-gray.png"
            alt="CodeShip SGPS Logo"
            width={230}
            height={180}
          />
          <div className="flex flex-col">
            <h1 className="font-bold text-4xl">CodeShip SGPS</h1>
            <div className="mt-4 space-y-4">
              <RedirectButton href="/login">Login</RedirectButton>
              <RedirectButton href="/cadastro">Cadastro</RedirectButton>
              <RedirectButton href="/cadastro-empresa/admin">Cadastre sua empresa</RedirectButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
