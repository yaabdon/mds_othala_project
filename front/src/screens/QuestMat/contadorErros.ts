//cria uma variavel global q verifica quantos erros ocoreram
export let Strikes: number = 0;

// Se quiser poder atualizar:
export function NumeroDstrikes() {
  Strikes ++;
}

export function Resetastrikes() {
  Strikes = 0;
}
