import { useState } from 'react';

/**
 * Lógica del ejercicio 6: término de búsqueda y filtrado case-insensitive.
 * El filtrado es derivado: nunca guarda la lista filtrada en estado.
 */
export function useBuscador(lenguajes: string[]) {
  const [busqueda, setBusqueda] = useState('');

  function escribirBusqueda(termino: string) {
    setBusqueda(termino);
  }

  const coincide = (lenguaje: string) =>
    lenguaje.toLowerCase().includes(busqueda.toLowerCase());

  const resultados = busqueda === '' ? lenguajes : lenguajes.filter(coincide);

  return { busqueda, resultados, escribirBusqueda };
}
