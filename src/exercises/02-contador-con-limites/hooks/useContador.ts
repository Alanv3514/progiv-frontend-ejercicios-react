import { useState } from 'react';

const MINIMO = 0;
const MAXIMO = 10;

/**
 * Lógica del ejercicio 2: contador con límites 0..10.
 * Jamás sale del rango, sin importar lo que pida la visual.
 */
export function useContador() {
  const [valor, setValor] = useState(0);

  function sumar() {
    if (valor < MAXIMO) setValor(valor + 1);
  }

  function restar() {
    if (valor > MINIMO) setValor(valor - 1);
  }

  function reiniciar() {
    setValor(MINIMO);
  }

  return { valor, sumar, restar, reiniciar };
}
