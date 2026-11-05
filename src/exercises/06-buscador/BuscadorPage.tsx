import { BuscadorView } from './components/BuscadorView';
import { useBuscador } from './hooks/useBuscador';

/** Datos del ejercicio: lista de lenguajes de programación. */
const LENGUAJES = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Java',
  'C#',
  'Go',
  'Rust',
  'Kotlin',
  'Ruby',
  'PHP',
];

/**
 * Página del ejercicio 6: conecta el filtrado (useBuscador) con la visual.
 * La lista vive acá, la búsqueda y el conteo no le importan.
 */
export default function BuscadorPage() {
  const { busqueda, resultados, escribirBusqueda } = useBuscador(LENGUAJES);

  return (
    <BuscadorView
      busqueda={busqueda}
      resultados={resultados}
      onEscribirBusqueda={escribirBusqueda}
    />
  );
}
