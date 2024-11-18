'use client'

import { useState, useContext } from "react";
import { AuthContext } from "@/app/context";

export default function Calculadora() {
  // Estados para armazenar os valores dos inputs e a média
  const [watt1, setWatt1] = useState<number | string>("");
  const [watt2, setWatt2] = useState<number | string>("");
  const [watt3, setWatt3] = useState<number | string>("");
  const [media, setMedia] = useState<number | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  // Obter o usuário a partir do contexto
  const { user } = useContext(AuthContext);

  // Função para calcular a média
  const calcularMedia = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verificar se todos os campos foram preenchidos
    if (watt1 === "" || watt2 === "" || watt3 === "") {
      setErro("Por favor, preencha todos os campos antes de calcular a média.");
      setMedia(null); // Limpar a média em caso de erro
      return;
    }

    // Caso todos os campos estejam preenchidos, calcular a média
    const watts = [watt1, watt2, watt3].map(Number);
    const mediaCalculada = watts.reduce((acc, watt) => acc + watt, 0) / watts.length;
    setErro(null); // Limpar a mensagem de erro
    setMedia(mediaCalculada);

    // Se o usuário estiver autenticado, enviar os dados para a API
    if (user?.email) {
      try {
        const resposta = await fetch("http://localhost:8080/api/dados", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
            watt1: watts[0],
            watt2: watts[1],
            watt3: watts[2],
          }),
        });

        if (!resposta.ok) {
          throw new Error("Erro ao enviar os dados para a API.");
        }
      } catch (erro) {
        console.error("Erro ao enviar os dados:", erro);
        setErro("Houve um erro ao enviar os dados para a API.");
      }
    }
  };

  // Função para classificar o consumo
  const classificarConsumo = (media: number) => {
    if (media <= 150) {
      return "Consumo baixo! Excelente eficiência energética.";
    } else if (media <= 350) {
      return "Consumo médio. Considere otimizar o uso de energia.";
    } else {
      return "Consumo alto. Verifique maneiras de reduzir o consumo.";
    }
  };

  return (
    <div className="flex flex-col">
      <main className="flex justify-center items-center bg-gray-100 flex-1">
        <section className="bg-white flex flex-col text-left justify-center items-start w-full md:w-5/12 h-auto m-3 p-8 rounded-md">
          <h1 className="text-3xl font-bold pb-2 mx-auto">Calculadora de Watts</h1>
          {erro && <p className="text-red-500 mt-2 mx-auto">{erro}</p>}
          <form onSubmit={calcularMedia} className="py-4 w-full">
            <div className="p-2">
              <label htmlFor="watt1" className="block text-left">Potência Mês 1 (Watts)</label>
              <input
                type="number"
                name="watt1"
                id="watt1"
                placeholder="150"
                className="border border-gray-400 p-1 px-2 rounded-md w-full"
                value={watt1}
                onChange={(e) => setWatt1(e.target.value)}
              />
            </div>
            <div className="p-2">
              <label htmlFor="watt2" className="block text-left">Potência Mês 2 (Watts)</label>
              <input
                type="number"
                name="watt2"
                id="watt2"
                placeholder="250"
                className="border border-gray-400 p-1 px-2 rounded-md w-full"
                value={watt2}
                onChange={(e) => setWatt2(e.target.value)}
              />
            </div>
            <div className="p-2">
              <label htmlFor="watt3" className="block text-left">Potência Mês 3 (Watts)</label>
              <input
                type="number"
                name="watt3"
                id="watt3"
                placeholder="200"
                className="border border-gray-400 p-1 px-2 rounded-md w-full"
                value={watt3}
                onChange={(e) => setWatt3(e.target.value)}
              />
            </div>
            <input
              type="submit"
              value="Calcular Média"
              className="bg-black text-white rounded-md w-full py-2 mt-4"
            />
          </form>

          {media !== null && !erro && (
            <div className="mt-4 p-4 bg-gray-100 rounded-md w-full">
              <div>
                <h1 className="text-xl font-semibold">Resultado:</h1>
                <p className="text-gray-500">Consumo Médio Mensal: {media.toFixed(2)} kWh</p>
                <p className="text-gray-500">{classificarConsumo(media)}</p>
              </div>
              <div className="pt-5">
                <h1 className="text-xl font-semibold">Recomendações:</h1>
                <p className="text-gray-500">Mantenha o hábito de desligar aparelhos em standby.</p>
                <p className="text-gray-500">Utilize lâmpadas LED de baixo consumo.</p>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
