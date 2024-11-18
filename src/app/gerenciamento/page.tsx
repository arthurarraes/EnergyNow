import Image from "next/image";
import grafico1 from "../../images/grafico1.png"
import grafico2 from "../../images/grafico2.png"

export default function Gerenciamento() {
    return (
      <main className="flex items-center flex-col bg-gray-100 p-3">
        <div className="bg-white rounded-md p-3 text-center m-2 w-10/12">
          <h1 className=" text-xl md:text-2xl mx-auto">Atual</h1>
          <Image src={grafico1} alt="Gráfico" className="mx-auto w-screen h-44"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-10/12">
          <div className="bg-gray-200 rounded-md p-3 text-center">
            <h1 className="text-xl md:text-2xl mx-auto">Projeção com mudança de hábitos</h1>
            <Image src={grafico2} alt="Gráfico" className="p-2 mx-auto w-screen h-44"/>
          </div>
          <div className="bg-gray-200 rounded-md p-3 text-center">
          <h1 className="text-xl md:text-2xl mx-auto">Projeção com Energia Limpa</h1>
          <Image src={grafico2} alt="Gráfico" className="p-2 mx-auto w-screen h-44"/>
          </div>
        </div>
      </main>
    );
  }