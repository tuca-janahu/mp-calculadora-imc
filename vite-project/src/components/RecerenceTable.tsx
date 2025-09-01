function ReferenceTable () {
    return (
        <table className="mx-auto shadow-sm">
          <thead className="text-rose-400 bg-zinc-100 text-left">
            <tr className="">
              <th className="px-8 py-1">IMC</th>
              <th className="px-8 py-1">Classificação</th>
            </tr>
          </thead>
          <tbody className="[&>tr:nth-child(even)]:bg-zinc-100 [&>tr:nth-child(odd)]:bg-white [&>tr>td]:px-8 [&>tr>td]:py-1">
            <tr>
              <td>Menor que 17</td>
              <td>Muito abaixo do peso</td>
            </tr>
            <tr>
              <td>Entre 17 e 18.5</td>
              <td>Abaixo do peso</td>
            </tr>
            <tr>
              <td>Entre 18.5 e 24.9</td>
              <td>Peso normal</td>
            </tr>
            <tr>
              <td>Entre 25 e 29.9</td>
              <td>Sobrepeso</td>
            </tr>
            <tr>
              <td>30 e 34.9</td>
              <td>Obesidade grau 1</td>
            </tr>
            <tr>
              <td>35 e 39.9</td>
              <td>Obesidade grau 2</td>
            </tr>
            <tr>
              <td>40 ou mais</td>
              <td>Obesidade grau 3</td>
            </tr>
          </tbody>
        </table>
    );
}

export default ReferenceTable