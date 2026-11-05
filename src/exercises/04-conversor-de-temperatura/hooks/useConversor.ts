import { useState } from 'react';

interface ConversorEstado {
  celsius: string;
  /** Fahrenheit derivado en cada render; null si la entrada no es numérica. */
  fahrenheit: number | null;
  haceCalor: boolean;
  escribirCelsius: (valor: string) => void;
}

/**
 * Lógica del ejercicio 4: estado del input de Celsius.
 * El input es texto; se convierte a número para calcular.
 * Fahrenheit no tiene estado propio: se deriva en cada render.
 */
export function useConversor(): ConversorEstado {
  const [celsius, setCelsius] = useState('');

  const escribirCelsius = (valor: string) => {
    setCelsius(valor);
  };

  const grados = Number(celsius);
  const convertible = celsius !== '' && Number.isFinite(grados);
  const fahrenheit = convertible ? grados * (9 / 5) + 32 : null;
  const haceCalor = convertible && grados > 30;

  return { celsius, fahrenheit, haceCalor, escribirCelsius };
}
