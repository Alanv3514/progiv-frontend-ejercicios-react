import './contador.css';

interface ContadorViewProps {
  valor: number;
  onSumar: () => void;
  onRestar: () => void;
  onReiniciar: () => void;
}

/** Visual del ejercicio 2: display + tres botones, puro props/callbacks. */
export function ContadorView({ valor, onSumar, onRestar, onReiniciar }: ContadorViewProps) {
  return (
    <section className="contador">
      <p className="contador-valor" aria-live="polite">{valor}</p>
      <div className="contador-botones">
        <button
          type="button"
          className="contador-boton"
          disabled={valor === 0}
          onClick={onRestar}
        >
          -
        </button>
        <button
          type="button"
          className="contador-boton"
          disabled={valor === 10}
          onClick={onSumar}
        >
          +
        </button>
        <button type="button" className="contador-boton" onClick={onReiniciar}>
          Reiniciar
        </button>

      </div>
      {valor === 10 && <p className="contador-leyenda">Llegaste al máximo</p>}
    </section>
  );
}
