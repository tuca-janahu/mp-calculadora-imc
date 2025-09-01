import Label from "./components/Label";
import Input from "./components/Input";
import Button from "./components/Button";
import ReferenceTable from "./components/RecerenceTable";
import { calcularIMC, resultadoIMC } from "./lib/IMC";
import { useState } from "react";
import ResultTable from "./components/ResultTable";

function App() {
  const [IMCdata, setIMCdata] = useState<{
    peso: number;
    altura: number;
    imc: number;
    resultado: string;
  } | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    //pegar dados de forms
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData) as {
      peso: string;
      altura: string;
    };
    console.log(data);

    //validação de campos vazios
    const { peso, altura } = data;

    if (!peso || !altura) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    //parse string to number
    const pesoNum = parseFloat(peso.replace(",", "."));
    const alturaNum = parseFloat(altura.replace(",", ".")) / 100;

    if (isNaN(pesoNum) || isNaN(alturaNum)) {
      alert("Por favor, insira valores numéricos.");
      return;
    }

    //valores inválidos
    if (pesoNum <= 2 || pesoNum > 500) {
      alert("O peso precisa estar entre 2kg e 500kg");
      return;
    }

    if (alturaNum <= 0.5 || alturaNum > 3) {
      alert("A altura precisa estar entre 0cm e 300cm");
      return;
    }

    const imc = calcularIMC(pesoNum, alturaNum);
    const resultado = resultadoIMC(imc);

    e.preventDefault();
    console.log("IMC:", imc.toFixed(2));
    console.log("Resultado:", resultado);

    //setar dados
    setIMCdata({
      peso: pesoNum,
      altura: alturaNum,
      imc,
      resultado,
    });

    e.currentTarget.reset();
  }

  function limpar(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    setIMCdata(null);
  }

  return (
    <main className="bg-white max-w-4xl mx-auto md:py-24 md:px-48 py-12 px-10 rounded-xl shadow-lg">
      <section id="form-section">
        <h1 className="text-2xl font-bold mb-4 md:text-3xl">Calculadora de IMC</h1>
        <form onSubmit={handleSubmit}>
          <div className="">
            <Label htmlFor="peso">Peso (kg):</Label>
            <Input
              disabled={!!IMCdata}
              className=""
              type="text"
              name="peso"
              id="peso"
            />
          </div>
          <div className="mt-4">
            <Label htmlFor="altura">Altura (cm):</Label>
            <Input disabled={!!IMCdata} type="text" name="altura" id="altura" />
          </div>
          {IMCdata ? (
            <Button onClick={limpar}>Limpar</Button>
          ) : (
            <Button type="submit">Calcular</Button>
          )}
        </form>
      </section>
      <section id="resultado-section" className="py-10 px-4 h-40">
        {IMCdata ? (
          <ResultTable IMCdata={IMCdata} />
        ) : (
          <p className="text-center text-neutral-400 text-md">
            Saiba agora se está no seu peso ideal!
          </p>
        )}
      </section>
      <section id="tabela-section">
        <ReferenceTable></ReferenceTable>
      </section>
    </main>
  );
}

export default App;
