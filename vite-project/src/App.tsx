import Label from "./components/Label";
import Input from "./components/Input";
import Button from "./components/Button";
import ReferenceTable from "./components/RecerenceTable";

function App() {
  return (
    <main className="bg-white max-w-4xl mx-auto py-24 px-48 rounded-xl shadow-lg">
      <section id="form-section" className="">
        <form>
          <div className="">
            <Label htmlFor="peso">Peso (kg):</Label>
            <Input
            className=""
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
        <ReferenceTable></ReferenceTable>
      </section>
    </main>
  );
}

export default App;
