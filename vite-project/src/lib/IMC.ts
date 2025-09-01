export function calcularIMC (peso: number, altura: number): number {
    if (altura === 0) return 0;
    return peso / (altura ** 2);
}

export function resultadoIMC(imc: number): string {
    if (imc < 17) {
        return "Muito abaixo do peso";
    } else if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 25) {
        return "Peso normal";
    } else if (imc < 30) {
        return "Sobrepeso";
    } else if (imc < 35) {
        return "Obesidade grau I";
    } else if (imc < 40) {
        return "Obesidade grau II";
    } else {
        return "Obesidade grau III";
    }
}
