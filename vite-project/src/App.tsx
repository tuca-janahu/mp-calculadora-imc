function App() {
  return (
      <main className="bg-white max-w-4xl mx-auto py-24 px-48 rounded-xl shadow-lg">
        <section id="form-section">
          <form>
            <div>
              <label htmlFor="peso">Peso (kg):</label>
              <input type="number" id="peso" name="peso" />
            </div>
            <div>
              <label htmlFor="altura">Altura (cm):</label>
              <input type="number" id="altura" name="altura" />
            </div>

            <button type="submit">Calcular</button>
          </form>
        </section>
        <section id="resultado-section">
          <p>Saiba agora se está no seu peso ideal!</p>
        </section>
        <section id="tabela-section">
          <table>
            <thead>
              <tr>
                <th>IMC</th>
                <th>Classificação</th>
              </tr>
            </thead>
            <tbody>
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
