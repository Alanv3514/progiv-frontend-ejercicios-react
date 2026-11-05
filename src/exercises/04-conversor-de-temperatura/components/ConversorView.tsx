import './conversor.css';

interface ConversorViewProps {
  celsius: string;
  fahrenheit: number | null;
  haceCalor: boolean;
  onEscribirCelsius: (valor: string) => void;
}

/** Visual del ejercicio 4: input controlado + resultado debajo. */
export function ConversorView({
  celsius,
  fahrenheit,
  haceCalor,
  onEscribirCelsius,
}: ConversorViewProps) {
  return (
    <section className="conversor">
      <label className="conversor-label" htmlFor="celsius-input">
        Temperatura en °C
      </label>
      <input
        id="celsius-input"
        className="conversor-input"
        type="text"
        inputMode="decimal"
        value={celsius}
        onChange={(evento) => onEscribirCelsius(evento.target.value)}
      />

      {fahrenheit !== null && (
        <p className="conversor-resultado">
          {celsius} °C = <strong>{fahrenheit} °F</strong>
        </p>
      )}

      {haceCalor && <p className="conversor-aviso">Hace calor</p>}
    </section>
  );
}
