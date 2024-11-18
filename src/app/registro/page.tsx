import Link from "next/link";

export default function Registro() {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex justify-center items-center bg-gray-100 flex-1">
        <section className="bg-white flex flex-col text-center justify-center items-center w-full md:w-5/12 h-auto m-3 p-8 rounded-md">
          <h1 className="text-3xl font-bold pb-2">Registrar</h1>
          <form action="" className="py-4 w-full">
            <div className="p-2">
              <label htmlFor="nome" className="block text-left">Nome</label>
              <input
                type="text"
                name="nome"
                id="nome"
                placeholder="Nome Completo"
                className="border border-gray-400 p-1 px-2 rounded-md w-full"
              />
            </div>
            <div className="p-2">
              <label htmlFor="cpf" className="block text-left">CPF</label>
              <input
                type="text"
                name="cpf"
                id="cpf"
                placeholder="CPF"
                className="border border-gray-400 p-1 px-2 rounded-md w-full"
              />
            </div>
            <div className="p-2">
              <label htmlFor="cep" className="block text-left">CEP</label>
              <input
                type="text"
                name="cep"
                id="cep"
                placeholder="CEP"
                className="border border-gray-400 p-1 px-2 rounded-md w-full"
              />
            </div>
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
              value="Registrar"
              className="bg-black text-white rounded-md w-full py-2 mt-4"
            />
          </form>
          <Link href="/login" className="block mt-4 text-gray-600">
            Você já possui uma conta? Logar
          </Link>
        </section>
      </main>
    </div>
  );
}
