import './conversor.css';

interface ConversorViewProps {
  celsius: string;
  fahrenheit: string | null;
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
      <input
        aria-label="Temperatura en °C"
        className="conversor-input"
        type="text"
        inputMode="decimal"
        value={celsius}
        onChange={(evento) => onEscribirCelsius(evento.target.value)}
      />

      {fahrenheit !== null && (
        <p className="conversor-resultado">
          <strong>{fahrenheit} °F</strong>
        </p>
      )}

      {haceCalor && <p className="conversor-aviso">Hace calor</p>}
    </section>
  );
}
