import { TarjetaPregunta } from './components/TarjetaPregunta';
import { useVisible } from './hooks/useVisible';

/**
 * Página del ejercicio 3: conecta la visibilidad (useVisible) con la tarjeta
 * visual. Solo pasa datos y callbacks.
 */
export default function MostrarYOcultarPage() {
  const { visible, alternar } = useVisible();

  return (
    <TarjetaPregunta
      pregunta="¿Qué es JSX?"
      respuesta="Una sintaxis que permite escribir estructura parecida a HTML dentro de JavaScript. Se transforma en llamadas a funciones de React."
      visible={visible}
      onAlternar={alternar}
    />
  );
}
