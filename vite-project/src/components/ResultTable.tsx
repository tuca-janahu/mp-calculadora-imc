import { formatarNumero } from "../lib/utils";

function ResultTable ({ IMCdata,}  : { IMCdata: {
    peso: number,
    altura: number,
    imc: number,
    resultado: string
}}) {
  return (
    <table className="mx-auto">
      <tbody className="py-1 px-6 text-center">
        <tr className="border-b-1 border-b-rose-500">
          <td className="font-bold py-1 px-6">Peso</td>
          <td className="font-bold py-1 px-6">Altura</td>
          <td className="font-bold py-1 px-6">IMC</td>
          <td className="font-bold py-1 px-6">Resultado</td>
        </tr>
        <tr>
          <td className="py-1 px-6">{IMCdata.peso} kg</td>
          <td className="py-1 px-6">{formatarNumero(IMCdata.altura)} m</td>
          <td className="py-1 px-6">{formatarNumero(IMCdata.imc)}</td>
          <td className="py-1 px-6">{IMCdata.resultado}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ResultTable;

