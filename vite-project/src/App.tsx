import Label from "./components/label";
import Input from "./components/input";
import Button from "./components/Button";

function App() {
  return (
    <main className="bg-white max-w-4xl mx-auto py-24 px-48 rounded-xl shadow-lg">
      <section id="form-section" className="">
        <form>
          <div className="">
            <Label htmlFor="peso">Peso (kg):</Label>
            <Input
              type="number"
              id="peso"
            />
          </div>
          <div className="mt-4">
            <Label htmlFor="altura">Altura (cm):</Label>
            <Input
              type="number"
              id="altura"
            />
          </div>

          <Button type="submit">Calcular</Button>
        </form>
      </section>
      <section id="resultado-section" className="py-10 px-4 h-40">
        <p className="text-center text-neutral-400 text-xl">Saiba agora se está no seu peso ideal!</p>
      </section>
      <section id="tabela-section">
        <table className="mx-auto shadow-sm">
          <thead className="text-rose-400 bg-zinc-100 text-left">
            <tr className="">
              <th className="px-6 py-1">IMC</th>
              <th className="px-6 py-1">Classificação</th>
            </tr>
          </thead>
          <tbody className="[&>tr:nth-child(even)]:bg-zinc-100 [&>tr:nth-child(odd)]:bg-white [&>tr>td]:px-6 [&>tr>td]:py-1">
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
      </section>
    </main>
  );
}

export default App;
