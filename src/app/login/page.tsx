import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex justify-center items-center flex-grow bg-gray-100">
        <section className="bg-white flex flex-col text-center justify-center items-center w-full md:w-5/12 h-4/6 p-8 m-3 md:m-16 rounded-md">
          <h1 className="text-3xl font-bold pb-2">Login</h1>
          <p>Entre com seu e-mail e senha para acessar sua conta</p>
          <form action="" className="py-4 w-full">
            <div className="p-2">
              <label htmlFor="email" className="block text-left">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="seu@email.com"
                className="border border-gray-400 p-1 px-2 rounded-md w-full"
              />
            </div>
            <div className="p-2">
              <label htmlFor="senha" className="block text-left">Senha</label>
              <input
                type="password"
                name="senha"
                id="senha"
                placeholder="Digite sua senha"
                className="border border-gray-400 p-1 px-2 rounded-md w-full"
              />
            </div>
            <input
              type="submit"
              value="Entrar"
              className="bg-black text-white rounded-md w-full py-2 mt-4"
            />
          </form>
          <Link href="/registro" className="block mt-4 text-gray-600">
            Você não possui uma conta? Registrar
          </Link>
        </section>
      </main>
    </div>
  );
}
