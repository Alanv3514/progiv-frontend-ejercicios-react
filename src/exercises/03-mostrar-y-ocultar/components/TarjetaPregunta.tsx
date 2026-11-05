import './tarjeta-pregunta.css';

interface TarjetaPreguntaProps {
  pregunta: string;
  respuesta: string;
  visible: boolean;
  onAlternar: () => void;
}

/** Visual del ejercicio 3: tarjeta de pregunta/respuesta componible. */
export function TarjetaPregunta({
  pregunta,
  respuesta,
  visible,
  onAlternar,
}: TarjetaPreguntaProps) {
  return (
    <section className="tarjeta-pregunta">
      <h3 className="tarjeta-pregunta-texto">{pregunta}</h3>
      {visible && <p className="tarjeta-pregunta-respuesta">{respuesta}</p>}
      <button
        type="button"
        className="tarjeta-pregunta-boton"
        onClick={onAlternar}
      >
        {visible ? 'Ocultar respuesta' : 'Mostrar respuesta'}
      </button>
    </section>
  );
}
