import './buscador.css';

interface BuscadorViewProps {
  busqueda: string;
  resultados: string[];
  onEscribirBusqueda: (termino: string) => void;
}

/** Visual del ejercicio 6: input de búsqueda + lista + contador. */
export function BuscadorView({
  busqueda,
  resultados,
  onEscribirBusqueda,
}: BuscadorViewProps) {
  return (
    <section className="buscador">
      <input
        className="buscador-input"
        type="text"
        value={busqueda}
        onChange={(evento) => onEscribirBusqueda(evento.target.value)}
        placeholder="Buscar lenguaje..."
        aria-label="Buscar lenguaje"
      />

      <p className="buscador-conteo">{resultados.length} resultados</p>

      <ul className="buscador-items">
        {resultados.map((lenguaje) => (
          <li className="buscador-item" key={lenguaje}>
            {lenguaje}
          </li>
        ))}
      </ul>
    </section>
  );
}
