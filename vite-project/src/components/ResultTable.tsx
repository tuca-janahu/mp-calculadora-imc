import { formatarNumero } from "../lib/utils";

function ResultTable ({ IMCdata,}  : { IMCdata: {
    peso: number,
    altura: number,
    imc: number,
    resultado: string
}}) {
  return (
    <table className="mx-auto text-center text-xs md:text-base md:[&>tbody>tr>td]:py-1 md:[&>tbody>tr>td]:px-4
    [&>tbody>tr>td]:px-2 text-eutral-700 [&>tbody>tr:first-child]:font-bold">
      <tbody className="py-1 px-6 text-center">
        <tr className="border-b-1 border-b-rose-500">
          <td>Peso</td>
          <td>Altura</td>
          <td>IMC</td>
          <td>Resultado</td>
        </tr>
        <tr>
          <td>{IMCdata.peso} kg</td>
          <td>{formatarNumero(IMCdata.altura)} m</td>
          <td>{formatarNumero(IMCdata.imc)}</td>
          <td>{IMCdata.resultado}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ResultTable;

