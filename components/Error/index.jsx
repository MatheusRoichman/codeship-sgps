export default function Error({ message }) {
  return (
    <>
      <div className="mt-12 w-screen text-center">
        <p className="rotate-90 text-6xl">:(</p>
        <h1 className="font-semibold text-4xl mt-5">Ocorreu um erro.</h1>
        <h2 className="font-medium text-2xl mt-5">Tente novamente outra hora.</h2>
        <p>Detalhes: {message || "sem detalhes."}</p>
      </div>
    </>
  )
}