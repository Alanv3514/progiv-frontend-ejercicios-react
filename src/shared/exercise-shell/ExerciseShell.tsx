import type { Exercise } from '../../data/exercises';

/**
 * Renderiza un enunciado o pista, envolviendo los fragmentos delimitados
 * por backticks en chips <code>, igual que en el PDF.
 */
function RichText({ text }: { text: string }) {
  const parts = text.split('`');
  return (
    <>
      {parts.map((part, index) =>
        index % 2 === 1 ? <code key={index}>{part}</code> : part,
      )}
    </>
  );
}

/**
 * Panel compartido de ejercicio: número del enunciado, título, etiqueta del
 * tema, consigna, pista plegable, captura del resultado esperado y leyenda.
 * Otra pestaña renderiza uno de estos y pasa su propia implementación como children.
 */
export function ExerciseShell({
  exercise,
  children,
}: {
  exercise: Exercise;
  children: React.ReactNode;
}) {
  const { number, title, tag, consigna, hint, image, caption } = exercise;

  return (
    <article className="exercise">
      <div className="exercise-header">
        <span className="exercise-number">{number}</span>
        <div>
          <h2 className="exercise-title">{title}</h2>
          <span className="exercise-tag">{tag}</span>
        </div>
      </div>

      <p className="exercise-consigna">
        <RichText text={consigna} />
      </p>

      <details className="exercise-hint">
        <summary>Pista</summary>
        <p>
          <RichText text={hint} />
        </p>
      </details>

      <h3 className="exercise-expected-title">Así debería quedar</h3>
      <div className="exercise-preview">
        <div className="exercise-preview-bar" aria-hidden="true" />
        <img src={image} alt={`Ejercicio ${number}: así debería quedar`} />
      </div>
      <p className="exercise-caption">{caption}</p>

      <div className="exercise-solution">{children}</div>
    </article>
  );
}
